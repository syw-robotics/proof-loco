from __future__ import annotations

from typing import TYPE_CHECKING

import torch
from isaaclab.envs.mdp.observations import height_scan as isaaclab_height_scan
from isaaclab.managers import ManagerTermBase, ManagerTermBaseCfg, SceneEntityCfg

if TYPE_CHECKING:
    from isaaclab.envs import ManagerBasedRLEnv


class depth_image_valid_mask(ManagerTermBase):
    """Return the valid-depth mask aligned with the delayed image observation."""

    def __init__(self, cfg: ManagerTermBaseCfg, env: ManagerBasedRLEnv):
        super().__init__(cfg, env)
        self.sensor_cfg = cfg.params.get("sensor_cfg", SceneEntityCfg("camera"))
        self.height_sensor_cfg = cfg.params.get("height_sensor_cfg", SceneEntityCfg("height_scanner"))
        self.data_type = cfg.params["data_type"]
        self.reference_data_type = cfg.params["reference_data_type"]
        self.sensor = env.scene.sensors[self.sensor_cfg.name]

    def __call__(
        self,
        env: ManagerBasedRLEnv,
        data_type: str,
        reference_data_type: str,
        sensor_cfg: SceneEntityCfg = SceneEntityCfg("camera"),
        height_sensor_cfg: SceneEntityCfg = SceneEntityCfg("height_scanner"),
    ) -> torch.Tensor:
        del sensor_cfg, height_sensor_cfg
        if data_type not in self.sensor.data.output:
            return torch.ones(env.num_envs, 1, device=env.device)

        indices_by_type = getattr(self.sensor, "_delayed_frame_indices_by_data_type", {})
        if reference_data_type not in indices_by_type:
            raise RuntimeError(f"`{reference_data_type}` must be evaluated before its depth-valid mask.")

        masks = self.sensor.data.output[data_type]
        latest_indices = indices_by_type[reference_data_type][:, -1]
        batch_indices = torch.arange(masks.shape[0], device=masks.device)
        mask = masks[batch_indices, latest_indices].view(-1, 1)
        height_sensor = (
            env.scene.sensors[self.height_sensor_cfg.name]
            if self.height_sensor_cfg.name in env.scene.sensors
            else None
        )
        if height_sensor is not None and hasattr(height_sensor, "set_heightmap_blind_mask"):
            height_sensor.set_heightmap_blind_mask(mask.view(-1) <= 0.0)
        return mask


def exterio_latent_mask(env: ManagerBasedRLEnv) -> torch.Tensor:
    """Return the episode-level mask used to gate the exteroceptive latent."""
    # "_exterio_latent_mask" is triggered by the "resample_exterio_latent_mask" event
    mask = getattr(env, "_exterio_latent_mask", None)
    if mask is None:
        return torch.ones(env.num_envs, 1, device=env.device)
    return mask.to(device=env.device, dtype=torch.float32).view(-1, 1)


#  def front_height_scan(
#      env: ManagerBasedRLEnv,
#      sensor_cfg: SceneEntityCfg = SceneEntityCfg("front_height_scanner"),
#  ) -> torch.Tensor:
#      """Return front ray-hit x/z positions relative to the sensor."""
#      sensor: RayCaster = env.scene.sensors[sensor_cfg.name]
#      ray_points = sensor.data.ray_hits_w - sensor.data.pos_w.unsqueeze(1)
#      return torch.cat((ray_points[..., 0], ray_points[..., 2]), dim=-1)
