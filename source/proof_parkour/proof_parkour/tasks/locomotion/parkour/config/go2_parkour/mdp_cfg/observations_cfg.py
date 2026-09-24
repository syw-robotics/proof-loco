from isaaclab.managers import ObservationGroupCfg as ObsGroup
from isaaclab.managers import ObservationTermCfg as ObsTerm
from isaaclab.managers import SceneEntityCfg
from isaaclab.utils import configclass
from isaaclab.utils.noise import AdditiveUniformNoiseCfg as Unoise
import proof_parkour.tasks.locomotion.parkour.mdp as parkour_mdp
import locolab.tasks.manager_based.locomotion.velocity.mdp as mdp
from locolab.tasks.manager_based.locomotion.velocity.mdp import symmetry
from locolab.utils.symmetry import SymmetricObservationTermCfg as SymmObsTerm


from . import JOINT_NAMES



@configclass
class PrivObsCfg(ObsGroup):
    """Privileged observations group."""

    # observation terms (order preserved)
    # put base_lin_vel at front for convenience
    base_lin_vel = SymmObsTerm(
        func=mdp.base_lin_vel,
        clip=(-100.0, 100.0),
        symmetry_transform=symmetry.polar_vector,
    )

    base_ang_vel = SymmObsTerm(
        func=mdp.base_ang_vel,
        clip=(-100.0, 100.0),
        symmetry_transform=symmetry.axial_vector,
    )

    projected_gravity = SymmObsTerm(
        func=mdp.projected_gravity,
        symmetry_transform=symmetry.polar_vector,
    )

    velocity_commands = SymmObsTerm(
        func=mdp.generated_commands,
        params={"command_name": "base_velocity"},
        symmetry_transform=symmetry.velocity_command,
    )

    joint_pos = SymmObsTerm(
        func=mdp.joint_pos_rel,
        params={"asset_cfg": SceneEntityCfg("robot", joint_names=JOINT_NAMES, preserve_order=True)},
        clip=(-100.0, 100.0),
        symmetry_transform=symmetry.joint_space,
    )

    joint_vel = SymmObsTerm(
        func=mdp.joint_vel_rel,
        params={"asset_cfg": SceneEntityCfg("robot", joint_names=JOINT_NAMES, preserve_order=True)},
        clip=(-100.0, 100.0),
        symmetry_transform=symmetry.joint_space,
    )

    joint_effort = SymmObsTerm(
        func=mdp.joint_effort,
        params={"asset_cfg": SceneEntityCfg("robot", joint_names=JOINT_NAMES, preserve_order=True)},
        clip=(-100.0, 100.0),
        symmetry_transform=symmetry.joint_space,
    )

    joint_acc = SymmObsTerm(
        func=mdp.joint_acc,
        params={"asset_cfg": SceneEntityCfg("robot", joint_names=JOINT_NAMES, preserve_order=True)},
        clip=(-100.0, 100.0),
        symmetry_transform=symmetry.joint_space,
    )

    actions = SymmObsTerm(
        func=mdp.last_action,
        clip=(-10.0, 10.0),
        symmetry_transform=symmetry.last_joint_action,
    )

    # feet_contact_forces = SymmObsTerm(
    #     func=mdp.feet_contact_forces,
    #     params={"sensor_cfg": SceneEntityCfg("contact_forces", body_names=".*_foot")},
    #     clip=(0.0, 100.0),
    #     symmetry_transform=symmetry.body_scalar,
    # )

    feet_contact_flag = SymmObsTerm(
        func=mdp.feet_contact_flag,
        params={"sensor_cfg": SceneEntityCfg("contact_forces", body_names=".*_foot")},
        clip=(-1.0, 1.0),
        symmetry_transform=symmetry.body_scalar,
    )

    feet_height = SymmObsTerm(
        func=mdp.feet_height,
        params={"feet_names": ["FL_foot", "FR_foot", "RL_foot", "RR_foot"]},
        clip=(-10.0, 10.0),
        symmetry_transform=symmetry.named_body_scalar,
    )
    def __post_init__(self):
        self.enable_corruption = False
        self.concatenate_terms = True

