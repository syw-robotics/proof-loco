from isaaclab.managers import SceneEntityCfg
from isaaclab.managers import TerminationTermCfg as DoneTerm
from isaaclab.utils import configclass
import proof_parkour.tasks.locomotion.parkour.mdp as mdp


from . import BASE_LINK_NAME


@configclass
class ParkourTerminationsCfg:
    """Termination terms for the parkour terrain."""

    # terminate when max episode length is reached
    time_out = DoneTerm(func=mdp.time_out, time_out=True)

    # bad_orientation is a better substitute to illegal_contact, in case of not training fall-recovery behavior
    bad_orientation = DoneTerm(func=mdp.bad_orientation, params={"limit_angle": 1.5})  # about 85 degrees

    # Only robots on the highest-difficulty row are terminated for leaving the map.
    # Marked as a timeout so leaving the terrain does not count as a failure.
    #  terrain_out_of_bounds = DoneTerm(
    #      func=mdp.terrain_out_of_bounds_at_max,
    #      params={"asset_cfg": SceneEntityCfg("robot"), "distance_buffer": 3.0},
    #      time_out=True,
    #  )

    # terminate when contact happens on specified links
    illegal_contact = DoneTerm(
        func=mdp.illegal_contact,
        params={
            "sensor_cfg": SceneEntityCfg("contact_forces", body_names=BASE_LINK_NAME),
            "threshold": 5.0,
        },
    )
