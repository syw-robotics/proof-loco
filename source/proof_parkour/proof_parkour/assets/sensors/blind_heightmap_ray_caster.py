from __future__ import annotations

import torch
from isaaclab.sensors import RayCaster


class BlindHeightmapRayCaster:
    """Construct the blind-scan mixin on the active ray-caster implementation."""

    def __new__(cls, cfg):
        backend_class = RayCaster.resolve_class()
        sensor_class = type(cls.__name__, (_BlindHeightmapMixin, backend_class), {})
        return sensor_class(cfg)


class _BlindHeightmapMixin:
    """Ray caster that colors episode-blind heightmap environments red in debug visualization."""

    def set_heightmap_blind_mask(self, mask: torch.Tensor) -> None:
        self.heightmap_blind_mask = mask.to(device=self.device, dtype=torch.bool).clone()

    def get_debug_vis_marker_indices(self) -> torch.Tensor | None:
        """Per-ray prototype indices, shared by Isaac Lab and the LocoLab viewer."""
        if not hasattr(self, "heightmap_blind_mask"):
            return None
        ray_hits = self._data.ray_hits_w.torch
        num_envs, num_rays = ray_hits.shape[:2]
        return self.heightmap_blind_mask[:num_envs].to(device=ray_hits.device, dtype=torch.int32)[:, None].expand(
            -1, num_rays
        )

    def _debug_vis_callback(self, event):
        if self._data.ray_hits_w is None:
            return

        if not hasattr(self, "heightmap_blind_mask") or self.ray_visualizer.num_prototypes < 2:
            return super()._debug_vis_callback(event)

        ray_hits = self._data.ray_hits_w.torch
        viz_points = ray_hits.reshape(-1, 3)
        marker_indices = self.get_debug_vis_marker_indices().reshape(-1)

        valid = ~torch.any(torch.isinf(viz_points), dim=1)
        self.ray_visualizer.visualize(viz_points[valid], marker_indices=marker_indices[valid])
