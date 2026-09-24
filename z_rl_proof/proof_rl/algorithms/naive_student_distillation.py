"""Distillation that seeds the student head and prop encoder from the teacher."""

from __future__ import annotations

from z_rl.algorithms.distillation import Distillation
from z_rl.utils.checkpoint import module_state_dict_from_checkpoint


class NaiveStudentDistillation(Distillation):
    """Load an RL teacher, then copy its head and prop encoder into the student.

    A distillation checkpoint still loads the student as usual. ``warmup_iters`` keeps the
    prop encoder and the head fixed, so the depth encoder in the heightmap slot is what trains.
    ``frozen_prop_encoder`` keeps the prop encoder fixed after that. Both default to off.

    The student has no action distribution. Rollouts and the loss use the head output, and the
    loss is MSE against the teacher's deterministic action. ``use_muon`` is the built-in
    Distillation flag: hidden 2-D weights use Muon, and the remaining student parameters use AdamW.
    """

    def __init__(
        self,
        *args,
        frozen_prop_encoder: bool = False,
        warmup_iters: int = 0,
        use_muon: bool = True,
        muon_adamw_weight_decay: float = 0.01,
        **kwargs,
    ) -> None:
        if warmup_iters < 0:
            raise ValueError(f"`warmup_iters` must be >= 0, got {warmup_iters}.")
        kwargs["loss_type"] = "mse"
        kwargs["student_stochastic_output"] = False
        # Build the optimizer while every student parameter is still trainable. Warmup then
        # toggles requires_grad, and those parameters stay in the Muon and AdamW groups.
        super().__init__(
            *args,
            use_muon=use_muon,
            muon_adamw_weight_decay=muon_adamw_weight_decay,
            **kwargs,
        )
        self.frozen_prop_encoder = bool(frozen_prop_encoder)
        self.warmup_iters = int(warmup_iters)
        student = self._raw_student
        prop_encoder = student.latent_adapter.encoders[student.latent_spec.prop_obs_group]

        if self.frozen_prop_encoder:
            print("[NaiveStudentDistillation] prop encoder stays fixed.")
            for param in prop_encoder.parameters():
                param.requires_grad_(False)

        if self.warmup_iters > 0:
            for param in student.head.parameters():
                param.requires_grad_(False)
            print(
                "[NaiveStudentDistillation] warmup for "
                f"{self.warmup_iters} iterations keeps the prop encoder and head fixed."
            )

    def update(self) -> dict[str, float]:
        """ Change requires_grad once meet warmup_iters """
        if self.num_updates == self.warmup_iters and self.warmup_iters > 0:
            student = self._raw_student
            # update head module after warmup
            for param in student.head.parameters():
                param.requires_grad_(True)
            # update prop encoder module after warmup if not frozen
            if not self.frozen_prop_encoder:
                prop_encoder = student.latent_adapter.encoders[student.latent_spec.prop_obs_group]
                for param in prop_encoder.parameters():
                    param.requires_grad_(True)
        return super().update()

    def save(self) -> dict:
        saved_dict = super().save()
        saved_dict["num_updates"] = self.num_updates
        return saved_dict

    def load(self, loaded_dict: dict, load_cfg: dict | None, strict: bool) -> bool:
        from_teacher = (
            load_cfg is None
            and "student_state_dict" not in loaded_dict
            and ("actor_state_dict" in loaded_dict or "teacher_state_dict" in loaded_dict)
        )
        if from_teacher:
            load_cfg = {"teacher": True, "iteration": False, "student_modules": {"head": "teacher"}}

        loaded_iteration = super().load(loaded_dict, load_cfg, strict)

        if from_teacher:
            group = self._raw_student.latent_spec.prop_obs_group
            adapter = self._raw_student.latent_adapter
            state = module_state_dict_from_checkpoint(loaded_dict, "latent_adapter", role="teacher")
            for prefix, module in {
                f"encoders.{group}.": adapter.encoders[group],
                f"obs_normalizers.{group}.": adapter.obs_normalizers[group],
            }.items():
                module.load_state_dict(
                    {key[len(prefix) :]: value for key, value in state.items() if key.startswith(prefix)},
                    strict=True,
                )
            print("[NaiveStudentDistillation] initialized head and prop encoder from teacher.")
        elif loaded_iteration:
            self.num_updates = int(loaded_dict["num_updates"] if "num_updates" in loaded_dict else loaded_dict["iter"] + 1)

        if self.warmup_iters > 0 and self.num_updates >= self.warmup_iters:
            student = self._raw_student
            for param in student.head.parameters():
                param.requires_grad_(True)
            if not self.frozen_prop_encoder:
                prop_encoder = student.latent_adapter.encoders[student.latent_spec.prop_obs_group]
                for param in prop_encoder.parameters():
                    param.requires_grad_(True)

        return loaded_iteration
