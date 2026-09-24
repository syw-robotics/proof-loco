
from __future__ import annotations

import math
from collections.abc import Sequence
from typing import TYPE_CHECKING

import torch
from isaaclab.managers import ManagerTermBase, RewardTermCfg, SceneEntityCfg

from locolab.utils.terrains.terrain_utils import get_terrain_mask

if TYPE_CHECKING:
    from isaaclab.assets import Articulation, RigidObject
    from isaaclab.envs import ManagerBasedRLEnv
    from isaaclab.managers import ManagerTermBaseCfg
    from isaaclab.sensors import ContactSensor, RayCaster
    from locolab.assets.sensors.volume_points import VolumePoints



def _get_cached_reward_terrain_mask(env: ManagerBasedRLEnv, terrain_names: Sequence[str], cache_name: str) -> torch.Tensor:
    """Return a cached mask for envs on the requested terrain names."""
    terrain = getattr(env.scene, "terrain", None)
    cache_owner = terrain if terrain is not None else env
    cache_key = f"_cached_reward_{cache_name}_terrain_mask"
    if hasattr(cache_owner, cache_key):
        return getattr(cache_owner, cache_key)

    mask = get_terrain_mask(env, list(terrain_names))
    setattr(cache_owner, cache_key, mask)
    return mask


def track_lin_vel_xy_exp_relaxed_when_parkour(
    env: ManagerBasedRLEnv,
    std: float,
    command_name: str,
    parkour_terrains: Sequence[str],
    asset_cfg: SceneEntityCfg = SceneEntityCfg("robot"),
) -> torch.Tensor:
    """Reward xy velocity tracking, allowing forward overspeed only on gap terrains."""
    asset: RigidObject = env.scene[asset_cfg.name]
    command_vel_xy = env.command_manager.get_command(command_name)[:, :2]
    base_lin_vel_xy = asset.data.root_lin_vel_b[:, :2]

    error_y = command_vel_xy[:, 1] - base_lin_vel_xy[:, 1]

    is_parkour_terrain = _get_cached_reward_terrain_mask(env, parkour_terrains, "gap_climb")
    base_lin_vel_x_upper = torch.where(is_parkour_terrain, command_vel_xy[:, 0] + 0.1, base_lin_vel_xy[:, 0])
#    used_std = torch.where(is_parkour_terrain, relaxed_std, std)
    error_x = command_vel_xy[:, 0] - torch.minimum(base_lin_vel_xy[:, 0], base_lin_vel_x_upper)

    lin_vel_error = torch.square(error_x) + torch.square(error_y)
    return torch.exp(-lin_vel_error / std**2)


def flat_orientation_l2_when_parkour(
    env: ManagerBasedRLEnv,
    parkour_terrains: Sequence[str],
    asset_cfg: SceneEntityCfg = SceneEntityCfg("robot"),
) -> torch.Tensor:
    """Penalize non-flat base orientation using L2 squared kernel by penalizing projected gravity xy-components."""
    asset: RigidObject = env.scene[asset_cfg.name]
    is_parkour_terrain = _get_cached_reward_terrain_mask(env, parkour_terrains, "parkour_terrains")
    reward = torch.sum(torch.square(asset.data.projected_gravity_b[:, :2]), dim=1)
    return torch.where(is_parkour_terrain, reward, torch.zeros_like(reward))


@torch.jit.script
def _cheat_penalty(quat_wxyz: torch.Tensor, is_parkour: torch.Tensor, tan_limit: float) -> torch.Tensor:
    """1 on parkour envs whose body +x yaw leaves the forward cone.

    ``tan_limit`` is ``tan(limit_angle)`` for ``limit_angle`` in ``(0, pi/2)``.
    In that range ``|atan2(fy, fx)| > limit`` is ``|fy| > fx * tan(limit)``,
    which also keeps ``atan2(0, 0) == 0`` from counting as a penalty.
    Body +x from a ``(w, x, y, z)`` quaternion is ``(1 - 2(y^2 + z^2), 2(xy + wz))``.
    """
    qw = quat_wxyz[:, 0]
    qx = quat_wxyz[:, 1]
    qy = quat_wxyz[:, 2]
    qz = quat_wxyz[:, 3]
    forward_x = 1.0 - 2.0 * (qy * qy + qz * qz)
    forward_y = 2.0 * (qx * qy + qw * qz)
    cheat = forward_y.abs() > forward_x * tan_limit
    return (cheat & is_parkour).float()


