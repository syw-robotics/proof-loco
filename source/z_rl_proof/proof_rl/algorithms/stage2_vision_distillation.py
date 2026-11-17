from __future__ import annotations

from dataclasses import dataclass

import torch

from z_rl.algorithms.composition import PPOLossSpec
from z_rl.storage import RolloutStorage


@dataclass
class MyAuxLossSpec(PPOLossSpec):
    """Example PPO loss spec with one extra loss term."""

    my_aux_loss_coef: float = 0.1

    def compute(
        self,
        algo,
        minibatch: RolloutStorage.Batch,
    ) -> tuple[dict[str, torch.Tensor], dict[str, torch.Tensor]]:
        del algo
        dummy_loss = torch.zeros((), device=minibatch.actions.device)
        return {"my_aux_loss": dummy_loss}, {}
