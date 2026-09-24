import math

from isaaclab.managers import EventTermCfg as EventTerm
from isaaclab.managers import SceneEntityCfg
from isaaclab.utils import configclass
import proof_parkour.tasks.locomotion.parkour.mdp as proof_mdp
import locolab.tasks.manager_based.locomotion.velocity.mdp as mdp


from . import BASE_LINK_NAME, FOOT_LINK_NAMES, OTHER_BODY_LINK_NAMES


@configclass
class EventCfg:
    """Configuration for events."""

    # ===== startup ===== (6 events)
    # 1.
    randomize_feet_material = EventTerm(
        func=mdp.randomize_rigid_body_material,
        mode="startup",
        params={
            "asset_cfg": SceneEntityCfg("robot", body_names=FOOT_LINK_NAMES),
            "static_friction_range": (0.2, 1.5),
            "dynamic_friction_range": (0.2, 1.5),
            "restitution_range": (0.0, 0.5),
            "num_buckets": 64,
            "make_consistent": True,
        },
    )
    # 2.
    randomize_base_mass = EventTerm(
        func=mdp.randomize_rigid_body_mass,
        mode="startup",
        params={
            "asset_cfg": SceneEntityCfg("robot", body_names=BASE_LINK_NAME),
            "mass_distribution_params": (-1.0, 1.5),
            "operation": "add",
            "recompute_inertia": True,
        },
    )
    # 3.
    randomize_other_bodies_mass = EventTerm(
        func=mdp.randomize_rigid_body_mass,
        mode="startup",
        params={
            "asset_cfg": SceneEntityCfg("robot", body_names=OTHER_BODY_LINK_NAMES),
            "mass_distribution_params": (0.8, 1.2),
            "operation": "scale",
            "recompute_inertia": True,
        },
    )
    # 4.
    randomize_base_com = EventTerm(
        func=mdp.randomize_rigid_body_com,
        mode="startup",
        params={
            "asset_cfg": SceneEntityCfg("robot", body_names=BASE_LINK_NAME),
            "com_range": {"x": (-0.05, 0.05), "y": (-0.05, 0.05), "z": (-0.05, 0.05)},
        },
    )
    # 5.
    randomize_actuator_gains = EventTerm(
        func=mdp.randomize_actuator_gains,
        mode="startup",
        params={
            "asset_cfg": SceneEntityCfg("robot", joint_names=".*"),
            "stiffness_distribution_params": (0.9, 1.1),
            "damping_distribution_params": (0.9, 1.1),
            "operation": "scale",
            "distribution": "uniform",
        },
    )
    # 6. # add actuator gain like isaacgym
    randomize_joint_parameters = EventTerm(
        func=mdp.randomize_joint_parameters,
        mode="reset",
        params={
            "asset_cfg": SceneEntityCfg("robot", joint_names=".*"),
            "friction_distribution_params": (0.0, 0.2),
            "armature_distribution_params": (0.0, 0.01),
            "operation": "add",
            "distribution": "uniform",
        },
    )
    #  7.
    register_virtual_obstacles = EventTerm(
        func=mdp.register_virtual_obstacle_to_sensor,
        mode="startup",
        params={
            "sensor_cfgs": SceneEntityCfg("feet_volume_points"),
        },
    )

    # ===== reset ===== (2 events)
    # 1.
    reset_joints = EventTerm(
        func=mdp.reset_joints_by_scale,
        mode="reset",
        params={
            "position_range": (0.7, 1.3),
            "velocity_range": (0.0, 0.0),
        },
    )
    # 2.
    reset_base = EventTerm(
        func=mdp.reset_root_state_uniform,
        mode="reset",
        params={
            "pose_range": {
                "x": (-0.25, 0.25),
                "y": (-0.2, 0.2),
                "z": (0.0, 0.10),
                "roll": (0.0, 0.0),
                "pitch": (0.0, 0.0),
                "yaw": (-0.3, 0.3),
            },
            "velocity_range": {
                "x": (0.0, 0.0),
                "y": (0.0, 0.0),
                "z": (0.0, 0.0),
                "roll": (0.0, 0.0),
                "pitch": (0.0, 0.0),
                "yaw": (0.0, 0.0),
            },
        },
    )
    # ===== interval ===== (1 events)
    # 1.
    push_robot_by_setting_velocity = EventTerm(
        func=mdp.push_by_setting_velocity,
        mode="interval",
        interval_range_s=(10.0, 10.0),
        is_global_time=True,
        params={"velocity_range": {"x": (-0.5, 0.5), "y": (-0.5, 0.5)}},
    )


