from __future__ import annotations

from dataclasses import MISSING

from isaaclab.utils import configclass

from z_rl.adaptor.isaaclab.distillation_cfg import ZRlDistillationAlgorithmCfg
from z_rl.adaptor.isaaclab.rl_cfg import ZRlCNNModelCfg, ZRlGroupMLPEncoderModelCfg


@configclass
class ProofMaskedTeacherModelCfg(ZRlGroupMLPEncoderModelCfg):
    """GroupMLP widths for the PROOF heightmap teacher.

    ``mask_obs_group`` multiplies the ``heightmap_obs_group`` latent and is not encoded.
    """

    class_name: str = "proof_rl.models.proof_masked_teacher_model:ProofMaskedTeacherEncoderModel"
    prop_obs_group: str = "prop"
    heightmap_obs_group: str = "heightmap"
    mask_obs_group: str = "exterio_mask"


@configclass
class ProofGateStudentLatentSpecCfg:
    """Latent spec for the PROOF depth student.

    The CNN projects to 64. The GRU reads that latent with the prop latent and writes ``mu``
    at the teacher heightmap width. The variance net and gate stay detached from ``mu``.
    ``prop_encoder_cfg`` and ``rnn_hidden_dim`` come from the heightmap teacher.
    """

    class_name: str = "proof_rl.models.proof_gate_student_model:ProofGateStudentLatentSpec"
    """Spec constructed when the runner config is turned into a dict."""

    image_obs_group: str = "depth_image"
    """Depth image encoded by the CNN."""

    prop_obs_group: str = "prop"
    """Proprioception encoded by the teacher prop MLP."""

    prop_encoder_cfg: dict = MISSING
    """Prop encoder copied from the PROOF heightmap teacher."""

    append_last_obs: bool = True
    """Append the last proprioceptive frame after the encoded groups."""

    append_obs_group: str = "prop"
    """Observation group appended when ``append_last_obs`` is enabled."""

    rnn_hidden_dim: int = MISSING
    """``mu`` width. This matches the teacher heightmap latent."""

    rnn_num_layers: int = 1
    """GRU depth. ``mu`` stays ``rnn_hidden_dim`` wide."""

    gate_hidden_dims: list[int] = [64, 64]
    """Hidden widths of the gate MLP. The gate output width is 1."""

    gate_activation: str = "elu"
    """Activation inside the gate MLP."""

    gate_threshold_range: tuple[float, float] = (0.5, 0.8)
    """``(close, open)``. An open gate closes at the low value and a closed gate opens at the high value."""

    gate_alpha_range: tuple[float, float] = (0.8, 0.8)
    """``(open, close)`` smoothing weights while the raw gate is rising and falling."""

    log_var_hidden_dims: list[int] = [64, 64]
    """Hidden widths of the variance net."""

    log_var_activation: str = "elu"
    """Activation inside the variance net."""

    log_var_clip_range: tuple[float, float] = (-8.0, 5.0)
    """Inclusive clamp on ``log_var``, as ``(min, max)``."""

    cnn_cfg: ZRlCNNModelCfg.CNNCfg = ZRlCNNModelCfg.CNNCfg(
        output_channels=[4, 1],
        kernel_size=[3, 3],
        stride=[1, 1],
        padding="zeros",
        activation="relu",
        global_pool="none",
        norm="layer",
    )
    """Depth CNN in front of the projection MLP."""

    cnn_projection_cfg: ZRlCNNModelCfg.CNNProjectionCfg = ZRlCNNModelCfg.CNNProjectionCfg(
        hidden_dims=[128],
        output_dim=64,
        activation="relu",
    )
    """Projection from flattened CNN features to the 64-dimensional CNN latent."""


@configclass
class ProofGateDistillationAlgorithmCfg(ZRlDistillationAlgorithmCfg):
    """MSE action fit plus the variance-net and gate losses."""

    class_name: str = "proof_rl.algorithms.proof_gate_distillation:ProofGateDistillation"
    """The algorithm class name."""

    behavior_loss_coef: float = 1.0
    """Weight on MSE between the student action and the teacher action."""

    nll_loss_coef: float = 1.0
    """Weight on Gaussian NLL. ``mu`` is detached, so this trains the variance net."""

    gate_loss_coef: float = 1.0
    """Weight on BCE between the raw gate and ``depth_corrupt``."""

    latent_loss_coef: float = 1.0
    """Weight on MSE between ``mu`` and the teacher's masked heightmap latent."""

    warmup_latent_loss_coef: float = 1.0
    """Latent MSE weight while warmup rollouts follow the teacher action."""

    latent_warmup_iterations: int = 0
    """Iterations that keep the prop encoder and the head fixed, and skip the action loss."""

    initialize_student_from_teacher: bool = True
    """Copy the teacher prop encoder, its normalizer, and the head from an RL checkpoint."""

    teacher_mask_obs_group: str = "depth_corrupt"
    """Observation used as the gate target."""

    teacher_exterio_obs_group: str = "heightmap"
    """Teacher observation encoded into the latent that ``mu`` fits."""

    frozen_prop_encoder: bool = False
    """Keep the prop encoder fixed after initialization."""

    student_stochastic_output: bool = False
    """The student has no action distribution."""

    use_muon: bool = True
    """Use Distillation's built-in Muon optimizer for hidden 2-D student weights."""

    muon_adamw_weight_decay: float = 0.01
    """AdamW weight decay for the non-Muon student parameters when ``use_muon`` is enabled."""
