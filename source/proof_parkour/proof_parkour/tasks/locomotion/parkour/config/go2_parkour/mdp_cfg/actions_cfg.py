from isaaclab.utils import configclass
import locolab.tasks.manager_based.locomotion.velocity.mdp as mdp
from locolab.tasks.manager_based.locomotion.velocity.mdp import symmetry


from . import JOINT_NAMES


@configclass
class ActionsCfg:
    """Action specifications for the MDP."""

    joint_pos = mdp.DelayedActionCfg(
        action = mdp.JointPositionActionCfg(
            asset_name="robot",
            joint_names=JOINT_NAMES,
            scale={".*_hip_joint": 0.125, "^(?!.*_hip_joint).*": 0.25},
            use_default_offset=True,
            clip={".*": (-10.0, 10.0)},
            preserve_order=True,
            symmetry_transform=symmetry.joint_action,
        ),
        delay_range=(0, 1)
    )
