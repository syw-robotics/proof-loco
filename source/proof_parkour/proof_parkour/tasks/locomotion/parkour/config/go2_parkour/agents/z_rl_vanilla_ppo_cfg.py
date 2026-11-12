from isaaclab.utils import configclass

from z_rl.adaptor.isaaclab import ZRlGroupMLPEncoderModelCfg, ZRlMLPModelCfg, ZRlOnPolicyRunnerCfg, ZRlPpoAlgorithmCfg, ZRlSymmetryCfg


@configclass
class VanillaHeightmapParkourPPORunnerCfg(ZRlOnPolicyRunnerCfg):
    num_steps_per_env = 24
    max_iterations = 10000
    save_interval = 500
    experiment_name = "parkour_vanilla_heightmap"
    obs_groups = {
        "actor": ["prop", "heightmap"],
        "critic": ["priv", "heightmap"],
    }
    actor = ZRlGroupMLPEncoderModelCfg(
        class_name="proof_rl.models.vanilla_teacher_model:VanillaTeacherEncoderModel",
        hidden_dims=[512, 256, 128],
        activation="elu",
        obs_normalization=True,
        init_weights=0.01,  # Use orthogonal init
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
        init_weights=0.01,  # Use orthogonal init
    )
    algorithm = ZRlPpoAlgorithmCfg(
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
    )
