"""PROOF vision student environment.

Inherits the vanilla vision scene and MDP, then adds depth corruption. While that
corruption is active, ``depth_corrupt`` is 0, so the heightmap teacher walks blind.
The student reads ``prop`` and ``depth_image``. The teacher still reads ``prop``,
``heightmap``, and ``depth_corrupt``.
"""

from isaaclab.sensors import RayCasterCfg
from isaaclab.utils import configclass
from locolab.assets.sensors.noisy_camera import NoisyRayCasterCameraCfg

from proof_parkour.assets.sensors import (
    BLIND_HEIGHT_SCAN_RAY_CASTER_MARKER_CFG,
    CORRUPTED_DEPTH_CAMERA_RAY_CASTER_MARKER_CFG,
    BlindHeightmapRayCaster,
    CorruptedDepthRayCasterCamera,
)

from .go2_parkour.mdp_cfg import DepthCorruptionMaskObsCfg, VisionEventCfg
from .vanilla_vision_parkour_env_cfg import (
    VanillaVisionObservationsCfg,
    VanillaVisionParkourGo2EnvCfg,
    VanillaVisionParkourSceneCfg,
    noisy_depth_camera,
)


##
# MDP definition
##
@configclass
class ProofVisionObservationsCfg(VanillaVisionObservationsCfg):
    """Vanilla vision observations plus the exterio mask driven by depth corruption."""

    depth_corrupt: DepthCorruptionMaskObsCfg = DepthCorruptionMaskObsCfg()


##
# Scene definition
##
@configclass
class ProofVisionParkourSceneCfg(VanillaVisionParkourSceneCfg):
    """Vanilla depth scene plus depth corruption; masked/corrupted envs show red markers."""

    height_scanner: RayCasterCfg = VanillaVisionParkourSceneCfg().height_scanner.replace(
        class_type=BlindHeightmapRayCaster,
        visualizer_cfg=BLIND_HEIGHT_SCAN_RAY_CASTER_MARKER_CFG,
    )
    depth_camera: NoisyRayCasterCameraCfg = noisy_depth_camera(depth_corruption=True).replace(
        class_type=CorruptedDepthRayCasterCamera,
        visualizer_cfg=CORRUPTED_DEPTH_CAMERA_RAY_CASTER_MARKER_CFG,
    )


##
# Environment configuration
##
@configclass
class ProofVisionParkourGo2EnvCfg(VanillaVisionParkourGo2EnvCfg):
    """PROOF vision student environment.

    The student reads ``prop`` and the preprocessed ``depth_image``. The teacher still
    reads ``prop``, ``heightmap``, and ``depth_corrupt``. ``depth_corrupt`` is the depth
    valid flag: it drops to 0 while depth corruption is active, so the teacher walks
    blind and the student copies that behavior.
    """

    scene: ProofVisionParkourSceneCfg = ProofVisionParkourSceneCfg(num_envs=4096, env_spacing=2.5)
    observations: ProofVisionObservationsCfg = ProofVisionObservationsCfg()
    events: VisionEventCfg = VisionEventCfg()


@configclass
class ProofVisionParkourGo2EnvCfg_PLAY(ProofVisionParkourGo2EnvCfg):
    def __post_init__(self) -> None:
        super().__post_init__()
        self.apply_play_overrides()