@configclass
class ExterioMaskEventCfg(EventCfg):
    """Events for actor exterio latent episode-level dropout."""

    resample_exterio_latent_mask = EventTerm(
        func=proof_mdp.resample_exterio_latent_mask,
        mode="reset",
        params={
            "non_parkour_names": [
                "slope",
                "slope_inv",
                "stairs_30",
                "stairs_30_inv",
                "stairs_30_straight",
                "stairs_30_inv_straight",
                "discrete",
            ],
            "probability": 0.4,
            "sensor_cfg": SceneEntityCfg("height_scanner"),
        },
    )


@configclass
class NaiveVisionEventCfg(EventCfg):
    """Parkour events plus depth-camera mounting noise.

    Depth corruption is not in this camera pipeline, so this does not apply the
    terrain mask used by ``VisionEventCfg``.
    """

    randomize_ray_offsets = EventTerm(
        func=mdp.randomize_ray_offsets,
        mode="startup",
        params={
            "asset_cfg": SceneEntityCfg("depth_camera"),
            "offset_pose_ranges": {
                "x": (-0.01, 0.01),
                "y": (-0.01, 0.01),
                "z": (-0.01, 0.01),
                "roll": (-math.radians(2), math.radians(2)),
                "pitch": (-math.radians(8), math.radians(8)),
                "yaw": (-math.radians(2), math.radians(2)),
            },
            "distribution": "uniform",
        },
    )


@configclass
class VisionEventCfg(EventCfg):
    """Configuration for events with vision."""

    # ===== startup =====
    #  randomize_camera_placement = EventTerm(
    #      func=mdp.randomize_camera_placement,
    #      mode="startup",
    #      params={
    #          "sensor_cfg": SceneEntityCfg("depth_camera"),
    #          #  "pos_noise_range": {"x": (-0.005, 0.005), "y": (-0.005, 0.005), "z": (-0.005, 0.005)},
    #          #  "pos_noise_range": {"x": (-0.01, 0.01), "y": (-0.01, 0.01), "z": (-0.01, 0.01)},
    #          "pos_noise_range": {"x": (-0.015, 0.015), "y": (-0.015, 0.015), "z": (-0.01, 0.01)},
    #          "rot_noise_range": {"roll": (-2.0, 2.0), "pitch": (-8.0, 8.0), "yaw": (-2.0, 2.0)},
    #          "debug_vis": False,
    #      },
    #  )
    #  randomize_camera_fov = EventTerm(
    #      func=mdp.randomize_camera_fov,
    #      mode="startup",
    #      params={
    #          "sensor_cfg": SceneEntityCfg("depth_camera"),
    #          "fov_delta_range": (-2.0, 2.0),
    #      },
    #  )
    #  randomize_ray_offsets = EventTerm(
    #      func=mdp.randomize_ray_offsets,
    #      mode="startup",
    #      params={
    #          "asset_cfg": SceneEntityCfg("depth_camera"),
    #          "offset_pose_ranges": {
    #              "x": (-0.01, 0.01),
    #              "y": (-0.01, 0.01),
    #              "z": (-0.01, 0.01),
    #              "roll": (-math.radians(1), math.radians(1)),
    #              "pitch": (-math.radians(8), math.radians(8)),
    #              "yaw": (-math.radians(1), math.radians(1)),
    #          },
    #          "distribution": "uniform",
    #      },
    #  )
    #  randomize_camera_intrinsics = EventTerm(
    #      func=mdp.randomize_camera_intrinsics,
    #      mode="startup",
    #      params={
    #          "sensor_cfg": SceneEntityCfg("depth_camera"),
    #          "focal_scale_range": (0.97, 1.03),
    #          "focal_axis_scale_ranges": {
    #              "x": (0.99, 1.01),
    #              "y": (0.99, 1.01),
    #          },
    #          "principal_point_offset_ranges": {
    #              "x": (-1.0, 1.0),
    #              "y": (-1.0, 1.0),
    #          },
    #      },
    #  )
    randomize_ray_offsets = EventTerm(
        func=mdp.randomize_ray_offsets,
        mode="startup",
        params={
            "asset_cfg": SceneEntityCfg("depth_camera"),
            "offset_pose_ranges": {
                "x": (-0.01, 0.01),
                "y": (-0.01, 0.01),
                "z": (-0.01, 0.01),
                "roll": (-math.radians(2), math.radians(2)),
                "pitch": (-math.radians(8), math.radians(8)),
                "yaw": (-math.radians(2), math.radians(2)),
            },
            "distribution": "uniform",
        },
    )
    enable_depth_dropout_on_non_parkour = EventTerm(
        func=proof_mdp.set_depth_corruption_terrain_mask,
        mode="reset",
        params={
            "sensor_cfg": SceneEntityCfg("depth_camera"),
            "non_parkour_names": [
                "slope",
                "slope_inv",
                "stairs_30",
                "stairs_30_inv",
                "stairs_30_straight",
                "stairs_30_inv_straight",
                "discrete",
            ],
        },
    )
