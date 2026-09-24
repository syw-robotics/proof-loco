from isaaclab.utils import configclass

from proof_rl.rl_cfg import ProofMaskedTeacherModelCfg
from z_rl.adaptor.isaaclab import (
    ZRlEncoderEstimationPpoAlgorithmCfg,
    ZRlMLPModelCfg,
    ZRlOnPolicyRunnerCfg,
    ZRlSymmetryCfg,
)


@configclass
class ProofHeightmapParkourPPORunnerCfg(ZRlOnPolicyRunnerCfg):
    """PROOF heightmap teacher.

    Same GroupMLP encoder, LayerNorm, observation normalization, and optimizer as the
    naive heightmap policy. ``exterio_mask`` is a scalar flag that multiplies the
    heightmap latent. The leading latent entries match privileged linear velocity.
    """

    num_steps_per_env = 24
    max_iterations = 5000
    save_interval = 500
    experiment_name = "parkour_proof_heightmap"
    obs_groups = {
        "actor": ["prop", "heightmap", "exterio_mask"],
        "critic": ["priv", "heightmap"],
    }
    actor = ProofMaskedTeacherModelCfg(
        hidden_dims=[512, 256, 128],
        activation="elu",
        obs_normalization=True,
        init_weights=0.01,  # Use orthogonal init
        prop_obs_group="prop",
        heightmap_obs_group="heightmap",
        mask_obs_group="exterio_mask",
        encoder_cfgs={
            "prop": {
                "output_dim": 32,
                "hidden_dims": [128, 64],
                "activation": "elu",
                "obs_normalization": True,
                "layer_norm": "pre_activation",
            },
            "heightmap": {
                "output_dim": 32,
                "hidden_dims": [64, 32],
                "activation": "elu",
                "obs_normalization": False,
                "layer_norm": "pre_activation",
            },
        },
        append_obs_group="prop",
        append_last_obs=True,
        distribution_cfg=ZRlMLPModelCfg.GaussianDistributionCfg(init_std=1.0),
    )
    critic = ZRlMLPModelCfg(
        hidden_dims=[512, 256, 128],
        activation="elu",
        obs_normalization=True,
        init_weights=0.01,  # Use orthogonal init, which helps symmetry learning
    )
    algorithm = ZRlEncoderEstimationPpoAlgorithmCfg(
        num_learning_epochs=5,
        num_mini_batches=4,
        clip_param=0.2,
        gamma=0.99,
        lam=0.95,
        value_loss_coef=1.0,
        entropy_coef=0.01,
        learning_rate=1.0e-3,
        max_grad_norm=1.0,
        use_muon=True,
        use_clipped_value_loss=True,
        schedule="adaptive",
        desired_kl=0.01,
        symmetry_augmentation=True,
        symmetry_cfg=ZRlSymmetryCfg(
            use_mirror_loss=False,
            log_mirror_loss=True,
            mirror_loss_log_interval=100,
        ),
        # ---------- linear velocity estimation loss ----------
        estimation_loss_coef=1.0,
        target_obs_group_name="priv",
        target_obs_term_names=["base_lin_vel"],
    )
