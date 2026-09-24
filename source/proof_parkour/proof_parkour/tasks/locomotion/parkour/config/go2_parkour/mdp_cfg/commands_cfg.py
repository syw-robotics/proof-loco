import math

from isaaclab.utils import configclass
import locolab.tasks.manager_based.locomotion.velocity.mdp as mdp


@configclass
class ParkourCommandsCfg:
    """Command specifications for the MDP."""

    base_velocity = mdp.UniformVelocityCommandByTerrainCfg(
        asset_name="robot",
        resampling_time_range=(4.0, 6.0),
        rel_heading_envs=1.0,
        rel_only_lin_vel_x_envs=0.3,
        zero_velocity_threshold=0.2,
        heading_command=True,
        heading_control_stiffness=0.8,
        debug_vis=True,
        ranges=mdp.UniformVelocityCommandCfg.Ranges(
            lin_vel_x=(-0.5, 1.1), 
            lin_vel_y=(-0.5, 0.5),
            ang_vel_z=(-1.5, 1.5),
            heading=(-math.pi, math.pi),
        ),
        terrain_groups={
            "only_forward_terrains": {
                "terrain_names": ["gap", "climb", "hurdle", "stairs_inv_high_straight", "stairs_30_straight", "stairs_30_inv_straight"],
                "ranges": {
                    "lin_vel_x": (0.7, 1.1),
                    "lin_vel_y": (-0.0, 0.0),
                    "ang_vel_z": (-0.3, 0.3),
                    "heading": (-0.4, 0.4),  # around 23 degrees
                },
            },
        },
    )
