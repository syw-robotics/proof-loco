import os

import isaaclab.sim as sim_utils
from isaaclab.actuators import ImplicitActuatorCfg
from isaaclab.assets.articulation import ArticulationCfg
from isaaclab.utils import configclass

from locolab.assets.unitree import GO2_JOINT_SYMMETRY_MAPPING, GO2_SPATIAL_SYMMETRY_MAPPING

# Get the absolute path to the robots directory relative to this file
_ASSETS_DIR = os.path.dirname(os.path.abspath(__file__))
UNITREE_MODEL_DIR = os.path.join(_ASSETS_DIR, "robots", "unitree")
#  UNITREE_ROS_DIR = "path/to/unitree_ros"  # Replace with the actual path to your unitree_ros package


@configclass
class UnitreeArticulationCfg(ArticulationCfg):
    """Configuration for Unitree articulations."""

    joint_sdk_names: list[str] = None
    joint_symmetry_mapping: dict[str, tuple[float, str]] | None = None
    spatial_symmetry_mapping: dict[str, str] | None = None

    soft_joint_pos_limit_factor = 0.9


@configclass
class UnitreeUsdFileCfg(sim_utils.UsdFileCfg):
    activate_contact_sensors: bool = True
    rigid_props = sim_utils.RigidBodyPropertiesCfg(
        disable_gravity=False,
        retain_accelerations=False,
        linear_damping=0.0,
        angular_damping=0.0,
        max_linear_velocity=1000.0,
        max_angular_velocity=1000.0,
        max_depenetration_velocity=1.0,
    )
    articulation_props = sim_utils.ArticulationRootPropertiesCfg(
        #  enabled_self_collisions=True, solver_position_iteration_count=4, solver_velocity_iteration_count=0
        #  enabled_self_collisions=True, solver_position_iteration_count=8, solver_velocity_iteration_count=4
        enabled_self_collisions=False, solver_position_iteration_count=4, solver_velocity_iteration_count=2
    )


@configclass
class UnitreeUrdfFileCfg(sim_utils.UrdfFileCfg):
    fix_base: bool = False
    activate_contact_sensors: bool = True
    merge_fixed_joints = True
    replace_cylinders_with_capsules = False
    joint_drive = sim_utils.UrdfConverterCfg.JointDriveCfg(
        gains=sim_utils.UrdfConverterCfg.JointDriveCfg.PDGainsCfg(stiffness=0, damping=0)
    )
    articulation_props = sim_utils.ArticulationRootPropertiesCfg(
        enabled_self_collisions=True,
        solver_position_iteration_count=4,
        solver_velocity_iteration_count=1,
    )
    rigid_props = sim_utils.RigidBodyPropertiesCfg(
        disable_gravity=False,
        retain_accelerations=False,
        linear_damping=0.0,
        angular_damping=0.0,
        max_linear_velocity=1000.0,
        max_angular_velocity=1000.0,
        max_depenetration_velocity=1.0,
    )


""" Configuration for the Unitree robots."""

UNITREE_GO2_D435_CFG = UnitreeArticulationCfg(
    spawn=UnitreeUrdfFileCfg(
        #  asset_path=f"{UNITREE_MODEL_DIR}/Go2/urdf/go2_description/urdf/go2_description_with_camera.urdf",  # 20
        #  asset_path=f"{UNITREE_MODEL_DIR}/Go2/urdf/go2_description/urdf/go2_description_with_camera_30.urdf",  # 30
        asset_path=f"{UNITREE_MODEL_DIR}/Go2/urdf/go2_description/urdf/go2_description_with_camera_30_bottom_collision.urdf",  # 30
        # asset_path=f"{UNITREE_MODEL_DIR}/Go2/urdf/go2_description/urdf/go2_description_with_camera_20_bottom_collision.urdf",  # 20
        #  asset_path=f"{UNITREE_MODEL_DIR}/Go2/urdf/go2_description/urdf/go2_description_with_camera_15_bottom_collision.urdf",  # 30
    ),  # spawn from urdf file leads to flipped visual meshes, while collision meshes are correct
    init_state=ArticulationCfg.InitialStateCfg(
        pos=(0.0, 0.0, 0.4),
        joint_pos={
            ".*R_hip_joint": -0.1,
            ".*L_hip_joint": 0.1,
            "F[L,R]_thigh_joint": 0.8,
            "R[L,R]_thigh_joint": 1.0,
            ".*_calf_joint": -1.5,
        },
        joint_vel={".*": 0.0},
    ),
    soft_joint_pos_limit_factor=0.9,
    actuators={
        "GO2Implicit": ImplicitActuatorCfg(
            joint_names_expr=[".*_hip_joint", ".*_thigh_joint", ".*_calf_joint"],
            effort_limit_sim=30.0,
            velocity_limit_sim=30.0,
            stiffness=25.0,
            damping=0.5,
            #  friction=0.01,
        ),
    },
    joint_symmetry_mapping=GO2_JOINT_SYMMETRY_MAPPING,
    spatial_symmetry_mapping=GO2_SPATIAL_SYMMETRY_MAPPING,
    # fmt: off
    joint_sdk_names=[
        "FR_hip_joint", "FR_thigh_joint", "FR_calf_joint",
        "FL_hip_joint", "FL_thigh_joint", "FL_calf_joint",
        "RR_hip_joint", "RR_thigh_joint", "RR_calf_joint",
        "RL_hip_joint", "RL_thigh_joint", "RL_calf_joint"
    ],
    # fmt: on
)

