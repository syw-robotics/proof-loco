# proof

Plugin template for `z_rl`.

## Install

```bash
python -m pip install -e .
```

## Structure

```text
proof/
├── algorithms
├── models
├── modules
└── rl_cfg.py
```

The generated templates follow spec-first composition:

- implement a `PPOLossSpec` / `LatentSpec` / `HeadSpec`
- point IsaacLab config at `ComposablePPO` / `ComposableModel` plus the spec
