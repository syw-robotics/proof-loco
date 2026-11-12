from isaaclab.utils import configclass

from proof_rl.rl_cfg import ProofRSSMStudentLatentSpecCfg

from .z_rl_proof_distillation_cfg import ProofVisionParkourDistillationRunnerCfg

_GRU_STUDENT = ProofVisionParkourDistillationRunnerCfg().student


@configclass
class ProofRSSMVisionParkourDistillationRunnerCfg(ProofVisionParkourDistillationRunnerCfg):
    """PROOF distillation with posterior-mean RSSM memory and a bounded terrain readout.

    Retains the GRU student's CNN, prop encoder, head and training losses. No KL
    or prediction loss is added, so the RSSM prior remains untrained.
    """

    experiment_name = "parkour_proof_rssm_vision_distill"
    student = _GRU_STUDENT.replace(
        class_name="proof_rl.models.proof_rssm_student_model:ProofRSSMStudentVisionModel",
        latent_spec=ProofRSSMStudentLatentSpecCfg(
            prop_encoder_cfg=dict(_GRU_STUDENT.latent_spec.prop_encoder_cfg),
            rnn_hidden_dim=_GRU_STUDENT.latent_spec.rnn_hidden_dim,
        ),
    )
