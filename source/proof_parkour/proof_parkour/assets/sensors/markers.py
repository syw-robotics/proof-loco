import isaaclab.sim as sim_utils
from isaaclab.markers.visualization_markers import VisualizationMarkersCfg


BLIND_HEIGHT_SCAN_RAY_CASTER_MARKER_CFG = VisualizationMarkersCfg(
    prim_path="/Visuals/RayCaster",
    markers={
        "hit": sim_utils.SphereCfg(
            radius=0.02,
            visual_material=sim_utils.PreviewSurfaceCfg(diffuse_color=(0.2, 0.2, 0.9)),
        ),
        "blind_hit": sim_utils.SphereCfg(
            radius=0.025,
            visual_material=sim_utils.PreviewSurfaceCfg(diffuse_color=(0.90, 0.10, 0.10)),
        ),
    },
)
"""Heightmap ray markers. Masked episodes use the red prototype."""


CORRUPTED_DEPTH_CAMERA_RAY_CASTER_MARKER_CFG = VisualizationMarkersCfg(
    prim_path="/Visuals/DepthRayCaster",
    markers={
        "hit": sim_utils.SphereCfg(
            radius=0.02,
            visual_material=sim_utils.PreviewSurfaceCfg(diffuse_color=(0.9, 0.5, 0.2)),
        ),
        "corrupted_hit": sim_utils.SphereCfg(
            radius=0.025,
            visual_material=sim_utils.PreviewSurfaceCfg(diffuse_color=(0.90, 0.10, 0.10)),
        ),
    },
)
"""Depth ray markers. Environments under depth corruption use the red prototype."""
