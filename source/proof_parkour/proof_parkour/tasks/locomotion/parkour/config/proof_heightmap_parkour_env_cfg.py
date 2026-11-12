"""PROOF heightmap parkour environment.

Inherits the vanilla heightmap scene and MDP, then adds the exterio-latent mask.
"""

from isaaclab.sensors import RayCasterCfg
from isaaclab.utils import configclass

from proof_parkour.assets.sensors import BLIND_HEIGHT_SCAN_RAY_CASTER_MARKER_CFG, BlindHeightmapRayCaster

from .go2_parkour.mdp_cfg import ExterioMaskEventCfg, ExterioMaskObsCfg
from .vanilla_heightmap_parkour_env_cfg import (
    Go2ParkourSceneCfg,
    VanillaHeightmapObservationsCfg,
    VanillaHeightmapParkourGo2EnvCfg,
)


##
# MDP definition
##
@configclass
class ProofHeightmapObservationsCfg(VanillaHeightmapObservationsCfg):
    """Vanilla observations plus the episode-level exterio latent mask."""

    exterio_mask: ExterioMaskObsCfg = ExterioMaskObsCfg()


##
# Scene definition
##
@configclass
class ProofHeightmapSceneCfg(Go2ParkourSceneCfg):
    """Parkour scene whose height scanner can mark masked episodes in debug view."""

    height_scanner: RayCasterCfg = Go2ParkourSceneCfg().height_scanner.replace(
        class_type=BlindHeightmapRayCaster,
        visualizer_cfg=BLIND_HEIGHT_SCAN_RAY_CASTER_MARKER_CFG,
    )


##
# Environment configuration
##
@configclass
class ProofHeightmapParkourGo2EnvCfg(VanillaHeightmapParkourGo2EnvCfg):
    """PROOF heightmap teacher environment.

    The actor receives ``prop``, ``heightmap``, and ``exterio_mask``. On non-parkour
    terrain the mask can drop the heightmap latent for a whole episode. The height
    scanner colors those episodes red when debug visualization is enabled.
    """

    scene: ProofHeightmapSceneCfg = ProofHeightmapSceneCfg(num_envs=4096, env_spacing=2.5)
    observations: ProofHeightmapObservationsCfg = ProofHeightmapObservationsCfg()
    events: ExterioMaskEventCfg = ExterioMaskEventCfg()


@configclass
class ProofHeightmapParkourGo2EnvCfg_PLAY(ProofHeightmapParkourGo2EnvCfg):
    def __post_init__(self) -> None:
        super().__post_init__()
        self.apply_play_overrides()