def cheat(
    env: ManagerBasedRLEnv,
    parkour_terrains: Sequence[str],
    asset_cfg: SceneEntityCfg = SceneEntityCfg("robot"),
    limit_angle: float = 0.8,
) -> torch.Tensor:
    """Penalize yawing off the world +x axis on parkour terrain.

    The course is aligned with +x, so a large heading means the policy is
    turning away instead of facing the obstacle. ``limit_angle`` is in radians
    and must lie in ``(0, pi/2)``.
    """
    asset: RigidObject = env.scene[asset_cfg.name]
    is_parkour_terrain = _get_cached_reward_terrain_mask(env, parkour_terrains, "parkour_terrains")
    return _cheat_penalty(asset.data.root_quat_w, is_parkour_terrain, math.tan(limit_angle))


class joint_torques_l2_soft_limit(ManagerTermBase):
    """L2 torque penalty plus a steeper L2 once the actuator limit is reached.

    The cost is ``tau^2 + over_soft_limit_scale * relu(|tau| - tau_soft)^2
    + over_hard_limit_scale * tau^2 * (|tau| >= tau_hard)``, where
    ``tau_soft = soft_joint_torque_limit_factor * torque_limit_nominal`` and
    ``tau_hard = torque_limit_nominal``. Below the soft limit the extra terms
    are zero, so this matches ``joint_torques_l2``. The hard term is nonzero
    at the actuator limit itself, not only past it. Torque is the pre-clip
    computed torque, capped by ``torque_clip``.
    """

    def __init__(self, cfg: ManagerTermBaseCfg, env: ManagerBasedRLEnv):
        super().__init__(cfg, env)
        asset_cfg: SceneEntityCfg = cfg.params["asset_cfg"]
        torque_limit_nominal = float(cfg.params["torque_limit_nominal"])
        soft_joint_torque_limit_factor = float(cfg.params["soft_joint_torque_limit_factor"])
        hard_joint_torque_limit_factor = float(cfg.params["hard_joint_torque_limit_factor"])
        self._asset: Articulation = env.scene[asset_cfg.name]
        self._joint_ids = asset_cfg.joint_ids
        self._over_soft_limit_scale = float(cfg.params["over_soft_limit_scale"])
        self._over_hard_limit_scale = float(cfg.params["over_hard_limit_scale"])
        self._torque_clip = float(cfg.params["torque_clip"])
        self._soft_limit = soft_joint_torque_limit_factor * torque_limit_nominal
        self._hard_limit = hard_joint_torque_limit_factor * torque_limit_nominal

    def __call__(
        self,
        env: ManagerBasedRLEnv,
        torque_limit_nominal: float = 30.0,
        soft_joint_torque_limit_factor: float = 0.8,
        hard_joint_torque_limit_factor: float = 0.95,
        over_soft_limit_scale: float = 50.0,
        over_hard_limit_scale: float = 20.0,
        torque_clip: float = 50.0,
        asset_cfg: SceneEntityCfg = SceneEntityCfg("robot"),
    ) -> torch.Tensor:
        del env, torque_limit_nominal, soft_joint_torque_limit_factor, hard_joint_torque_limit_factor,
        del over_soft_limit_scale, over_hard_limit_scale, torque_clip, asset_cfg
        # computed joint torque
        tau = self._asset.data.computed_torque[:, self._joint_ids].abs().clamp(max=self._torque_clip)
        tau_sq = torch.square(tau)
        # excess past the soft limit; hard penalty turns on at the actuator limit
        soft_excess = (tau - self._soft_limit).clamp(min=0.0)
        at_hard_limit = (tau >= self._hard_limit).to(dtype=tau.dtype)
        reward = (
            tau_sq
            + self._over_soft_limit_scale * torch.square(soft_excess)
            + self._over_hard_limit_scale * tau_sq * at_hard_limit
        )
        return torch.sum(reward, dim=1)


def feet_air_time_variance_when_parkour(
    env: ManagerBasedRLEnv,
    parkour_terrains: Sequence[str],
    sensor_cfg: SceneEntityCfg) -> torch.Tensor:
    """Penalize variance in the amount of time each foot spends in the air/on the ground relative to each other"""
    # extract the used quantities (to enable type-hinting)
    contact_sensor: ContactSensor = env.scene.sensors[sensor_cfg.name]
    if contact_sensor.cfg.track_air_time is False:
        raise RuntimeError("Activate ContactSensor's track_air_time!")
    # compute the reward
    last_air_time = contact_sensor.data.last_air_time[:, sensor_cfg.body_ids]
    last_contact_time = contact_sensor.data.last_contact_time[:, sensor_cfg.body_ids]

    is_parkour_terrain = _get_cached_reward_terrain_mask(env, parkour_terrains, "parkour_terrains")

    reward =  torch.var(torch.clip(last_air_time, max=0.5), dim=1) + torch.var(torch.clip(last_contact_time, max=0.5), dim=1)
    
    return torch.where(is_parkour_terrain, torch.zeros_like(reward), reward)
