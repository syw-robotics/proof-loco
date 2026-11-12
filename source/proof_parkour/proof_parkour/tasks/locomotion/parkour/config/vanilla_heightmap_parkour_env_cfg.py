"""Vanilla heightmap parkour environment.

The actor reads ``prop`` and ``heightmap`` directly. The PROOF heightmap task
subclasses the scene and environment defined here.
"""

from isaaclab.envs import ManagerBasedRLEnvCfg
from isaaclab.utils import configclass

import isaaclab.sim as sim_utils
from isaaclab.assets import ArticulationCfg, AssetBaseCfg
from isaaclab.scene import InteractiveSceneCfg
from isaaclab.sensors import ContactSensorCfg, RayCasterCfg, patterns


from locolab.assets.sensors.volume_points import (
    Grid3dPointsGeneratorCfg,
    VolumePointsCfg,
)
from locolab.utils.physics import set_locomotion_physics, set_self_collisions
from locolab.utils.scene import blue_sky_light_cfg, rough_terrain_visual_material_cfg
from locolab.utils.terrains import (
    GreedyconcatEdgeCylinderCfg,
    TerrainImporterCfg,
)
from proof_parkour.assets import UNITREE_GO2_D435_CFG  # isort: skip
from proof_parkour.utils.terrains.terrains_cfg import PARKOUR_TERRAINS_CFG, ROUGH_TERRAINS_CFG  # isort: skip
from locolab.utils.debug_viz.markers import BLUE_RAY_CASTER_MARKER_CFG, PURPLE_RAY_CASTER_MARKER_CFG  # isort: skip


from .go2_parkour.mdp_cfg import (
    ActionsCfg,
    EventCfg,
    HeightmapObsCfg,
    ParkourCommandsCfg,
    ParkourCurriculumsCfg,
    ParkourRewardsCfg,
    ParkourTerminationsCfg,
    PrivObsCfg,
    PropObsCfg,
    ROUGH_CONTACT_SENSOR_LINK_NAMES,
)


PRETRAIN_TERRAIN = False
#  PRETRAIN_TERRAIN = True


##
# MDP definition
##
@configclass
class VanillaHeightmapObservationsCfg:
    prop: PropObsCfg = PropObsCfg()
    priv: PrivObsCfg = PrivObsCfg()
    heightmap: HeightmapObsCfg = HeightmapObsCfg()


