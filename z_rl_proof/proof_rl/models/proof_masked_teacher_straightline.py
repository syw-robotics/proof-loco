"""直接用 z_rl 接口写的 PROOF heightmap actor，用来帮助理解 z_rl 的用法。

``LatentSpec`` 检查观测并搭建 latent，``ComposableModel`` 把它装进 actor。
训练时 ``forward`` 接收 ``TensorDict``；导出时同一份 ``forward`` 接收拼好的观测向量。
Runner 使用的是同目录的 ``proof_masked_teacher_model.py``。
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any

import torch
import torch.nn as nn
from tensordict import TensorDict

from z_rl.models.composition import ComposableModel, LatentSpec
from z_rl.modules import EmpiricalNormalization, MLP
from z_rl.utils import ObsSelector, resolve_obs_temporal_selector


@dataclass
class ProofMaskedTeacherLatentSpec(LatentSpec):
    """PROOF heightmap actor latent.

    Observation group names come from the runner config. The graph stays fixed:
    normalize and encode proprioception, encode the heightmap and multiply it by
    the mask flag, then append the last normalized proprioceptive frame.
    """

    encoder_cfgs: dict[str, dict[str, Any]] = field(default_factory=dict)
    prop_obs_group: str = "prop"
    heightmap_obs_group: str = "heightmap"
    mask_obs_group: str = "exterio_mask"
    prop_latent_dim: int = field(init=False, default=0, repr=False)
    heightmap_latent_dim: int = field(init=False, default=0, repr=False)
    last_prop_obs: ObsSelector = field(init=False, repr=False)

    def validate(self, model: nn.Module) -> None:
        groups = list(model.obs_groups)
        expected = {self.prop_obs_group, self.heightmap_obs_group, self.mask_obs_group}
        if set(groups) != expected:
            raise ValueError(
                "PROOF heightmap actor observations must be "
                f"{sorted(expected)}, got {groups}."
            )
        if set(self.encoder_cfgs) != {self.prop_obs_group, self.heightmap_obs_group}:
            raise ValueError(
                f"`encoder_cfgs` must contain only '{self.prop_obs_group}' and "
                f"'{self.heightmap_obs_group}', got {sorted(self.encoder_cfgs)}."
            )
        for group in groups:
            shape = model.obs_group_shapes[group]
            if len(shape) != 1:
                raise ValueError(f"'{group}' must be a vector, got shape {shape}.")
        if int(model.obs_group_shapes[self.mask_obs_group][-1]) != 1:
            raise ValueError(f"'{self.mask_obs_group}' must be a scalar flag.")
        self.last_prop_obs = resolve_obs_temporal_selector(
            self.prop_obs_group, "last", model.obs_group_time_slice_map
        )

    def build(self, model: nn.Module) -> nn.Module:
        prop_cfg = self.encoder_cfgs[self.prop_obs_group]
        height_cfg = self.encoder_cfgs[self.heightmap_obs_group]
        self.prop_latent_dim = int(prop_cfg["output_dim"])
        self.heightmap_latent_dim = int(height_cfg["output_dim"])
        groups = list(model.obs_groups)
        prop_dim = int(model.obs_group_shapes[self.prop_obs_group][-1])
        height_dim = int(model.obs_group_shapes[self.heightmap_obs_group][-1])

        return _ProofMaskedTeacherLatent(
            prop_normalizer=EmpiricalNormalization(prop_dim),
            prop_encoder=_mlp(prop_dim, prop_cfg),
            heightmap_encoder=_mlp(height_dim, height_cfg),
            last_prop=self.last_prop_obs,
            prop_group=self.prop_obs_group,
            heightmap_group=self.heightmap_obs_group,
            mask_group=self.mask_obs_group,
            obs_group_dims=tuple(int(model.obs_group_shapes[group][-1]) for group in groups),
            prop_index=groups.index(self.prop_obs_group),
            heightmap_index=groups.index(self.heightmap_obs_group),
            mask_index=groups.index(self.mask_obs_group),
        )

    def get_latent_dim(self, model: nn.Module) -> int:
        del model
        return self.prop_latent_dim + self.heightmap_latent_dim + self.last_prop_obs.dim


class ProofMaskedTeacherEncoderModel(ComposableModel):
    """PROOF heightmap teacher: GroupMLP trunk with a hardcoded heightmap-latent mask."""

    latent_spec_class = ProofMaskedTeacherLatentSpec


# --------------------------------------------------------------------------------


class _ProofMaskedTeacherLatent(nn.Module):
    """``[prop_latent, heightmap_latent * mask, last_prop]``."""

    def __init__(
        self,
        prop_normalizer: nn.Module,
        prop_encoder: nn.Module,
        heightmap_encoder: nn.Module,
        last_prop: ObsSelector,
        prop_group: str,
        heightmap_group: str,
        mask_group: str,
        obs_group_dims: tuple[int, ...],
        prop_index: int,
        heightmap_index: int,
        mask_index: int,
    ) -> None:
        super().__init__()
        self.prop_normalizer = prop_normalizer
        self.prop_encoder = prop_encoder
        self.heightmap_encoder = heightmap_encoder
        self.last_prop = last_prop
        self.prop_group = prop_group
        self.heightmap_group = heightmap_group
        self.mask_group = mask_group
        self.obs_group_dims = obs_group_dims
        self.prop_index = prop_index
        self.heightmap_index = heightmap_index
        self.mask_index = mask_index

    def forward(self, obs: TensorDict | torch.Tensor) -> torch.Tensor:
        if isinstance(obs, torch.Tensor):
            parts = obs.split(self.obs_group_dims, dim=-1)
            prop_obs = parts[self.prop_index]
            heightmap_obs = parts[self.heightmap_index]
            mask = parts[self.mask_index]
        else:
            prop_obs = obs[self.prop_group]
            heightmap_obs = obs[self.heightmap_group]
            mask = obs[self.mask_group]
        prop = self.prop_normalizer(prop_obs)
        return torch.cat(
            (
                self.prop_encoder(prop),
                self.heightmap_encoder(heightmap_obs) * mask,
                self.last_prop.select(prop),
            ),
            dim=-1,
        )

    def update_normalization(self, obs: TensorDict) -> None:
        self.prop_normalizer.update(obs[self.prop_group])

    def as_export_module(self) -> nn.Module:
        return self



def _mlp(input_dim: int, cfg: dict[str, Any]) -> MLP:
    return MLP(
        input_dim,
        int(cfg["output_dim"]),
        cfg["hidden_dims"],
        cfg.get("activation", "elu"),
        layer_norm=cfg.get("layer_norm", "pre_activation"),
        first_non_muon=True,
        last_non_muon=True,
    )


