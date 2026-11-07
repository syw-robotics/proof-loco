"""Depth student that estimates the PROOF heightmap latent with a variance net and a gate.

The head input matches the PROOF teacher: ``[prop_latent, last_prop, gated_mu]``.
``mu`` is a GRU over the prop latent and depth CNN. The variance net and the gate
read detached features, so their losses do not train the latent estimator.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any

import torch
import torch.nn as nn
from tensordict import TensorDict

from z_rl.models.variants.cnn_model import CNNLatentSpec, CNNModel
from z_rl.modules import EmpiricalNormalization, HiddenState, MLP, RNN
from z_rl.utils import resolve_obs_temporal_selector


@dataclass
class ProofGateStudentLatentSpec(CNNLatentSpec):
    """PROOF prop encoder, depth CNN, GRU mean, variance net, and hysteresis gate."""

    prop_obs_group: str = "prop"
    prop_encoder_cfg: dict[str, Any] = field(default_factory=dict)
    gate_hidden_dims: tuple[int, ...] = (64, 64)
    gate_activation: str = "elu"
    gate_threshold_range: tuple[float, float] = (0.5, 0.8)
    gate_alpha_range: tuple[float, float] = (0.8, 0.8)
    log_var_hidden_dims: tuple[int, ...] = (64, 64)
    log_var_activation: str = "elu"
    log_var_clip_range: tuple[float, float] = (-8.0, 5.0)
    prop_latent_dim: int = field(init=False, repr=False, default=0)  # prop latent dimension
    rnn_hidden_dim: int = 32  # exterio latent dimension
    rnn_num_layers: int = 1
    append_obs_dim: int = field(init=False, repr=False, default=0)  # single frame prop dimension

    def validate(self, model: nn.Module) -> None:
        super().validate(model)

    def build(self, model: nn.Module) -> nn.Module:
        return ProofGateLatent(self, model)

    def get_latent_dim(self, model: nn.Module) -> int:
        del model
        return self.prop_latent_dim + self.append_obs_dim + self.rnn_hidden_dim


class ProofGateStudentVisionModel(CNNModel):
    """PROOF depth student. The action head reads the gated heightmap-slot latent."""

    is_recurrent: bool = True
    latent_spec_class = ProofGateStudentLatentSpec

    def forward(
        self,
        obs: TensorDict,
        masks: torch.Tensor | None = None,
        hidden_state: HiddenState = None,
        stochastic_output: bool = False,
        force_open_gate: bool = False,
    ) -> torch.Tensor:
        self.latent_adapter.force_open_gate = bool(force_open_gate)
        try:
            return super().forward(obs, masks, hidden_state, stochastic_output)
        finally:
            self.latent_adapter.force_open_gate = False

    def reset(self, dones: torch.Tensor | None = None, hidden_state: HiddenState = None) -> None:
        self.latent_adapter.reset(dones, hidden_state)

    def get_hidden_state(self) -> HiddenState:
        return self.latent_adapter.get_hidden_state()

    def detach_hidden_state(self, dones: torch.Tensor | None = None) -> None:
        self.latent_adapter.detach_hidden_state(dones)

    def onnx_export_modules(self) -> list[tuple[str, nn.Module]]:
        """Return the website demo's depth encoder and actor, as tensor-only modules."""
        from .proof_gate_student_export import proof_gate_onnx_modules

        return proof_gate_onnx_modules(self)


