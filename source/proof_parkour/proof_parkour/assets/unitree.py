import os

from isaaclab.actuators import ImplicitActuatorCfg
from isaaclab.assets.articulation import ArticulationCfg

from locolab.assets.robots.common import LocoLabArticulationCfg, assetx_export_usd_cfg
from locolab.assets.robots.unitree.Go2.go2 import GO2_JOINT_SYMMETRY_MAPPING, GO2_SPATIAL_SYMMETRY_MAPPING

# Get the absolute path to the robots directory relative to this file
_ASSETS_DIR = os.path.dirname(os.path.abspath(__file__))
UNITREE_MODEL_DIR = os.path.join(_ASSETS_DIR, "robots", "unitree")
#  UNITREE_ROS_DIR = "path/to/unitree_ros"  # Replace with the actual path to your unitree_ros package


UNITREE_GO2_D435_CFG = LocoLabArticulationCfg(
    spawn=assetx_export_usd_cfg(
        #  asset_path=f"{UNITREE_MODEL_DIR}/Go2/urdf/go2_description/urdf/go2_description_with_camera.urdf",  # 20
        #  asset_path=f"{UNITREE_MODEL_DIR}/Go2/urdf/go2_description/urdf/go2_description_with_camera_30.urdf",  # 30
        asset_path=f"{UNITREE_MODEL_DIR}/Go2/urdf/go2_description/urdf/go2_description_with_camera_30_bottom_collision.urdf",  # 30
        # asset_path=f"{UNITREE_MODEL_DIR}/Go2/urdf/go2_description/urdf/go2_description_with_camera_20_bottom_collision.urdf",  # 20
        #  asset_path=f"{UNITREE_MODEL_DIR}/Go2/urdf/go2_description/urdf/go2_description_with_camera_15_bottom_collision.urdf",  # 30
        foot_expression="/.*_foot/collisions.*",
        merge_fixed_joints=True,
        keep_fixed_pattern=r".*_foot_joint$",
        honor_dont_collapse=False,
    ),
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
            joint_effort_limit=30.0,
            joint_velocity_limit=30.0,
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

