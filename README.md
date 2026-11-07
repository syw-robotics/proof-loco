<h1 align="center">PROOF: <u>P</u>erceptive <u>R</u>obustness via <u>O</u>ut-<u>o</u>f-Distribution <u>F</u>allback for Legged Locomotion</h1>

<p align="center"><b>Conference on Robot Learning (CoRL) 2026</b></p>

<div align="center">

[[Website]](https://syw-robotics.github.io/proof-loco/)
[[arXiv]](https://arxiv.org/abs/2606.28476)
[[Online Demo]](https://syw-robotics.github.io/proof-loco/#interactive-demo)

<img src="./assets/sustech-tsinghua-hkustgz-pcl.png" height="60"/>

<br>

[![IsaacLab](https://img.shields.io/badge/IsaacLab-3.0-blue.svg)](https://github.com/isaac-sim/IsaacLab) [![Python](https://img.shields.io/badge/python-3.12-blue.svg)](https://docs.python.org/3/whatsnew/3.12.html) [![Linux platform](https://img.shields.io/badge/Platform-linux--64-orange.svg)](https://releases.ubuntu.com/22.04/) [![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-yellow.svg)](LICENSE)


<br>
</div>

Teaser

> **PROOF** blablabla

### Description

This is a re-implementation with:

- [LocoLab](https://github.com/syw-robotics/LocoLab): comprehensive manager based rl env for locomotion, built on IsaacLab 3.0
- [z_rl](https://github.com/syw-robotics/z_rl): modular and flexible rl code, built on [rsl_rl](https://github.com/leggedrobotics/rsl_rl)

New features includes: aaa, bbb, ccc

<!-- ### Status -->
<!-- - [ ] Training code (https://github.com/syw-robotics/z_rl) (heightmap teacher + depth vision student) -->
<!--      -->
<!--  -->
<!-- - [ ] Sim-to-sim and sim-to-real deployment -->


### ⚙️ Installation

<!-- Requires Isaac Lab 3.0, the LocoLab, and z_rl. Use their existing environment; Isaac Sim Kit is not required for OV PhysX, Newton MJWarp, Newton GL or Viser. -->

Install IsaacLab, LocoLab, Z RL according to blbabl.

```bash
uv pip install -e source/proof_parkour -e z_rl_proof
```

The current LocoLab 3.0 integration uses assetx USD bundles and `locolab.utils.debug_viz.markers`.

Newton MJWarp is the validated runtime. In the current IsaacLab checkout, OV PhysX fails during sensor initialization because `PathDictionary` is called without its required `stage`;

IsaacLab source is left unchanged. The files in [`patches/`](patches/) record fixes for the older November 1 snapshot and should not be reapplied wholesale to current checkouts. See [the compatibility and upgrade validation report](docs/isaaclab3-upgrade.md).

<!-- For depth-camera noise/CNNs, ensure the environment's CUDA 13 libraries precede system CUDA 12 libraries. The supplied environment was tested with: -->

<!-- ```bash -->
<!-- export PROOF_SITE=/mnt/uv_envs/isaaclab_uv_envs/IsaacLab-3.0/.venv/lib/python3.12/site-packages -->
<!-- export LD_LIBRARY_PATH="$PROOF_SITE/nvidia/cu13/lib:$PROOF_SITE/torch/lib${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}" -->
<!-- ``` -->

#### Registered tasks

- `Naive-Heightmap-Parkour-PPO-Go2`: group-MLP actor that reads the height scan directly
- `Proof-Heightmap-Parkour-PPO-Go2`: naive GroupMLP heightmap actor, with `depth_corrupt` gating the heightmap latent, plus linear-velocity supervision
- `Naive-Vision-Parkour-Distill-Go2`: depth CNN student distilled from the naive heightmap actor, initialized from that actor's prop encoder and head
- `Proof-Vision-Parkour-Distill-Go2`: depth student distilled from the PROOF heightmap actor, with a variance net and a hysteresis gate on the heightmap latent
- `Proof-Vision-RSSM-Parkour-Distill-Go2`: PROOF depth student using RSSM posterior-mean memory and a tanh terrain readout

<!-- Each task also registers a `-Play` variant and publishes a `z_rl_cfg_entry_point`. -->

<!-- #### Verify -->
<!--  -->
<!-- ```bash -->
<!-- "$PROOF_PYTHON" scripts/list_envs.py -->
<!-- "$PROOF_PYTHON" -m pytest scripts/test_isaaclab3_compat.py -q -->
<!-- "$PROOF_PYTHON" -m pytest scripts/test_proof_rssm_student.py --import-mode=importlib -q -->
<!-- ``` -->


### 🚀 Training

#### 1. PROOF Heightmap MLP Teacher Policy

```bash
python scripts/z_rl/train.py --task Proof-Heightmap-Parkour-PPO-Go2 \
  --physics newton_mjwarp --num_envs 64 --max_iterations 100 --logger tensorboard agent.save_interval=100
```

Without `--viz`, training runs without a viewer. `--headless` is no longer needed. Omit `--num_envs` and `--max_iterations` for the task's normal training configuration.

#### 2. PROOF Vision GRU-CNN Student Policy

```bash
python scripts/z_rl/train.py --task Proof-Vision-Parkour-Distill-Go2 \
  --physics newton_mjwarp --teacher_checkpoint /absolute/path/to/teacher/model_99.pt
```

For the RSSM alternative, use `--task Proof-Vision-RSSM-Parkour-Distill-Go2` with a newly trained tanh-bounded teacher checkpoint. It reuses `z_rl.modules.RSSM` from `/home/syw/.gitrepos/z_rl_main`: `concat(prop_latent, cnn_latent)` feeds the posterior, then `tanh(Linear(concat(deter, stoch)))` produces the teacher-width terrain estimate. Default state widths are 128 deterministic and 32 stochastic; inference uses the posterior mean and no separate action input.

The existing distillation losses train the posterior and recurrence, without KL or prior training. The variance net and gate are retained. This variant still uses BPTT and an internal GRUCell; ONNX export is not yet supported. The RSSM checks above cover CPU distillation, checkpoint restoration and registered agent configuration/model construction, without loading simulation assets.

#### 3. Play

```bash
python scripts/z_rl/play.py --task Proof-Heightmap-Parkour-PPO-Go2 \
  --physics newton_mjwarp --checkpoint /absolute/path/to/model_99.pt --num_envs 2 --viz newton_gl
# Replace --viz newton_gl with --viz viser for the Isaac Lab browser viewer.
```

<!-- `--viz viser` includes virtual-obstacle markers. LocoLab's separate `--viser` viewer is also available, but its simplified scene has different debug drawing support. `--video` records through the selected capture-capable visualizer (Newton GL by default). -->

<!-- Bounded sensor/marker checks use two environments on slope/climb terrain, validate finite observations and rewards, and exercise a partial reset: -->

<!-- ```bash -->
<!-- "$PROOF_PYTHON" scripts/smoke_runtime.py --physics newton_mjwarp --viz newton_gl --steps 100 -->
<!-- "$PROOF_PYTHON" scripts/smoke_runtime.py --physics newton_mjwarp --viz viser --steps 100 --hold 60 -->
<!-- ``` -->

### 📖 Citation

If you find this project useful, please consider citing:

```bibtex
@article{wang2026proof,
    title={PROOF: Perceptive Robustness via Out-of-Distribution Fallback for Legged Locomotion},
    author={Wang, Siyuan and Zhu, Dongjie and Lu, Jinxuan and Xu, Wenjun and Wang, Jiankun},
    booktitle={Conference on Robot Learning},
    year={2026}
}
```

### 📄 License

This project is licensed under the Apache-2.0 License.


### Acknowledgement

- `IsaacLab`: xxx

- `rsl_rl`: xxx

- `InstinctLab`: xxx