class ProofGateLatent(nn.Module):
    """``[prop_latent, last_prop, gate * mu]`` with a detached variance net and gate."""

    def __init__(self, spec: ProofGateStudentLatentSpec, model: nn.Module) -> None:
        super().__init__()
        close_threshold, open_threshold = spec.gate_threshold_range
        if not 0.0 <= close_threshold <= open_threshold <= 1.0:
            raise ValueError(
                "Gate thresholds must satisfy 0 <= close <= open <= 1, got "
                f"{spec.gate_threshold_range}."
            )
        self.spec = spec
        self.image_encoder = spec._make_cnn_encoder(model)
        prop_dim = int(model.obs_group_shapes[spec.prop_obs_group][-1])
        prop_latent_dim, self.prop_encoder = _make_prop_encoder(prop_dim, spec.prop_encoder_cfg)
        self.append_obs = resolve_obs_temporal_selector(
            spec.append_obs_group, "last", model.obs_group_time_slice_map
        )
        spec.prop_latent_dim = prop_latent_dim
        spec.append_obs_dim = self.append_obs.dim
        mu_dim = spec.rnn_hidden_dim
        cnn_dim = spec._cnn_latent_dim
        self.prop_normalizer = EmpiricalNormalization(prop_dim)
        self.rnn = self._make_memory(prop_latent_dim + cnn_dim, mu_dim)
        self.log_var_head = MLP(
            mu_dim + cnn_dim + prop_latent_dim,
            mu_dim,
            spec.log_var_hidden_dims,
            spec.log_var_activation,
            first_non_muon=True,
            last_non_muon=True,
        )
        self.gate = MLP(
            prop_latent_dim + mu_dim + mu_dim,
            1,
            spec.gate_hidden_dims,
            spec.gate_activation,
            first_non_muon=True,
            last_non_muon=True,
        )
        self.force_open_gate = False
        self._last_exterio_latent_mu: torch.Tensor | None = None
        self._last_exterio_latent_log_var: torch.Tensor | None = None
        self._last_raw_gate: torch.Tensor | None = None
        self._last_gate: torch.Tensor | None = None
        self._gate_open: torch.Tensor | None = None

    def _make_memory(self, input_dim: int, output_dim: int) -> nn.Module:
        return RNN(input_dim, output_dim, num_layers=self.spec.rnn_num_layers, type="gru")

    @property
    def cnn(self) -> nn.Module:
        encoder = self.image_encoder
        return encoder[0] if isinstance(encoder, nn.Sequential) else encoder

    def forward(self, obs: TensorDict) -> torch.Tensor:
        prop = self.prop_normalizer(obs[self.spec.prop_obs_group])
        prop_latent = self.prop_encoder(prop)
        cnn_latent = self.image_encoder(obs[self.spec.image_obs_group])
        mu = self.rnn(torch.cat([prop_latent, cnn_latent], dim=-1)).squeeze(0)
        detached = torch.cat([mu.detach(), cnn_latent.detach(), prop_latent.detach()], dim=-1)
        log_var = self.log_var_head(detached).clamp(*self.spec.log_var_clip_range)
        raw_gate, gate = self._gate(prop_latent, log_var, mu, self.force_open_gate)
        self._last_exterio_latent_mu = mu
        self._last_exterio_latent_log_var = log_var
        self._last_raw_gate = raw_gate
        self._last_gate = gate
        return torch.cat([prop_latent, self.append_obs.select(prop), gate * mu], dim=-1)

    def update_normalization(self, obs: TensorDict) -> None:
        self.prop_normalizer.update(obs[self.spec.prop_obs_group])

    def reset(self, dones: torch.Tensor | None = None, hidden_state: HiddenState = None) -> None:
        self.rnn.reset(dones, hidden_state)
        if dones is None or self._gate_open is None:
            self._gate_open = None
            return
        self._gate_open[dones.view(-1).to(dtype=torch.bool)] = False

    def get_hidden_state(self) -> HiddenState:
        return self.rnn.hidden_state

    def detach_hidden_state(self, dones: torch.Tensor | None = None) -> None:
        self.rnn.detach_hidden_state(dones)

    @property
    def last_exterio_latent_mu(self) -> torch.Tensor:
        return self._last_exterio_latent_mu

    @property
    def last_exterio_latent_log_var(self) -> torch.Tensor:
        return self._last_exterio_latent_log_var

    @property
    def last_raw_gate(self) -> torch.Tensor:
        return self._last_raw_gate

    @property
    def last_gate(self) -> torch.Tensor:
        return self._last_gate

    def _gate(
        self,
        prop_latent: torch.Tensor,
        log_var: torch.Tensor,
        mu: torch.Tensor,
        force_open: bool,
    ) -> tuple[torch.Tensor, torch.Tensor]:
        if force_open:
            raw_gate = log_var.new_ones(*log_var.shape[:-1], 1)
            return raw_gate, self._force_gate_open(raw_gate)
        gate_input = torch.cat([prop_latent.detach(), log_var.detach(), mu.detach()], dim=-1)
        raw_gate = torch.sigmoid(self.gate(gate_input))
        return raw_gate, self._smooth_gate(raw_gate)

    # Spare EMA smoother. The live gate is the 0/1 hysteresis below.
    # def _smooth_gate(self, raw_gate: torch.Tensor) -> torch.Tensor:
    #     if self._previous_gate is None or self._previous_gate.shape != raw_gate.shape:
    #         previous_gate = raw_gate
    #     else:
    #         previous_gate = torch.where(self._previous_gate_valid, self._previous_gate, raw_gate)
    #     opening = raw_gate >= previous_gate
    #     open_alpha, close_alpha = self.spec.gate_alpha_range
    #     alpha = torch.where(
    #         opening,
    #         torch.full_like(raw_gate, open_alpha),
    #         torch.full_like(raw_gate, close_alpha),
    #     )
    #     smoothed_gate = alpha * raw_gate + (1.0 - alpha) * previous_gate
    #     if self._gate_open is None or self._gate_open.shape != raw_gate.shape:
    #         previous_open = torch.zeros_like(raw_gate, dtype=torch.bool)
    #     else:
    #         previous_open = torch.where(
    #             self._previous_gate_valid,
    #             self._gate_open,
    #             torch.zeros_like(self._gate_open),
    #         )
    #     close_threshold, open_threshold = self.spec.gate_threshold_range
    #     gate_open = torch.where(
    #         previous_open,
    #         smoothed_gate >= close_threshold,
    #         smoothed_gate >= open_threshold,
    #     )
    #     self._previous_gate = smoothed_gate.detach()
    #     self._previous_gate_valid = torch.ones_like(gate_open, dtype=torch.bool)
    #     self._gate_open = gate_open.detach()
    #     return gate_open.to(dtype=raw_gate.dtype)

    def _smooth_gate(self, raw_gate: torch.Tensor) -> torch.Tensor:
        if self._gate_open is None or self._gate_open.shape != raw_gate.shape:
            previous_open = torch.zeros_like(raw_gate, dtype=torch.bool)
        else:
            previous_open = self._gate_open
        gate_open = hysteresis_gate(raw_gate, previous_open, *self.spec.gate_threshold_range)
        self._gate_open = gate_open.detach()
        return gate_open.to(dtype=raw_gate.dtype)

    def _force_gate_open(self, raw_gate: torch.Tensor) -> torch.Tensor:
        gate = torch.ones_like(raw_gate)
        self._gate_open = torch.ones_like(gate, dtype=torch.bool)
        return gate


def hysteresis_gate(
    raw_gate: torch.Tensor,
    previous_open: torch.Tensor,
    close_threshold: float,
    open_threshold: float,
) -> torch.Tensor:
    """Open at the high threshold and close at the low one.

    ``previous_open`` is the previous boolean gate. An open gate stays open while the raw
    gate is at least ``close_threshold``; a closed gate opens only at ``open_threshold``.
    """
    return torch.where(
        previous_open,
        raw_gate >= close_threshold,
        raw_gate >= open_threshold,
    )


def _make_prop_encoder(input_dim: int, cfg: dict[str, Any]) -> tuple[int, nn.Module]:
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
