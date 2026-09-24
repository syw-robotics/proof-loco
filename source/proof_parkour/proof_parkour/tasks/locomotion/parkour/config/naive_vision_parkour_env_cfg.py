"""Naive vision student environment.

The scene is the naive heightmap parkour scene plus a depth camera. The camera
preprocessing matches the PROOF vision task except it has no depth corruption.
The student reads ``prop`` and ``depth_image``. The teacher still reads ``prop``
and ``heightmap``. The PROOF vision task subclasses this environment.
"""

import math

import torch
from isaaclab.sensors import patterns
from isaaclab.utils import configclass
from isaaclab.utils.math import quat_from_euler_xyz
from locolab.assets.sensors.noisy_camera import NoisyRayCasterCameraCfg
from locolab.utils.markers import YELLOW_RAY_CASTER_MARKER_CFG
from locolab.utils.noise import (
    CropAndResizeCfg,
    DepthArtifactNoiseCfg,
    DepthCorruptionNoiseCfg,
    DepthNormalizationCfg,
    GaussianBlurNoiseCfg,
    RandomSideMaskingCfg,
)

from .go2_parkour.mdp_cfg import NaiveVisionEventCfg, VisionObsCfg
from .naive_heightmap_parkour_env_cfg import (
    Go2ParkourSceneCfg,
    NaiveHeightmapObservationsCfg,
    NaiveHeightmapParkourGo2EnvCfg,
)


##
# Shared Forward Go2 Depth Camera definition
##
def noisy_depth_camera(*, depth_corruption: bool = False) -> NoisyRayCasterCameraCfg:
    """Depth camera shared by the naive and PROOF vision students.

    ``depth_corruption`` adds the terrain-gated corruption stage used by PROOF.
    """
    noise_pipeline = {
        "crop_and_resize": CropAndResizeCfg(crop_region=(2, 2, 2, 2)),
        "gaussian_blur": GaussianBlurNoiseCfg(kernel_size=3, sigma=1),
        "depth_artifact_noise": DepthArtifactNoiseCfg(
            artifacts_prob=0.0001,
            noise_value_choices=(0.0, 1.0),
        ),
        "depth_normalization": DepthNormalizationCfg(
            depth_range=(0.1, 2.0),
            normalize=True,
            output_range=(0.0, 1.0),
        ),
        "random_side_masking": RandomSideMaskingCfg(
            sides=("left", "right"),
            width_range=(0, 8),
            start_probability=0.02,
            duration_range=(2, 20),
            mask_value_choices=(0.0, 1.0),
        ),
    }
    if depth_corruption:
        noise_pipeline["depth_corruption"] = DepthCorruptionNoiseCfg(
            enabled=True,
            start_probability=0.01,
            duration_range=(2, 100),  # 0.1s to 5s at 20 Hz
            full_frame_value_choices=(0.0, 1.0),
            full_frame_probability=0.5,
            strong_noise_probability=0.3,
            strong_artifact_probability=0.2,
            strong_noise_std_range=(0.15, 0.45),
            strong_artifacts_prob=0.01,
            strong_artifacts_max_blocks=3,
            strong_artifacts_height_mean_std=[8.0, 2.0],
            strong_artifacts_width_mean_std=[8.0, 2.0],
            strong_artifact_value_choices=(0.0, 1.0),
        )
    return NoisyRayCasterCameraCfg(
        prim_path="{ENV_REGEX_NS}/Robot/base",
        mesh_prim_paths=["/World/ground"],
        offset=NoisyRayCasterCameraCfg.OffsetCfg(
            pos=(0.335, 0.015, 0.088),  # 30 deg D435 mount
            # World convention: +X forward, +Z up. Ray directions already use this frame.
            rot=tuple(
                float(value)
                for value in quat_from_euler_xyz(
                    torch.tensor(0.0),
                    torch.tensor(math.radians(30.0)),
                    torch.tensor(0.0),
                )
            ),
            convention="world",
        ),
        pattern_cfg=patterns.PinholeCameraPatternCfg(
            focal_length=1.0,
            horizontal_aperture=2 * math.tan(math.radians(87) / 2),
            vertical_aperture=2 * math.tan(math.radians(58) / 2),
            width=48,
            height=27,
        ),
        data_types=["distance_to_image_plane"],
        depth_clipping_behavior="max",
        max_distance=2.0,
        update_period=0.05,  # 20 Hz; the observation skips every other frame
        debug_vis=False,
        visualizer_cfg=YELLOW_RAY_CASTER_MARKER_CFG,
        noise_pipeline=noise_pipeline,
        # 2 output frames, skip 2, max delay 1: (2 - 1) * 2 + 1 + 1 = 4
        data_histories={"distance_to_image_plane_noised": 4},
    )


##
# MDP definition
##
@configclass
class NaiveVisionObservationsCfg(NaiveHeightmapObservationsCfg):
    """Heightmap observations plus the preprocessed depth history."""

    depth_image: VisionObsCfg = VisionObsCfg()


##
# Scene definition
##
@configclass
class NaiveVisionParkourSceneCfg(Go2ParkourSceneCfg):
    """Parkour scene with a preprocessed pinhole depth camera on the base."""

    depth_camera: NoisyRayCasterCameraCfg = noisy_depth_camera(depth_corruption=False)


##
# Environment configuration
##
@configclass
class NaiveVisionParkourGo2EnvCfg(NaiveHeightmapParkourGo2EnvCfg):
    """Go2 parkour student env. Depth comes from the preprocessed ray-cast camera."""

    scene: NaiveVisionParkourSceneCfg = NaiveVisionParkourSceneCfg(num_envs=4096, env_spacing=2.5)
    observations: NaiveVisionObservationsCfg = NaiveVisionObservationsCfg()
    events: NaiveVisionEventCfg = NaiveVisionEventCfg()

    def __post_init__(self):
        super().__post_init__()
        # Sample all terrain levels at spawn (unlike heightmap, which starts at 0).
        #  self.scene.terrain.max_init_terrain_level = None
        # Distillation does not train on RL rewards; keep tracking terms for logging only.
        # RewardManager skips None terms, so anything outside this set is not computed.
        for name in list(self.rewards.__dict__):
            if name not in ("track_lin_vel_xy_exp", "track_ang_vel_z_exp"):
                setattr(self.rewards, name, None)
        self.scene.feet_volume_points = None
        self.events.register_virtual_obstacles = None

    def apply_play_overrides(self) -> None:
        super().apply_play_overrides()
        self.scene.height_scanner.debug_vis = False
        self.scene.depth_camera.debug_vis = True


@configclass
class NaiveVisionParkourGo2EnvCfg_PLAY(NaiveVisionParkourGo2EnvCfg):
    def __post_init__(self) -> None:
        super().__post_init__()
        self.apply_play_overrides()
