"""PROOF depth student using z_rl's deterministic-posterior RSSM memory.

The existing latent, action, variance and gate losses train this student. The
prior and posterior variance are unused; this is not world-model training.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any

import torch
import torch.nn as nn

from z_rl.modules import RSSM, HiddenState

from .proof_gate_student_model import ProofGateLatent, ProofGateStudentLatentSpec, ProofGateStudentVisionModel


@dataclass
class ProofRSSMStudentLatentSpec(ProofGateStudentLatentSpec):
    """RSSM features project to the teacher terrain width, ``rnn_hidden_dim``."""

    rssm_cfg: dict[str, Any] = field(
        default_factory=lambda: {"deter_dim": 128, "stoch_dim": 32, "hidden_dim": 128}
    )

    def build(self, model: nn.Module) -> nn.Module:
        return ProofRSSMLatent(self, model)


class ProofRSSMStudentVisionModel(ProofGateStudentVisionModel):
    """RSSM alternative to the GRU student, retaining the same teacher head input."""

    latent_spec_class = ProofRSSMStudentLatentSpec

    def onnx_export_modules(self) -> list[tuple[str, nn.Module]]:
        raise NotImplementedError("RSSM student ONNX export requires explicit deter/stoch state I/O.")

    def as_onnx(self, verbose: bool = False) -> nn.Module:
        raise NotImplementedError("RSSM student ONNX export requires explicit deter/stoch state I/O.")


class ProofRSSMLatent(ProofGateLatent):
    def _make_memory(self, input_dim: int, output_dim: int) -> nn.Module:
        return _RSSMMemory(input_dim, output_dim, self.spec.rssm_cfg)


class _RSSMMemory(nn.Module):
    """Online RSSM with the state/forward interface used by ``ProofGateLatent``.

    ``hidden_state`` stores ``(deter, stoch)`` as ``[1, N, D]`` tensors. State
    resets are functional so saved snapshots and pending BPTT graphs stay valid.
    """

    def __init__(self, input_dim: int, output_dim: int, rssm_cfg: dict[str, Any]) -> None:
        super().__init__()
        self.rssm = RSSM(embed_dim=input_dim, action_dim=0, **rssm_cfg)
        self.mu_head = nn.Linear(self.rssm.deter_dim + self.rssm.stoch_dim, output_dim)
        self.mu_head.weight._non_muon = True
        self.hidden_state: tuple[torch.Tensor, torch.Tensor] | None = None

    def forward(self, embed: torch.Tensor) -> torch.Tensor:
        state = (
            self.rssm.initial(embed.shape[0])
            if self.hidden_state is None
            else {"deter": self.hidden_state[0].squeeze(0), "stoch": self.hidden_state[1].squeeze(0)}
        )
        state = self.rssm.posterior_step(state, embed.new_empty(embed.shape[0], 0), embed, sample=False)
        self.hidden_state = (state["deter"].unsqueeze(0), state["stoch"].unsqueeze(0))
        return torch.tanh(self.mu_head(self.rssm.get_feat(state))).unsqueeze(0)

    def reset(self, dones: torch.Tensor | None = None, hidden_state: HiddenState = None) -> None:
        if dones is None:
            self.hidden_state = hidden_state
        elif hidden_state is not None:
            raise ValueError("Pass either dones or hidden_state, not both.")
        elif self.hidden_state is not None:
            done = dones.reshape(1, -1, 1).bool()
            self.hidden_state = tuple(torch.where(done, 0.0, value) for value in self.hidden_state)

    def detach_hidden_state(self, dones: torch.Tensor | None = None) -> None:
        if self.hidden_state is not None:
            if dones is None:
                self.hidden_state = tuple(value.detach() for value in self.hidden_state)
            else:
                done = dones.reshape(1, -1, 1).bool()
                self.hidden_state = tuple(torch.where(done, value.detach(), value) for value in self.hidden_state)