@configclass
class PropObsCfg(ObsGroup):
    # observation terms (order preserved)
    base_ang_vel = SymmObsTerm(
        func=mdp.base_ang_vel,
        history_length=10,
        noise=Unoise(n_min=-0.2, n_max=0.2),
        clip=(-100.0, 100.0),
        symmetry_transform=symmetry.axial_vector,
    )
    projected_gravity = SymmObsTerm(
        func=mdp.projected_gravity,
        history_length=10,
        noise=Unoise(n_min=-0.05, n_max=0.05),
        symmetry_transform=symmetry.polar_vector,
    )
    velocity_commands = SymmObsTerm(
        func=mdp.generated_commands,
        history_length=10,
        params={"command_name": "base_velocity"},
        symmetry_transform=symmetry.velocity_command,
    )
    joint_pos = SymmObsTerm(
        func=mdp.joint_pos_rel,
        history_length=10,
        params={"asset_cfg": SceneEntityCfg("robot", joint_names=JOINT_NAMES, preserve_order=True)},
        noise=Unoise(n_min=-0.01, n_max=0.01),
        clip=(-100.0, 100.0),
        symmetry_transform=symmetry.joint_space,
    )
    joint_vel = SymmObsTerm(
        func=mdp.joint_vel_rel,
        history_length=10,
        params={"asset_cfg": SceneEntityCfg("robot", joint_names=JOINT_NAMES, preserve_order=True)},
        noise=Unoise(n_min=-1.5, n_max=1.5),
        clip=(-100.0, 100.0),
        symmetry_transform=symmetry.joint_space,
    )
    actions = SymmObsTerm(
        func=mdp.last_action,
        history_length=10,
        clip=(-10.0, 10.0),
        symmetry_transform=symmetry.last_joint_action,
    )

    def __post_init__(self):
        self.enable_corruption = True
        self.concatenate_terms = True


@configclass
class VisionObsCfg(ObsGroup):
    depth_image = ObsTerm(  # (N, history, H, W), images[:, -1] shall be the latest frame.
        func=mdp.delayed_visualizable_image,
        params={
            "data_type": "distance_to_image_plane_noised_history",
            "sensor_cfg": SceneEntityCfg("depth_camera"),
            "history_skip_frames": 2,
            "num_output_frames": 2,
            "delayed_frame_ranges": (0, 1),  # 0 - 0.05s delay
        },
    )

@configclass
class HeightmapObsCfg(ObsGroup):
    height_scan = SymmObsTerm(
        func=mdp.height_scan,
        params={"sensor_cfg": SceneEntityCfg("height_scanner"), "offset": 0.25},
        #  noise=Unoise(n_min=-0.05, n_max=0.05),
        clip=(-10.0, 10.0),
        symmetry_transform=symmetry.height_scan_y,
    )
    def __post_init__(self):
        self.enable_corruption = False


@configclass
class ExterioMaskObsCfg(ObsGroup):
    exterio_mask = SymmObsTerm(
        func=parkour_mdp.exterio_latent_mask,
        symmetry_transform=symmetry.identity,
    )
    def __post_init__(self):
        self.enable_corruption = False


@configclass
class DepthCorruptionMaskObsCfg(ObsGroup):
    depth_corrupt = ObsTerm(
        func=parkour_mdp.depth_image_valid_mask,
        params={
            "data_type": "distance_to_image_plane_noised_depth_valid_mask_history",
            "reference_data_type": "distance_to_image_plane_noised_history",
            "sensor_cfg": SceneEntityCfg("depth_camera"),
            "height_sensor_cfg": SceneEntityCfg("height_scanner"),
        },
    )
    def __post_init__(self):
        self.enable_corruption = False
