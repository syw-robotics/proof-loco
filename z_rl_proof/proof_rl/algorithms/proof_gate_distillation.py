"""Distill a PROOF depth student with a variance net and a mask gate.

``mu`` is fit by MSE to the teacher's masked heightmap latent. Gaussian NLL
receives a detached ``mu`` and trains only the variance net. Gate BCE trains
only the gate. The action loss is MSE on the deterministic head output.
"""

from __future__ import annotations

import torch
import torch.nn as nn
import torch.nn.functional as F
from tensordict import TensorDict

from z_rl.algorithms.distillation import Distillation
from z_rl.utils.checkpoint import module_state_dict_from_checkpoint


class ProofGateDistillation(Distillation):
    """Behavior, latent, variance, and gate losses for the PROOF depth student."""

    def __init__(
        self,
        *args,
        behavior_loss_coef: float = 1.0,
        nll_loss_coef: float = 1.0,
        gate_loss_coef: float = 1.0,
        latent_loss_coef: float = 1.0,
        warmup_latent_loss_coef: float = 1.0,
        latent_warmup_iterations: int = 0,
        initialize_student_from_teacher: bool = True,
        teacher_mask_obs_group: str = "depth_corrupt",
        teacher_exterio_obs_group: str = "heightmap",
        frozen_prop_encoder: bool = False,
        use_muon: bool = True,
        muon_adamw_weight_decay: float = 0.01,
        **kwargs,
    ) -> None:
        if latent_warmup_iterations < 0:
            raise ValueError(
                f"`latent_warmup_iterations` must be non-negative, got {latent_warmup_iterations}."
            )
        kwargs["loss_type"] = "mse"
        kwargs["student_stochastic_output"] = False
        self.behavior_loss_coef = behavior_loss_coef
        self.nll_loss_coef = nll_loss_coef
        self.gate_loss_coef = gate_loss_coef
        self.latent_loss_coef = latent_loss_coef
        self.warmup_latent_loss_coef = warmup_latent_loss_coef
        self.latent_warmup_iterations = int(latent_warmup_iterations)
        self.initialize_student_from_teacher = bool(initialize_student_from_teacher)
        self.teacher_mask_obs_group = teacher_mask_obs_group
        self.teacher_exterio_obs_group = teacher_exterio_obs_group
        self.frozen_prop_encoder = bool(frozen_prop_encoder)
        # Build the optimizer while every student parameter is still trainable. Later freezes
        # toggle requires_grad, and those parameters stay in the Muon and AdamW groups.
        super().__init__(
            *args,
            use_muon=use_muon,
            muon_adamw_weight_decay=muon_adamw_weight_decay,
            **kwargs,
        )
        prop_encoder = self._raw_student.latent_adapter.prop_encoder
        if self.frozen_prop_encoder or self.latent_warmup_iterations > 0:
            for param in prop_encoder.parameters():
                param.requires_grad_(False)
        if self.frozen_prop_encoder:
            print("[ProofGateDistillation] prop encoder stays fixed.")
        if self.latent_warmup_iterations > 0:
            for param in self._raw_student.head.parameters():
                param.requires_grad_(False)
            print(
                "[ProofGateDistillation] warmup for "
                f"{self.latent_warmup_iterations} iterations keeps the prop encoder and head fixed."
            )

    def act(self, obs: TensorDict) -> torch.Tensor:
        if self.num_updates < self.latent_warmup_iterations:
            # warmup uses teacher to rollout
            self.student(obs, stochastic_output=False, force_open_gate=True)
            with torch.no_grad():
                actions = self.teacher(obs)
        else:
            # normal rollout uses student
            actions = self.student(obs, stochastic_output=False)
        self.transition.actions = actions.detach()
        self.transition.privileged_actions = torch.empty_like(self.transition.actions)
        self.transition.observations = obs
        return self.transition.actions

    def update(self) -> dict[str, float]:
        warming_up = self.num_updates < self.latent_warmup_iterations
        if self.num_updates == self.latent_warmup_iterations and self.latent_warmup_iterations > 0:
            for param in self._raw_student.head.parameters():
                param.requires_grad_(True)
            if not self.frozen_prop_encoder:
                for param in self._raw_student.latent_adapter.prop_encoder.parameters():
                    param.requires_grad_(True)
        self.num_updates += 1
        metric_sums: dict[str, float] = {}
        metric_counts: dict[str, int] = {}
        loss_accum: torch.Tensor | None = None
        pending_steps = 0

        for _epoch in range(self.num_learning_epochs):
            self.student.reset(hidden_state=self.last_hidden_states[0])
            self.teacher.reset(hidden_state=self.last_hidden_states[1])
            self.student.detach_hidden_state()
            for batch in self.storage.generator():
                actions = self.student(batch.observations, stochastic_output=False, force_open_gate=False)
                total_loss, metrics = self._compute_losses(batch.observations, actions, warmup=warming_up)
                loss_accum = total_loss if loss_accum is None else loss_accum + total_loss
                pending_steps += 1
                for key, value in metrics.items():
                    metric_sums[key] = metric_sums.get(key, 0.0) + value
                    metric_counts[key] = metric_counts.get(key, 0) + 1
                if pending_steps >= self.gradient_length:
                    self._optimizer_step(loss_accum)
                    loss_accum = None
                    pending_steps = 0
                dones = batch.dones.view(-1)
                self.student.reset(dones)
                self.teacher.reset(dones)
                self.student.detach_hidden_state(dones)

        if loss_accum is not None:
            self._optimizer_step(loss_accum)

        self.last_hidden_states = (self.student.get_hidden_state(), self.teacher.get_hidden_state())
        self.student.detach_hidden_state()
        self.student.update_normalization(self.storage.observations.flatten(0, 1))
        self.storage.clear()
        return {key: value / metric_counts[key] for key, value in metric_sums.items()}

    def save(self) -> dict:
        saved_dict = super().save()
        saved_dict["num_updates"] = self.num_updates
        return saved_dict

    def load(self, loaded_dict: dict, load_cfg: dict | None, strict: bool) -> bool:
        from_teacher = self.initialize_student_from_teacher and (
            load_cfg is None
            and "student_state_dict" not in loaded_dict
            and ("actor_state_dict" in loaded_dict or "teacher_state_dict" in loaded_dict)
        )
        if from_teacher:
            load_cfg = {"teacher": True, "iteration": False, "student_modules": {"head": "teacher"}}
        loaded_iteration = super().load(loaded_dict, load_cfg, strict)
        if from_teacher:
            adapter = self._raw_student.latent_adapter
            state = module_state_dict_from_checkpoint(loaded_dict, "latent_adapter", role="teacher")
            for prefix, module in {
                "adapter.encoders.prop.": adapter.prop_encoder,
                "adapter.obs_normalizers.prop.": adapter.prop_normalizer,
            }.items():
                module.load_state_dict(
                    {key[len(prefix) :]: value for key, value in state.items() if key.startswith(prefix)},
                    strict=True,
                )
            print("[ProofGateDistillation] initialized head and prop encoder from teacher.")
        elif loaded_iteration:
            self.num_updates = int(loaded_dict["num_updates"] if "num_updates" in loaded_dict else loaded_dict["iter"] + 1)
        if self.latent_warmup_iterations > 0 and self.num_updates >= self.latent_warmup_iterations:
            for param in self._raw_student.head.parameters():
                param.requires_grad_(True)
            if not self.frozen_prop_encoder:
                for param in self._raw_student.latent_adapter.prop_encoder.parameters():
                    param.requires_grad_(True)
        return loaded_iteration

    def _compute_losses(
        self,
        observations: TensorDict,
        actions: torch.Tensor,
        warmup: bool,
    ) -> tuple[torch.Tensor, dict[str, float]]:
        with torch.no_grad():
            privileged_actions = self.teacher(observations)
            inner = self._raw_teacher.latent_adapter.adapter
            height = inner.encoders[self.teacher_exterio_obs_group](
                inner.obs_normalizers[self.teacher_exterio_obs_group](observations[self.teacher_exterio_obs_group])
            )
            mask = observations[self.teacher_mask_obs_group].to(dtype=height.dtype)
            if mask.ndim == 1:
                mask = mask.unsqueeze(-1)
            teacher_exterio_latent = height * mask
        adapter = self._raw_student.latent_adapter
        mu = adapter.last_exterio_latent_mu
        log_var = adapter.last_exterio_latent_log_var
        raw_gate = adapter.last_raw_gate
        gate_target = observations[self.teacher_mask_obs_group].to(dtype=raw_gate.dtype)
        if gate_target.ndim == 1:
            gate_target = gate_target.unsqueeze(-1)
        gate_target = gate_target.expand_as(raw_gate)
        mu_latent_loss = self.loss_fn(mu, teacher_exterio_latent)
        inv_var = torch.exp(-log_var)
        nll_loss = (0.5 * torch.square(teacher_exterio_latent - mu.detach()) * inv_var + 0.5 * log_var).mean()
        gate_loss = F.binary_cross_entropy(raw_gate.clamp(1.0e-6, 1.0 - 1.0e-6), gate_target)
        metrics = {
            "mu_latent": mu_latent_loss.item(),
            "nll": nll_loss.item(),
            "gate": gate_loss.item(),
            "teacher_mask_mean": gate_target.mean().item(),
            "raw_gate_mean": raw_gate.mean().item(),
            "log_var_mean": log_var.mean().item(),
            "warmup": 1.0 if warmup else 0.0,
        }
        if warmup:
            total = (
                self.warmup_latent_loss_coef * mu_latent_loss
                + self.nll_loss_coef * nll_loss
                + self.gate_loss_coef * gate_loss
            )
            return total, metrics
        behavior_loss = self.loss_fn(actions, privileged_actions)
        total = (
            self.behavior_loss_coef * behavior_loss
            + self.latent_loss_coef * mu_latent_loss
            + self.nll_loss_coef * nll_loss
            + self.gate_loss_coef * gate_loss
        )
        metrics["behavior"] = behavior_loss.item()
        metrics["student_gate_mean"] = adapter.last_gate.mean().item()
        return total, metrics

    def _optimizer_step(self, loss: torch.Tensor) -> None:
        self.optimizer.zero_grad()
        loss.backward()
        if self.is_multi_gpu:
            self.reduce_parameters()
        if self.max_grad_norm:
            nn.utils.clip_grad_norm_(self.student.parameters(), self.max_grad_norm)
        self.optimizer.step()
        self.student.detach_hidden_state()
