BASE_LINK_NAME = "base"
FOOT_LINK_NAMES = ".*_foot"
HIP_JOINT_NAMES = [".*_hip_joint"]
UNDESIRED_CONTACT_LINK_NAMES = [".*_calf"]
OTHER_BODY_LINK_NAMES = [".*_hip", ".*_thigh", ".*_calf"]
ROUGH_CONTACT_SENSOR_LINK_NAMES = "(base|.*_(foot|calf))"

# fmt: off
JOINT_NAMES = [
    "FR_hip_joint", "FR_thigh_joint", "FR_calf_joint",
    "FL_hip_joint", "FL_thigh_joint", "FL_calf_joint",
    "RR_hip_joint", "RR_thigh_joint", "RR_calf_joint",
    "RL_hip_joint", "RL_thigh_joint", "RL_calf_joint",
]
# fmt: on

from .actions_cfg import ActionsCfg
from .commands_cfg import ParkourCommandsCfg
from .curriculumns_cfg import ParkourCurriculumsCfg
from .events_cfg import EventCfg, ExterioMaskEventCfg, VanillaVisionEventCfg, VisionEventCfg
from .observations_cfg import (
    PrivObsCfg,
    PropObsCfg,
    VisionObsCfg,
    HeightmapObsCfg,
    ExterioMaskObsCfg,
    DepthCorruptionMaskObsCfg,
)
from .rewards_cfg import ParkourRewardsCfg
from .terminations_cfg import ParkourTerminationsCfg

__all__ = [
    "ActionsCfg",
    "ParkourCommandsCfg",
    "EventCfg",
    "ExterioMaskEventCfg",
    "VanillaVisionEventCfg",
    "VisionEventCfg",
    "ParkourCurriculumsCfg",
    "ParkourRewardsCfg",
    "ParkourTerminationsCfg",
    "PrivObsCfg",
    "PropObsCfg",
    "VisionObsCfg",
    "HeightmapObsCfg",
    "ExterioMaskObsCfg",
    "DepthCorruptionMaskObsCfg",
]