##
# Scene definition
##
@configclass
class Go2ParkourSceneCfg(InteractiveSceneCfg):
    """Configuration for Go2 on parkour terrain scene"""

    # =====  terrain  =====
    terrain: TerrainImporterCfg = TerrainImporterCfg(
        prim_path="/World/ground",
        terrain_type="generator",
        terrain_generator=ROUGH_TERRAINS_CFG if PRETRAIN_TERRAIN else PARKOUR_TERRAINS_CFG,
        physics_material=sim_utils.RigidBodyMaterialCfg(
            friction_combine_mode="multiply",
            restitution_combine_mode="multiply",
            static_friction=1.0,
            dynamic_friction=1.0,
        ),
        visual_material=rough_terrain_visual_material_cfg(),
        debug_vis=False,
        virtual_obstacles={
            "edges": GreedyconcatEdgeCylinderCfg(
                #  cylinder_radius=0.04,
                cylinder_radius=0.05,
                min_points=2,
                terrain_names=["gap", "climb", "stairs_inv_high_straight"],  # add virtual obstacles for matching terrain names
                default_mesh_xyz_range=((-3.9, 3.9), (-3.9, 3.9), (-1.0, 1.0)),
                terrain_mesh_xyz_ranges={
                    "gap": ((-3.9, 3.9), (-2.0, 2.0), (-0.5, 0.5)),
                    "climb": ((-3.9, 3.9), (-3.9, 3.9), (0.1, 1.0)),
                    "stairs_inv_high_straight": ((-3.9, 3.9), (-1.5, 1.5), (-0.1, 2.5)),
                },
                max_edge_direction_z_ratio=0.2,
            ),
        },
    )

    # =====  robots  =====
    robot: ArticulationCfg = UNITREE_GO2_D435_CFG.replace(prim_path="{ENV_REGEX_NS}/Robot")

    # =====  sensors  =====
    height_scanner: RayCasterCfg = RayCasterCfg(
        prim_path="{ENV_REGEX_NS}/Robot/base",
        offset=RayCasterCfg.OffsetCfg(pos=(0.6, 0.0, 5.0)),
        ray_alignment="yaw",
        #  pattern_cfg=patterns.GridPatternCfg(resolution=0.1, size=[1.8, 1.0]), # 19 * 11
        pattern_cfg=patterns.GridPatternCfg(resolution=0.1, size=[1.7, 0.8]),
        #  pattern_cfg=patterns.GridPatternCfg(resolution=0.1, size=[1.6, 1.0]),
        debug_vis=False,
        mesh_prim_paths=["/World/ground"],
        global_world_only=True,
        visualizer_cfg=BLUE_RAY_CASTER_MARKER_CFG,
    )
    FL_foot_height_scanner = RayCasterCfg(
        prim_path="{ENV_REGEX_NS}/Robot/FL_foot",
        offset=RayCasterCfg.OffsetCfg(pos=(0.0, 0.0, 20.0)),
        ray_alignment="yaw",
        pattern_cfg=patterns.GridPatternCfg(resolution=0.03, size=[0.03, 0.03]),
        debug_vis=False,
        mesh_prim_paths=["/World/ground"],
        global_world_only=True,
        visualizer_cfg=PURPLE_RAY_CASTER_MARKER_CFG,
    )
    FR_foot_height_scanner = RayCasterCfg(
        prim_path="{ENV_REGEX_NS}/Robot/FR_foot",
        offset=RayCasterCfg.OffsetCfg(pos=(0.0, 0.0, 20.0)),
        ray_alignment="yaw",
        pattern_cfg=patterns.GridPatternCfg(resolution=0.03, size=[0.03, 0.03]),
        debug_vis=False,
        mesh_prim_paths=["/World/ground"],
        global_world_only=True,
        visualizer_cfg=PURPLE_RAY_CASTER_MARKER_CFG,
    )
    RL_foot_height_scanner = RayCasterCfg(
        prim_path="{ENV_REGEX_NS}/Robot/RL_foot",
        offset=RayCasterCfg.OffsetCfg(pos=(0.0, 0.0, 20.0)),
        ray_alignment="yaw",
        pattern_cfg=patterns.GridPatternCfg(resolution=0.03, size=[0.03, 0.03]),
        debug_vis=False,
        mesh_prim_paths=["/World/ground"],
        global_world_only=True,
        visualizer_cfg=PURPLE_RAY_CASTER_MARKER_CFG,
    )
    RR_foot_height_scanner = RayCasterCfg(
        prim_path="{ENV_REGEX_NS}/Robot/RR_foot",
        offset=RayCasterCfg.OffsetCfg(pos=(0.0, 0.0, 20.0)),
        ray_alignment="yaw",
        pattern_cfg=patterns.GridPatternCfg(resolution=0.03, size=[0.03, 0.03]),
        debug_vis=False,
        mesh_prim_paths=["/World/ground"],
        global_world_only=True,
        visualizer_cfg=PURPLE_RAY_CASTER_MARKER_CFG,
    )
    contact_forces: ContactSensorCfg = ContactSensorCfg(
        prim_path=f"{{ENV_REGEX_NS}}/Robot/{ROUGH_CONTACT_SENSOR_LINK_NAMES}", history_length=3, track_air_time=True
    )

    feet_volume_points: VolumePointsCfg = VolumePointsCfg(
        prim_path="{ENV_REGEX_NS}/Robot/.*_foot",
        points_generator=Grid3dPointsGeneratorCfg(
            x_min=0.0,
            x_max=0.0,
            x_num=1,
            y_min=-0.01,
            y_max=0.01,
            y_num=2,
            z_min=-0.01,
            z_max=0.01,
            z_num=2,
        ),
        debug_vis=False,
    )

    # =====  lights  =====
    sky_light: AssetBaseCfg = blue_sky_light_cfg()


