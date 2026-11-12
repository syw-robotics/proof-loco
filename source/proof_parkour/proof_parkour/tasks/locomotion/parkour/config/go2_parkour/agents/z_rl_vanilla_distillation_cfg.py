from isaaclab.utils import configclass

from z_rl.adaptor.isaaclab import (
    ZRlComposableModelCfg,
    ZRlDistillationAlgorithmCfg,
    ZRlDistillationRunnerCfg,
)

from .z_rl_vanilla_ppo_cfg import VanillaHeightmapParkourPPORunnerCfg

_TEACHER_ACTOR = VanillaHeightmapParkourPPORunnerCfg().actor


@configclass
class VanillaStudentDistillationAlgorithmCfg(ZRlDistillationAlgorithmCfg):
    """Distill actions, with an optional freeze of the prop encoder and a heightmap-slot warmup."""

    class_name: str = "proof_rl.algorithms.vanilla_student_distillation:VanillaStudentDistillation"
    """The algorithm class name."""

    frozen_prop_encoder: bool = False
    """Keep the copied prop encoder fixed for the whole run. Defaults to False."""

    warmup_iters: int = 0
    """Learning iterations that keep the prop encoder and the head fixed.

    ``0`` disables warmup. The action loss still runs; gradients update the depth encoder.
    """

    student_stochastic_output: bool = False
    """Fit the head action. The student has no distribution to sample."""

    use_muon: bool = True
    """Use Distillation's built-in Muon optimizer for hidden 2-D student weights."""

    muon_adamw_weight_decay: float = 0.01
    """AdamW weight decay for the non-Muon student parameters when ``use_muon`` is enabled."""


@configclass
class VanillaVisionParkourDistillationRunnerCfg(ZRlDistillationRunnerCfg):
    """Distill the vanilla heightmap teacher into a depth student.

    The student latent is ``[prop_encoder, depth_cnn, last_prop]``. The prop encoder
    matches the teacher, and the CNN width matches the teacher's heightmap latent, so
    the teacher head loads onto the student. The head writes the action directly; there
    is no action distribution. Distillation fits that action to the teacher's action with
    MSE. Loading an RL checkpoint copies the prop encoder, its normalizer, and the head.
    The CNN stays randomly initialized. ``use_muon`` selects Distillation's built-in Muon optimizer.

    ``frozen_prop_encoder`` defaults to False. ``warmup_iters`` defaults to 0. A positive
    warmup keeps the prop encoder and the head fixed, so the depth encoder is what trains.
    """

    num_steps_per_env = 24
    max_iterations = 6000
    save_interval = 500
    experiment_name = "parkour_vanilla_vision_distill"
    obs_groups = {
        "student": ["prop", "depth_image"],
        "teacher": ["prop", "heightmap"],
    }
    student = ZRlComposableModelCfg(
        class_name="proof_rl.models.vanilla_student_vision_model:VanillaStudentVisionModel",
        hidden_dims=[512, 256, 128],
        activation="elu",
        obs_normalization=False,
        init_weights=0.01,
        latent_spec={
            "class_name": "proof_rl.models.vanilla_student_vision_model:VanillaStudentLatentSpec",
            "image_obs_group": "depth_image",
            "prop_obs_group": "prop",
            "prop_encoder_cfg": dict(_TEACHER_ACTOR.encoder_cfgs["prop"]),
            "append_last_obs": True,
            "append_obs_group": "prop",
            "cnn_cfg": {
                "output_channels": [2, 1],
                "kernel_size": [3, 3],
                "stride": [1, 1],
                "padding": "zeros",
                "activation": "relu",
                "global_pool": "none",
                "norm": "none",
            },
            "cnn_projection_cfg": {
                "hidden_dims": [128],
                "output_dim": int(_TEACHER_ACTOR.encoder_cfgs["heightmap"]["output_dim"]),
                "activation": "relu",
            },
        },
    )
    teacher = _TEACHER_ACTOR.copy()
    algorithm = VanillaStudentDistillationAlgorithmCfg(
        num_learning_epochs=5,
        learning_rate=1.0e-4,
        gradient_length=24,
        max_grad_norm=1.0,
        loss_type="mse",
        student_stochastic_output=False,
        use_muon=True,
        frozen_prop_encoder=True,
        warmup_iters=500,
    )
