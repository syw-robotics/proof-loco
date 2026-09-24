from __future__ import annotations

from collections.abc import Sequence
from typing import TYPE_CHECKING

import torch
from isaaclab.assets import RigidObject
from isaaclab.managers import ManagerTermBase, SceneEntityCfg

if TYPE_CHECKING:
    from isaaclab.envs import ManagerBasedRLEnv
    from isaaclab.managers import ManagerTermBaseCfg


class terrain_out_of_bounds_at_max(ManagerTermBase):
    """Terminate when a robot on the hardest terrain row walks too close to the map edge.

    Map bounds are constant. The hardest-row mask is refreshed on reset, which is the only time
    terrain level changes. Each step is one position check, masked so other rows never terminate.
    """

    def __init__(self, cfg: ManagerTermBaseCfg, env: ManagerBasedRLEnv):
        super().__init__(cfg, env)
        robot_cfg: SceneEntityCfg = cfg.params.get("asset_cfg", SceneEntityCfg("robot"))
        distance_buffer = float(cfg.params.get("distance_buffer", 3.0))

        self._no_termination = torch.zeros(env.num_envs, dtype=torch.bool, device=env.device)
        self._robot: RigidObject | None = None
        self._bounds_xy: torch.Tensor | None = None
        self._on_hardest_terrain = self._no_termination
        self._terrain_levels: torch.Tensor | None = None
        self._hardest_terrain_level = 0

        terrain_cfg = env.scene.cfg.terrain
        if terrain_cfg.terrain_type == "plane":
            raise ValueError("Terrain type must be 'generator'.")
        if terrain_cfg.terrain_type != "generator":
            raise ValueError("Terrain type must be 'generator'.")

        terrain = env.scene.terrain
        terrain_levels = getattr(terrain, "terrain_levels", None)
        if terrain_levels is None:
            return

        generator_cfg = terrain.cfg.terrain_generator
        sub_terrain_width, sub_terrain_length = generator_cfg.size
        border_width = generator_cfg.border_width
        map_width = generator_cfg.num_rows * sub_terrain_width + 2.0 * border_width
        map_length = generator_cfg.num_cols * sub_terrain_length + 2.0 * border_width

        robot: RigidObject = env.scene[robot_cfg.name]
        self._robot = robot
        self._bounds_xy = torch.tensor(
            (0.5 * map_width - distance_buffer, 0.5 * map_length - distance_buffer),
            device=env.device,
            dtype=robot.data.root_pos_w.dtype,
        )
        # ``max_terrain_level`` is one past the last row.
        self._hardest_terrain_level = getattr(terrain, "max_terrain_level", generator_cfg.num_rows) - 1
        self._terrain_levels = terrain_levels
        self._on_hardest_terrain = terrain_levels >= self._hardest_terrain_level

    def reset(self, env_ids: Sequence[int] | None = None) -> None:
        if self._bounds_xy is None:
            return
        if env_ids is None:
            env_ids = slice(None)
        self._on_hardest_terrain[env_ids] = self._terrain_levels[env_ids] >= self._hardest_terrain_level

    def __call__(
        self,
        env: ManagerBasedRLEnv,
        asset_cfg: SceneEntityCfg = SceneEntityCfg("robot"),
        distance_buffer: float = 3.0,
    ) -> torch.Tensor:
        del env, asset_cfg, distance_buffer
        if self._bounds_xy is None:
            return self._no_termination
        root_xy = self._robot.data.root_pos_w[:, :2]
        past_map_edge = torch.any(root_xy.abs() > self._bounds_xy, dim=-1)
        return past_map_edge & self._on_hardest_terrain
