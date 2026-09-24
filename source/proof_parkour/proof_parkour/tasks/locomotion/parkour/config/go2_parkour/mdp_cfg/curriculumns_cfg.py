from isaaclab.managers import CurriculumTermCfg as CurrTerm
from isaaclab.utils import configclass
import locolab.tasks.manager_based.locomotion.velocity.mdp as mdp


@configclass
class ParkourCurriculumsCfg:
    """Curriculum terms for rough terrain."""

    terrain_levels = CurrTerm(func=mdp.terrain_levels, params={"log_by_terrain_type": False})
