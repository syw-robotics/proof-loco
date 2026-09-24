"""Naive depth student whose prop encoder and action head match the heightmap teacher."""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any

import torch.nn as nn

from z_rl.models.variants.cnn_model import CNNLatentSpec, CNNModel
from z_rl.modules import EmpiricalNormalization, MLP
from z_rl.utils import resolve_obs_temporal_selector


@dataclass
class NaiveStudentLatentSpec(CNNLatentSpec):
    """Teacher prop encoder, a depth CNN in the heightmap slot, then the last prop frame.

    The concatenated latent is ``[prop_encoder(prop), cnn(depth), last_prop]``. ``cnn`` output
    width must equal the teacher's heightmap latent so the teacher head can load unchanged.
    """

    prop_obs_group: str = "prop"
    prop_encoder_cfg: dict[str, Any] = field(default_factory=dict)
    _prop_latent_dim: int = field(init=False, repr=False, default=0)

    def validate(self, model: nn.Module) -> None:
        super().validate(model)
        if self.prop_obs_group == self.image_obs_group:
            raise ValueError("`prop_obs_group` and `image_obs_group` must be different.")
        if self.prop_obs_group not in model.obs_groups:
            raise ValueError(f"`prop_obs_group` '{self.prop_obs_group}' is not an observation group.")
        if "output_dim" not in self.prop_encoder_cfg:
            raise ValueError("`prop_encoder_cfg` requires `output_dim`.")

    def build(self, model: nn.Module) -> nn.Module:
        adapter = super().build(model)
        prop_dim = int(model.obs_group_shapes[self.prop_obs_group][-1])
        output_dim, encoder = _prop_encoder(prop_dim, self.prop_encoder_cfg)
        adapter.encoders[self.prop_obs_group] = encoder
        adapter.obs_normalizers[self.prop_obs_group] = EmpiricalNormalization(prop_dim)
        adapter._obs_normalizer_updates = [  # noqa: SLF001
            (group, update)
            for group, normalizer in adapter.obs_normalizers.items()
            if (update := getattr(normalizer, "update", None)) is not None
        ]
        self._prop_latent_dim = output_dim
        return adapter

    def get_latent_dim(self, model: nn.Module) -> int:
        dim = self._prop_latent_dim + self._cnn_latent_dim
        if not self.append_last_obs:
            return dim
        return dim + resolve_obs_temporal_selector(
            self.append_obs_group, "last", model.obs_group_time_slice_map
        ).dim


class NaiveStudentVisionModel(CNNModel):
    """CNN depth student with the teacher's prop encoder and action-head width."""

    latent_spec_class = NaiveStudentLatentSpec


def _prop_encoder(input_dim: int, cfg: dict[str, Any]) -> tuple[int, nn.Module]:
    """Build the same prop MLP the heightmap teacher uses."""
    encoder_cfg = dict(cfg)
    output_dim = int(encoder_cfg.pop("output_dim"))
    hidden_dims = encoder_cfg.pop("hidden_dims", ())
    activation = encoder_cfg.pop("activation", "elu")
    layer_norm = encoder_cfg.pop("layer_norm", None)
    encoder_cfg.pop("obs_normalization", None)
    if encoder_cfg:
        raise ValueError(f"Unsupported prop encoder configuration keys: {list(encoder_cfg)}")
    if not hidden_dims:
        raise ValueError("The teacher prop encoder is an MLP and requires `hidden_dims`.")
    return output_dim, MLP(
        input_dim,
        output_dim,
        hidden_dims,
        activation,
        layer_norm=layer_norm,
        first_non_muon=True,
        last_non_muon=True,
    )
