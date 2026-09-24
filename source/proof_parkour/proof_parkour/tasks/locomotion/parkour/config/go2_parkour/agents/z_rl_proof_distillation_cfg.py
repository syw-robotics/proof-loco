from isaaclab.utils import configclass

from proof_rl.rl_cfg import ProofGateDistillationAlgorithmCfg, ProofGateStudentLatentSpecCfg
from z_rl.adaptor.isaaclab import ZRlComposableModelCfg, ZRlDistillationRunnerCfg

from .z_rl_proof_ppo_cfg import ProofHeightmapParkourPPORunnerCfg

_TEACHER_ACTOR = ProofHeightmapParkourPPORunnerCfg().actor
_HEIGHTMAP_LATENT_DIM = int(_TEACHER_ACTOR.encoder_cfgs["heightmap"]["output_dim"])


@configclass
class ProofVisionParkourDistillationRunnerCfg(ZRlDistillationRunnerCfg):
    """Distill the PROOF heightmap teacher into a depth student with a variance net and a gate.

    The reference is ``Vision-Parkour-ZRL-Encoder-TS-AP-Mask-Gate-Student-Distill-Go2-V2``.
    The depth CNN projects to 64. ``mu`` is a GRU over the prop latent and that CNN latent,
    and its width matches the heightmap latent. A detached variance net predicts ``log_var``.
    A detached gate, with the V2 hysteresis, multiplies ``mu``. The head sees
    ``[prop_latent, last_prop, gate * mu]``, the same layout as the PROOF teacher.
    Action distillation is MSE and does not sample a distribution.
    """

    num_steps_per_env = 24
    max_iterations = 10000
    save_interval = 500
    experiment_name = "parkour_proof_vision_distill"
    obs_groups = {
        "student": ["prop", "depth_image"],
        "teacher": ["prop", "heightmap", "depth_corrupt"],
    }
    student = ZRlComposableModelCfg(
        class_name="proof_rl.models.proof_gate_student_model:ProofGateStudentVisionModel",
        hidden_dims=[512, 256, 128],
        activation="elu",
        obs_normalization=False,
        init_weights=0.01,  #
        latent_spec=ProofGateStudentLatentSpecCfg(
            prop_encoder_cfg=dict(_TEACHER_ACTOR.encoder_cfgs["prop"]),
            rnn_hidden_dim=_HEIGHTMAP_LATENT_DIM,
        ),
    )
    # Heightmap PPO uses ``exterio_mask``; vision distill feeds the same flag as ``depth_corrupt``.
    teacher = _TEACHER_ACTOR.replace(mask_obs_group="depth_corrupt")
    algorithm = ProofGateDistillationAlgorithmCfg(
        num_learning_epochs=5,
        learning_rate=1.0e-4,
        gradient_length=24,
        max_grad_norm=1.0,
        loss_type="mse",
        behavior_loss_coef=2.0,
        nll_loss_coef=1.0,
        gate_loss_coef=1.0,
        latent_loss_coef=2.0,
        warmup_latent_loss_coef=2.0,
        latent_warmup_iterations=1000,
        initialize_student_from_teacher=True,
        teacher_mask_obs_group="depth_corrupt",
        frozen_prop_encoder=True,
        student_stochastic_output=False,
        use_muon=True,
    )
