from __future__ import annotations

from collections.abc import Sequence

import torch
from locolab.assets.sensors.noisy_camera import NoisyRayCasterCamera


def accumulate_camera_ray_hits(
    full: torch.Tensor | None,
    num_envs: int,
    env_ids: torch.Tensor | Sequence[int],
    updated_hits: torch.Tensor,
) -> torch.Tensor:
    """Keep one hit row per environment.

    ``RayCasterCamera`` replaces ``ray_hits_w`` with the hits of ``env_ids`` only.
    Row ``i`` of the returned buffer is always environment ``i``.
    """
    hit_tail = updated_hits.shape[1:]
    if (
        full is None
        or full.shape[0] != num_envs
        or full.shape[1:] != hit_tail
        or full.device != updated_hits.device
        or full.dtype != updated_hits.dtype
    ):
        full = torch.full((num_envs, *hit_tail), float("inf"), device=updated_hits.device, dtype=updated_hits.dtype)

    env_ids_t = torch.as_tensor(env_ids, device=full.device, dtype=torch.long).reshape(-1)
    if updated_hits.shape[0] == env_ids_t.numel():
        full[env_ids_t] = updated_hits
    elif updated_hits.shape[0] == num_envs:
        full.copy_(updated_hits)
    return full


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


class CorruptedDepthRayCasterCamera(NoisyRayCasterCamera):
    """Depth camera that colors corrupted environments red in debug visualization."""

    def _update_buffers_impl(self, env_ids: Sequence[int]):
        super()._update_buffers_impl(env_ids)
        updated_hits = getattr(self, "ray_hits_w", None)
        if not isinstance(updated_hits, torch.Tensor) or updated_hits.ndim < 2:
            return
        self._ray_hits_w_full = accumulate_camera_ray_hits(
            getattr(self, "_ray_hits_w_full", None),
            self.num_instances,
            env_ids,
            updated_hits,
        )

    def _corruption_invalid_mask(self) -> torch.Tensor | None:
        for noise_cfg in getattr(self, "noise_pipeline", []):
            invalid_mask = getattr(getattr(noise_cfg, "func", None), "invalid_mask", None)
            if invalid_mask is not None:
                return invalid_mask
        return None

    def _debug_vis_callback(self, event):
        ray_hits = getattr(self, "_ray_hits_w_full", None)
        if ray_hits is None:
            ray_hits = getattr(self, "ray_hits_w", None)
        if ray_hits is None:
            ray_hits = getattr(getattr(self, "_data", None), "ray_hits_w", None)
        if ray_hits is None:
            return

        invalid_mask = self._corruption_invalid_mask()
        if invalid_mask is None or self.ray_visualizer.num_prototypes < 2:
            return super()._debug_vis_callback(event)

        flat_hits = ray_hits.reshape(ray_hits.shape[0], -1, 3)
        num_envs, num_rays = flat_hits.shape[:2]
        marker_indices = depth_corruption_marker_indices(
            invalid_mask, num_envs, num_rays, flat_hits.device
        )
        if marker_indices is None:
            return super()._debug_vis_callback(event)

        viz_points = flat_hits.reshape(-1, 3)
        valid = ~torch.any(torch.isinf(viz_points), dim=1)
        self.ray_visualizer.visualize(viz_points[valid], marker_indices=marker_indices[valid])
