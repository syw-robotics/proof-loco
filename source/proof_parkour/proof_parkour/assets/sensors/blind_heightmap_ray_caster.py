from __future__ import annotations

import torch
from isaaclab.sensors import RayCaster


class BlindHeightmapRayCaster(RayCaster):
    """Ray caster that colors episode-blind heightmap environments red in debug visualization."""

    def set_heightmap_blind_mask(self, mask: torch.Tensor) -> None:
        self.heightmap_blind_mask = mask.to(device=self.device, dtype=torch.bool).clone()

    def _debug_vis_callback(self, event):
        if self._data.ray_hits_w is None:
            return

        if not hasattr(self, "heightmap_blind_mask") or self.ray_visualizer.num_prototypes < 2:
            return super()._debug_vis_callback(event)

        ray_hits = self._data.ray_hits_w
        num_envs, num_rays = ray_hits.shape[:2]
        blind_mask = self.heightmap_blind_mask[:num_envs].to(device=ray_hits.device)

        viz_points = ray_hits.reshape(-1, 3)
        marker_indices = torch.zeros((num_envs, num_rays), dtype=torch.int32, device=ray_hits.device)
        marker_indices[blind_mask] = 1
        marker_indices = marker_indices.reshape(-1)

        valid = ~torch.any(torch.isinf(viz_points), dim=1)
        self.ray_visualizer.visualize(viz_points[valid], marker_indices=marker_indices[valid])
