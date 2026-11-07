from __future__ import annotations

import torch
from locolab.assets.sensors.noisy_camera import NoisyRayCasterCamera


def depth_corruption_marker_indices(
    invalid_mask: torch.Tensor | None,
    num_envs: int,
    num_rays: int,
    device: torch.device | str,
) -> torch.Tensor | None:
    """Flat prototype indices. Index 1 is the red corrupted prototype.

    Returns None when ``invalid_mask`` is not one flag per environment, so a shorter
    camera update cannot be painted with the wrong environments' flags.
    """
    marker_indices = torch.zeros((num_envs, num_rays), dtype=torch.int32, device=device)
    if invalid_mask is None:
        return marker_indices.reshape(-1)
    corrupt_mask = invalid_mask.reshape(-1)
    if corrupt_mask.shape[0] != num_envs:
        return None
    marker_indices[corrupt_mask.to(device=device, dtype=torch.bool)] = 1
    return marker_indices.reshape(-1)


class CorruptedDepthRayCasterCamera:
    """Construct corruption markers on the active noisy ray-camera backend."""

    def __new__(cls, cfg):
        sensor_class = type(cls.__name__, (_CorruptedDepthMixin, NoisyRayCasterCamera.resolve_class()), {})
        return sensor_class(cfg)


class _CorruptedDepthMixin:
    """Depth camera that colors corrupted environments red in debug visualization."""

    def _corruption_invalid_mask(self) -> torch.Tensor | None:
        for noise_cfg in getattr(self, "noise_pipeline", []):
            invalid_mask = getattr(getattr(noise_cfg, "func", None), "invalid_mask", None)
            if invalid_mask is not None:
                return invalid_mask
        return None

    def get_debug_vis_marker_indices(self) -> torch.Tensor | None:
        """Per-ray prototype indices, shared by Isaac Lab and the LocoLab viewer."""
        ray_hits = self.ray_hits_w.torch
        num_envs, num_rays = ray_hits.shape[:2]
        indices = depth_corruption_marker_indices(self._corruption_invalid_mask(), num_envs, num_rays, ray_hits.device)
        return indices.reshape(num_envs, num_rays) if indices is not None else None

    def _debug_vis_callback(self, event):
        ray_hits = self.ray_hits_w.torch if hasattr(self, "ray_hits_w") else None
        if ray_hits is None:
            return

        invalid_mask = self._corruption_invalid_mask()
        if invalid_mask is None or self.ray_visualizer.num_prototypes < 2:
            return super()._debug_vis_callback(event)

        flat_hits = ray_hits.reshape(ray_hits.shape[0], -1, 3)
        marker_indices = self.get_debug_vis_marker_indices()
        if marker_indices is None:
            return super()._debug_vis_callback(event)

        viz_points = flat_hits.reshape(-1, 3)
        valid = ~torch.any(torch.isinf(viz_points), dim=1)
        self.ray_visualizer.visualize(viz_points[valid], marker_indices=marker_indices.reshape(-1)[valid])
