from __future__ import annotations

from typing import TYPE_CHECKING, Literal

import torch
import isaaclab.utils.math as math_utils
from isaaclab.managers import ManagerTermBase, ManagerTermBaseCfg, SceneEntityCfg

from locolab.utils.terrains.terrain_utils import get_terrain_mask

if TYPE_CHECKING:
    from isaaclab.envs import ManagerBasedEnv


#  def randomize_ray_offsets(
#      env: ManagerBasedEnv,
#      env_ids: torch.Tensor | None,
#      asset_cfg: SceneEntityCfg,
#      offset_pose_ranges: dict[str, tuple[float, float]],
#      distribution: Literal["uniform"] = "uniform",
#  ) -> None:
#      """Randomize ray origins and directions to model sensor mounting error."""
#      if distribution != "uniform":
#          raise NotImplementedError("Only uniform ray-offset randomization is supported.")
#
#      selected_envs = slice(None) if env_ids is None else env_ids
#      num_envs = env.scene.num_envs if env_ids is None else len(env_ids)
#      sensor = env.scene[asset_cfg.name]
#      ray_starts = sensor.ray_starts[selected_envs]
#      ray_directions = sensor.ray_directions[selected_envs]
#
#      range_list = [offset_pose_ranges.get(key, (0.0, 0.0)) for key in ("x", "y", "z", "roll", "pitch", "yaw")]
#      ranges = torch.tensor(range_list, device=ray_starts.device)
#      samples = math_utils.sample_uniform(
#          ranges[:, 0],
#          ranges[:, 1],
#          (num_envs, 6),
#          device=ray_starts.device,
#      )
#      position_samples = samples[:, None, :3].expand(-1, sensor.num_rays, -1)
#      rotation_samples = math_utils.quat_from_euler_xyz(
#          samples[:, 3],
#          samples[:, 4],
#          samples[:, 5],
#      )[:, None].expand(-1, sensor.num_rays, -1)
#
#      sensor.ray_starts[selected_envs] = ray_starts + position_samples
#      sensor.ray_directions[selected_envs] = math_utils.quat_apply(rotation_samples, ray_directions)


def set_depth_corruption_terrain_mask(
    env: ManagerBasedEnv,
    env_ids: torch.Tensor | None,
    sensor_cfg: SceneEntityCfg,
    non_parkour_names: list[str],
) -> None:
    """Enable depth corruption only on the selected terrain types."""
    sensor = env.scene.sensors[sensor_cfg.name]
    enabled_mask = get_terrain_mask(env, non_parkour_names)

    for noise_cfg in sensor.noise_pipeline:
        noise_func = getattr(noise_cfg, "func", None)
        if not hasattr(noise_func, "set_enabled_env_mask"):
            continue
        if env_ids is None:
            noise_func.set_enabled_env_mask(enabled_mask)
        else:
            current_mask = noise_func.enabled_env_mask.clone()
            current_mask[env_ids] = enabled_mask[env_ids]
            noise_func.set_enabled_env_mask(current_mask)


#  def resample_heightmap_blind_mask(
#      env: ManagerBasedEnv,
#      env_ids: torch.Tensor | None,
#      non_parkour_names: list[str],
#      probability: float = 0.2,
#      sensor_cfg: SceneEntityCfg = SceneEntityCfg("height_scanner"),
#  ) -> None:
#      """Sample episode-level actor heightmap dropout."""
#      if not 0.0 <= probability <= 1.0:
#          raise ValueError(f"`probability` must be in [0, 1], got {probability}.")
#      if not hasattr(env, "_heightmap_blind_mask"):
#          env._heightmap_blind_mask = torch.zeros(env.num_envs, dtype=torch.bool, device=env.device)
#
#      ids = _selected_env_ids(env, env_ids)
#      eligible = get_terrain_mask(env, non_parkour_names)[ids]
#      env._heightmap_blind_mask[ids] = eligible & (torch.rand(len(ids), device=env.device) < probability)
#
#      sensor = env.scene.sensors[sensor_cfg.name] if sensor_cfg.name in env.scene.sensors else None
#      if sensor is not None and hasattr(sensor, "set_heightmap_blind_mask"):
#          sensor.set_heightmap_blind_mask(env._heightmap_blind_mask)


class resample_exterio_latent_mask(ManagerTermBase):
    """Sample episode-level actor exteroceptive-latent dropout."""

    def __init__(self, cfg: ManagerTermBaseCfg, env: ManagerBasedEnv):
        super().__init__(cfg, env)
        probability = float(cfg.params.get("probability", 0.0))
        if not 0.0 < probability < 1.0:
            raise ValueError(f"`probability` must be in (0, 1), got {probability}.")

        self.probability = probability
        self.non_parkour_names: list[str] = cfg.params["non_parkour_names"]
        self.sensor_cfg: SceneEntityCfg = cfg.params.get("sensor_cfg", SceneEntityCfg("height_scanner"))
        env._exterio_latent_mask = torch.ones(env.num_envs, device=env.device)

    def __call__(
        self,
        env: ManagerBasedEnv,
        env_ids: torch.Tensor | None,
        non_parkour_names: list[str],
        probability: float = 0.2,
        sensor_cfg: SceneEntityCfg = SceneEntityCfg("height_scanner"),
    ) -> None:
        del non_parkour_names, probability, sensor_cfg
        ids = _selected_env_ids(env, env_ids)
        eligible = get_terrain_mask(env, self.non_parkour_names)[ids]
        blind_mask = eligible & (torch.rand(len(ids), device=env.device) < self.probability)
        env._exterio_latent_mask[ids] = (~blind_mask).float()

        sensor = env.scene.sensors[self.sensor_cfg.name] if self.sensor_cfg.name in env.scene.sensors else None
        if sensor is not None and hasattr(sensor, "set_heightmap_blind_mask"):
            sensor.set_heightmap_blind_mask(env._exterio_latent_mask <= 0.0)


def _selected_env_ids(env: ManagerBasedEnv, env_ids: torch.Tensor | slice | None) -> torch.Tensor:
    if env_ids is None or isinstance(env_ids, slice):
        ids = torch.arange(env.num_envs, device=env.device)
        return ids if env_ids is None else ids[env_ids]
    return torch.as_tensor(env_ids, device=env.device, dtype=torch.long)