@configclass
class VanillaHeightmapParkourGo2EnvCfg(ManagerBasedRLEnvCfg):
    """Go2 parkour whose actor consumes the height scan directly."""

    scene: Go2ParkourSceneCfg = Go2ParkourSceneCfg(num_envs=4096, env_spacing=2.5)
    observations: VanillaHeightmapObservationsCfg = VanillaHeightmapObservationsCfg()
    actions: ActionsCfg = ActionsCfg()
    commands: ParkourCommandsCfg = ParkourCommandsCfg()
    rewards: ParkourRewardsCfg = ParkourRewardsCfg()
    terminations: ParkourTerminationsCfg = ParkourTerminationsCfg()
    events: EventCfg = EventCfg()
    curriculum: ParkourCurriculumsCfg = ParkourCurriculumsCfg()


    def __post_init__(self):
        # general settings
        self.decimation = 4
        self.episode_length_s = 20.0
        # simulation settings
        self.sim.dt = 0.005
        self.sim.render_interval = self.decimation
        self.sim.physics_material = self.scene.terrain.physics_material
        set_locomotion_physics(self.sim, rigid_patch_count=10 * 2**15)
        # update sensor update periods
        # we tick all the sensors based on the smallest update period (physics update period)
        self.scene.contact_forces.update_period = self.sim.dt
        if self.scene.height_scanner is not None:
            self.scene.height_scanner.update_period = self.decimation * self.sim.dt
        if self.scene.FR_foot_height_scanner is not None:
            self.scene.FR_foot_height_scanner.update_period = self.decimation * self.sim.dt
        if self.scene.FL_foot_height_scanner is not None:
            self.scene.FL_foot_height_scanner.update_period = self.decimation * self.sim.dt
        if self.scene.RR_foot_height_scanner is not None:
            self.scene.RR_foot_height_scanner.update_period = self.decimation * self.sim.dt
        if self.scene.RR_foot_height_scanner is not None:
            self.scene.RL_foot_height_scanner.update_period = self.decimation * self.sim.dt
        # disable self collisions for rough terrain
        set_self_collisions(self.scene.robot.spawn, True)
        # start from the easiest terrain level for training
        self.scene.terrain.max_init_terrain_level = 0

        self.curriculum.terrain_levels.params["log_by_terrain_type"] = True
        # stuck / cheat / volume_points_penetration apply only on parkour terrain.
        # scripts/z_rl/train.py --pretrain_terrain overrides this after init.
        self.use_pretrain_terrain(PRETRAIN_TERRAIN)

        #  self.scene.height_scanner.debug_vis = True
        #  self.scene.FL_foot_height_scanner.debug_vis = True
        #  self.scene.FR_foot_height_scanner.debug_vis = True
        #  self.scene.RL_foot_height_scanner.debug_vis = True
        #  self.scene.RR_foot_height_scanner.debug_vis = True
        #  self.scene.feet_volume_points.debug_vis = True


    def use_pretrain_terrain(self, enabled: bool) -> None:
        """Use rough pretrain terrain, or parkour terrain when disabled."""
        self.scene.terrain.terrain_generator = ROUGH_TERRAINS_CFG if enabled else PARKOUR_TERRAINS_CFG
        if not enabled:
            return
        self.rewards.stuck = None
        self.rewards.cheat = None
        self.rewards.volume_points_penetration = None
        self.scene.feet_volume_points = None
        self.events.register_virtual_obstacles = None


    def apply_play_overrides(self) -> None:
        """Shrink the scene and turn on the perception debug view."""
        self.scene.num_envs = 10
        self.scene.env_spacing = 2.5
        # spawn the robot randomly in the grid (instead of their terrain levels)
        self.scene.terrain.max_init_terrain_level = None

        self.scene.height_scanner.debug_vis = True
        self.scene.FL_foot_height_scanner.debug_vis = False
        self.scene.FR_foot_height_scanner.debug_vis = False
        self.scene.RL_foot_height_scanner.debug_vis = False
        self.scene.RR_foot_height_scanner.debug_vis = False
        if self.scene.feet_volume_points is not None:
            self.scene.feet_volume_points.debug_vis = True
        self.scene.terrain.virtual_obstacles["edges"].debug_vis = True

        self.curriculum.terrain_levels.params["log_by_terrain_type"] = False


@configclass
class VanillaHeightmapParkourGo2EnvCfg_PLAY(VanillaHeightmapParkourGo2EnvCfg):
    def __post_init__(self) -> None:
        super().__post_init__()
        self.apply_play_overrides()
