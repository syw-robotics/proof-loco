from __future__ import annotations

from dataclasses import dataclass

import torch
import torch.nn as nn
from tensordict import TensorDict

from z_rl.models.composition.adapters import GroupObsLatentAdapter
from z_rl.models.variants.group_mlp_encoder_model import GroupMLPEncoderModel, GroupMLPLatentSpec


@dataclass
class ProofMaskedTeacherLatentSpec(GroupMLPLatentSpec):
    """``GroupMLPLatentSpec`` for prop and heightmap, then a scalar heightmap mask.

    ``mask_obs_group`` is an observation flag. It is not an encoder input.
    The parent encodes every group in ``model.obs_groups``, so ``build`` points that
    list at prop and heightmap, then puts the actor groups back.
    """

    prop_obs_group: str = "prop"
    heightmap_obs_group: str = "heightmap"
    mask_obs_group: str = "exterio_mask"

    def validate(self, model: nn.Module) -> None:
        groups = list(model.obs_groups)
        encoded = [self.prop_obs_group, self.heightmap_obs_group]
        if self.mask_obs_group in self.encoder_cfgs:
            raise ValueError(f"'{self.mask_obs_group}' is a flag and must not have an encoder.")
        if set(groups) != set(encoded) | {self.mask_obs_group} or set(self.encoder_cfgs) != set(encoded):
            raise ValueError(
                f"Actor observations must be {encoded} plus '{self.mask_obs_group}', got {groups}."
            )
        if not self.append_last_obs or self.append_obs_group != self.prop_obs_group:
            raise ValueError(f"PROOF heightmap actor appends the last '{self.prop_obs_group}' frame.")
        shape = model.obs_group_shapes[self.mask_obs_group]
        if len(shape) != 1 or int(shape[-1]) != 1:
            raise ValueError(f"'{self.mask_obs_group}' must be a scalar flag, got shape {shape}.")

    def build(self, model: nn.Module) -> nn.Module:
        actor_groups = model.obs_groups
        model.obs_groups = [self.prop_obs_group, self.heightmap_obs_group]
        adapter = super().build(model)
        model.obs_groups = actor_groups
        return ProofMaskedTeacherLatent(
            adapter,
            prop_group=self.prop_obs_group,
            heightmap_group=self.heightmap_obs_group,
            mask_group=self.mask_obs_group,
            obs_groups=list(actor_groups),
            obs_group_dims=tuple(int(model.obs_group_shapes[group][-1]) for group in actor_groups),
        )


class ProofMaskedTeacherEncoderModel(GroupMLPEncoderModel):
    """PROOF heightmap teacher.

    Same encoders, normalizers, and last-frame append as ``GroupMLPEncoderModel``.
    The heightmap latent passes through tanh before multiplication by ``mask_obs_group``.
    """

    latent_spec_class = ProofMaskedTeacherLatentSpec


# --------------------------------------------------------------------------------


class ProofMaskedTeacherLatent(nn.Module):
    """GroupMLP latents, with the tanh-bounded heightmap latent multiplied by the mask."""

    def __init__(
        self,
        adapter: GroupObsLatentAdapter,
        prop_group: str,
        heightmap_group: str,
        mask_group: str,
        obs_groups: list[str],
        obs_group_dims: tuple[int, ...],
    ) -> None:
        super().__init__()
        self.adapter = adapter
        self.prop_group = prop_group
        self.heightmap_group = heightmap_group
        self.mask_group = mask_group
        self.obs_group_dims = obs_group_dims
        self.prop_index = obs_groups.index(prop_group)
        self.heightmap_index = obs_groups.index(heightmap_group)
        self.mask_index = obs_groups.index(mask_group)

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
        prop = self.adapter.obs_normalizers[self.prop_group](prop_obs)
        heightmap = self.adapter.obs_normalizers[self.heightmap_group](heightmap_obs)
        return torch.cat(
            (
                self.adapter.encoders[self.prop_group](prop),
                self.adapter.append_obs.select(prop),
                torch.tanh(self.adapter.encoders[self.heightmap_group](heightmap)) * mask,
            ),
            dim=-1,
        )

    def update_normalization(self, obs: TensorDict) -> None:
        self.adapter.update_normalization(obs)

    def as_export_module(self) -> nn.Module:
        return self
