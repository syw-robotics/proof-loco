"""Vanilla heightmap teacher with a tanh-bounded terrain latent."""

import torch.nn as nn

from z_rl.models.variants.group_mlp_encoder_model import GroupMLPEncoderModel


class VanillaTeacherEncoderModel(GroupMLPEncoderModel):
    """Bound the heightmap encoder output before concatenating the actor latent."""

    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)
        self.latent_adapter.encoders["heightmap"].add_module("tanh", nn.Tanh())
