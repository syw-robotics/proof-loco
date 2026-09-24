import math

from isaaclab.managers import RewardTermCfg as RewTerm
from isaaclab.managers import SceneEntityCfg
from isaaclab.utils import configclass

import proof_parkour.tasks.locomotion.parkour.mdp as mdp

from . import (
    FOOT_LINK_NAMES,
    HIP_JOINT_NAMES,
    JOINT_NAMES,
    UNDESIRED_CONTACT_LINK_NAMES,
)


PARKOUR_TERRAINS = ("gap", "climb", "hurdle", "stairs_inv_high_straight")


@configclass
class ParkourRewardsCfg:
    """Reward terms for flat terrain."""

    # ===== task-specific rewards =====
    track_lin_vel_xy_exp = RewTerm(
        func=mdp.track_lin_vel_xy_exp_relaxed_when_parkour,
        weight=1.5,
        params={
            "command_name": "base_velocity",
            "std": math.sqrt(0.25),
            "parkour_terrains": PARKOUR_TERRAINS,
        },
    )
    track_ang_vel_z_exp = RewTerm(
        func=mdp.track_ang_vel_z_exp, weight=1.0, params={"command_name": "base_velocity", "std": math.sqrt(0.25)}
    )

    # ===== penalty rewards =====
    # -- base --
    # lin_vel_z_l2 = RewTerm(func=mdp.lin_vel_z_l2, weight=-2.0)
    #  lin_vel_z_l2 = RewTerm(func=mdp.lin_vel_z_l2, weight=-1.5)
    lin_vel_z_l2 = RewTerm(func=mdp.lin_vel_z_l2, weight=-1.0)
    ang_vel_xy_l2 = RewTerm(func=mdp.ang_vel_xy_l2, weight=-0.05)
    # -- joint --
    stand_still = RewTerm(
        func=mdp.stand_still,
        weight=-1.0,
        params={
            "command_name": "base_velocity",
            "asset_cfg": SceneEntityCfg("robot", joint_names=JOINT_NAMES),
        },
    )
    joint_hip_deviation_l2 = RewTerm(  # pie not added
        func=mdp.joint_deviation_l2,
        weight=-0.2,
        params={"asset_cfg": SceneEntityCfg("robot", joint_names=HIP_JOINT_NAMES)},
    )
    joint_deviation_l2 = RewTerm(  # pie not added
        func=mdp.joint_deviation_l2,
        #  weight=-0.005,
        weight=-2.5e-3,
        params={"asset_cfg": SceneEntityCfg("robot", joint_names=JOINT_NAMES)},
    )
    joint_acc_l2 = RewTerm(
        func=mdp.joint_acc_l2, weight=-2.5e-7, params={"asset_cfg": SceneEntityCfg("robot", joint_names=JOINT_NAMES)}
    )
    joint_torques_l2_soft_limit = RewTerm(
        func=mdp.joint_torques_l2_soft_limit,
        weight=-1.0e-4,
        params={
            "asset_cfg": SceneEntityCfg("robot", joint_names=JOINT_NAMES),
            "torque_limit_nominal": 30.0,
            "soft_joint_torque_limit_factor": 0.80,
            "hard_joint_torque_limit_factor": 0.95,
            "over_soft_limit_scale": 50.0,
            "over_hard_limit_scale": 25.0,
            "torque_clip": 50.0,
        },
    )
    joint_power_l1 = RewTerm(
        func=mdp.joint_power_l1, weight=-2.0e-5, params={"asset_cfg": SceneEntityCfg("robot", joint_names=JOINT_NAMES)}
    )
    # joint_power_variance = RewTerm(
    #     func=mdp.joint_power_variance, weight=-2.0e-6, params={"asset_cfg": SceneEntityCfg("robot", joint_names=JOINT_NAMES)}
    # )
    joint_pos_limits = RewTerm(
        func=mdp.joint_pos_limits, weight=-10.0, params={"asset_cfg": SceneEntityCfg("robot", joint_names=JOINT_NAMES)}
    )
    # -- action --
    action_rate_l2 = RewTerm(func=mdp.action_rate_l2, weight=-0.01)
    action_smoothness_l2 = RewTerm(func=mdp.action_smoothness_l2, weight=-0.01)
    # -- collision --
    undesired_contacts = RewTerm(
        func=mdp.undesired_contacts,
        weight=-1.0,
        params={
            "sensor_cfg": SceneEntityCfg("contact_forces", body_names=UNDESIRED_CONTACT_LINK_NAMES),
            "threshold": 1.0,
        },
    )
    # -- feet --
    feet_air_time = RewTerm(
        func=mdp.feet_air_time,
        weight=0.5,
        #  weight=1.0,
        params={
            "command_name": "base_velocity",
            "threshold": 0.5,
            "sensor_cfg": SceneEntityCfg("contact_forces", body_names=FOOT_LINK_NAMES),
        },
    )
    feet_air_time_variance = RewTerm(
        func=mdp.feet_air_time_variance_when_parkour,
        weight=-0.1,
        params={ "parkour_terrains": PARKOUR_TERRAINS, 
                    "sensor_cfg": SceneEntityCfg("contact_forces", body_names=FOOT_LINK_NAMES)},
    )   
    feet_stumble = RewTerm(
        func=mdp.feet_stumble,
        weight=-0.5,
        params={
            "sensor_cfg": SceneEntityCfg("contact_forces", body_names=FOOT_LINK_NAMES),
        },
    )
    feet_slide = RewTerm(
        func=mdp.feet_slide,
        weight=-2.5e-2,
        params={
            "asset_cfg": SceneEntityCfg("robot", body_names=FOOT_LINK_NAMES),
            "sensor_cfg": SceneEntityCfg("contact_forces", body_names=FOOT_LINK_NAMES),
        },
    )
    is_alive = RewTerm(
        func=mdp.is_alive,
        weight=0.1,
    )
    termination_penalty = RewTerm(func=mdp.is_terminated, weight=-100.0)
    # flat_orientation, stuck, cheat, and volume_points_penetration are removed while PRETRAIN_TERRAIN is on.
# flat_orientation_l2 = RewTerm(
#            func=mdp.flat_orientation_l2_when_parkour,
#            weight=-0.5,
#            params={ "parkour_terrains": PARKOUR_TERRAINS, },
#    )
    stuck = RewTerm(
        func=mdp.stuck_penalty,
        weight=-1.0,
        params={ "command_name": "base_velocity", },
    )
    cheat = RewTerm(
        func=mdp.cheat,
        weight=-1.0,
        params={ "parkour_terrains": PARKOUR_TERRAINS, },
    )
    volume_points_penetration = RewTerm(
        func=mdp.volume_points_penetration,
        weight=-2.0,
        params={
            "sensor_cfg": SceneEntityCfg("feet_volume_points"),
        },
    )
