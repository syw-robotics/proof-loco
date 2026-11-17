"""Tensor-only ONNX modules for the PROOF depth student.

The MuJoCo demo runs two sessions. ``depth_encoder.onnx`` reads ``depth_image`` shaped
``[1, history, H, W]`` and writes ``depth_image_latent``. ``actor.onnx`` reads ``obs``,
which is ``concat(prop, depth_image_latent)``, plus the recurrent state and the gate
state the demo feeds back every step:

- inputs: ``obs``, ``h_in``, ``gate_in``, ``gate_valid_in``, ``gate_open_in``
- outputs: ``actions``, ``h_out``, ``gate_out``, ``gate_valid_out``, ``gate_open_out``, ``gate_in_out``

``gate_open_in`` is the hysteresis bit. The demo always feeds ``gate_in`` and
``gate_valid_in`` as well, and its runtime rejects a feed key the graph does not
declare, so those two are echoed to ``gate_in_out`` and ``gate_valid_out``. The plotted
gate is ``gate_out``, the 0/1 value multiplied onto ``mu``. ``gate_open_out`` is that
same bit; the demo writes it back into ``gate_open_in`` on the next step.
"""

from __future__ import annotations

import copy

import torch
import torch.nn as nn

from .proof_gate_student_model import ProofGateStudentVisionModel

_ACTOR_FILENAME = "actor.onnx"
_ENCODER_FILENAME = "depth_encoder.onnx"


class ProofGateDepthEncoderExport(nn.Module):
    """CNN and projection used by ``depth_encoder.onnx``."""

    def __init__(self, model: ProofGateStudentVisionModel) -> None:
        super().__init__()
        latent = model.latent_adapter
        image_group = latent.spec.image_obs_group
        self.image_encoder = copy.deepcopy(latent.image_encoder)
        self.image_shape = tuple(int(dim) for dim in model.obs_group_shapes[image_group])

    def forward(self, depth_image: torch.Tensor) -> torch.Tensor:
        return self.image_encoder(depth_image)

    def get_dummy_inputs(self) -> tuple[torch.Tensor, ...]:
        return (torch.zeros(1, *self.image_shape, device=self._device),)

    @property
    def input_names(self) -> list[str]:
        return ["depth_image"]

    @property
    def output_names(self) -> list[str]:
        return ["depth_image_latent"]

    @property
    def _device(self) -> torch.device:
        return next(self.parameters()).device


class ProofGateActorExport(nn.Module):
    """Stateless actor used by ``actor.onnx``.

    ``obs`` is the demo's packed vector: proprioception, then the depth latent from
    ``ProofGateDepthEncoderExport``. Hidden state and the gate bit are inputs, not
    Python attributes.
    """

    def __init__(self, model: ProofGateStudentVisionModel) -> None:
        super().__init__()
        latent = model.latent_adapter
        spec = latent.spec
        self.prop_normalizer = copy.deepcopy(latent.prop_normalizer)
        self.prop_encoder = copy.deepcopy(latent.prop_encoder)
        self.gru = copy.deepcopy(latent.rnn.rnn)
        self.log_var_head = copy.deepcopy(latent.log_var_head)
        self.gate = copy.deepcopy(latent.gate)
        self.head = copy.deepcopy(model.head)
        if model.distribution is None:
            self.deterministic_output = nn.Identity()
        else:
            self.deterministic_output = copy.deepcopy(model.distribution.as_deterministic_output_module())
        self.prop_dim = int(self.prop_normalizer.input_shape[-1])
        self.cnn_latent_dim = int(spec._cnn_latent_dim)
        self.close_threshold = float(spec.gate_threshold_range[0])
        self.open_threshold = float(spec.gate_threshold_range[1])
        self.log_var_min = float(spec.log_var_clip_range[0])
        self.log_var_max = float(spec.log_var_clip_range[1])
        self.register_buffer("append_index", _append_index(latent.append_obs.meta))

    def forward(
        self,
        obs: torch.Tensor,
        h_in: torch.Tensor,
        gate_in: torch.Tensor,
        gate_valid_in: torch.Tensor,
        gate_open_in: torch.Tensor,
    ) -> tuple[torch.Tensor, torch.Tensor, torch.Tensor, torch.Tensor, torch.Tensor, torch.Tensor]:
        prop = self.prop_normalizer(obs[..., : self.prop_dim])
        cnn_latent = obs[..., self.prop_dim :]
        prop_latent = self.prop_encoder(prop)
        mu, h_out = self.gru(torch.cat([prop_latent, cnn_latent], dim=-1).unsqueeze(0), h_in)
        mu = mu[0]
        features = torch.cat([mu, cnn_latent, prop_latent], dim=-1)
        log_var = self.log_var_head(features).clamp(self.log_var_min, self.log_var_max)
        raw_gate = torch.sigmoid(self.gate(torch.cat([prop_latent, log_var, mu], dim=-1)))
        # Float arithmetic, not Where. The demo's ONNX Runtime has no bool Where kernel,
        # and that missing kernel stalls actor session creation after the encoder loads.
        previous = gate_open_in.to(dtype=raw_gate.dtype)
        above_close = (raw_gate >= self.close_threshold).to(dtype=raw_gate.dtype)
        above_open = (raw_gate >= self.open_threshold).to(dtype=raw_gate.dtype)
        gate = previous * above_close + (1.0 - previous) * above_open
        gate_open = gate >= 0.5
        last_prop = prop.index_select(1, self.append_index)
        latent = torch.cat([prop_latent, last_prop, gate * mu], dim=-1)
        return self.deterministic_output(self.head(latent)), h_out, gate, gate_valid_in, gate_open, gate_in

    def get_dummy_inputs(self) -> tuple[torch.Tensor, ...]:
        device = self.append_index.device
        obs = torch.zeros(1, self.prop_dim + self.cnn_latent_dim, device=device)
        h_in = torch.zeros(self.gru.num_layers, 1, self.gru.hidden_size, device=device)
        gate = torch.zeros(1, 1, device=device)
        gate_open = torch.zeros(1, 1, dtype=torch.bool, device=device)
        return obs, h_in, gate, gate, gate_open

    @property
    def input_names(self) -> list[str]:
        return ["obs", "h_in", "gate_in", "gate_valid_in", "gate_open_in"]

    @property
    def output_names(self) -> list[str]:
        return ["actions", "h_out", "gate_out", "gate_valid_out", "gate_open_out", "gate_in_out"]


def proof_gate_onnx_modules(model: ProofGateStudentVisionModel) -> list[tuple[str, nn.Module]]:
    """Build the two modules the demo loads, in session order."""
    return [
        (_ENCODER_FILENAME, ProofGateDepthEncoderExport(model)),
        (_ACTOR_FILENAME, ProofGateActorExport(model)),
    ]


def _append_index(meta: slice | torch.Tensor) -> torch.Tensor:
    """Return the term-major last-frame indices as a 1-D long tensor."""
    if isinstance(meta, slice):
        if meta.start is None or meta.stop is None or meta.step not in (None, 1):
            raise ValueError(f"Last-prop export only supports a unit-stride slice, got {meta}.")
        return torch.arange(meta.start, meta.stop, dtype=torch.long)
    if not isinstance(meta, torch.Tensor):
        raise TypeError(f"Last-prop selector must be a slice or a long tensor, got {type(meta)}.")
    return meta.detach().to(dtype=torch.long).reshape(-1).clone()
