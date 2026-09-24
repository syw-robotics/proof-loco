<h1 align="center">PROOF: Perceptive Robustness via Out-of-Distribution Fallback for Legged Locomotion</h1>

<p align="center"><b>Conference on Robot Learning (CoRL) 2026</b></p>

<div align="center">

[[Website]](https://syw-robotics.github.io/proof-loco/)
[[arXiv]](https://arxiv.org/abs/2606.28476)
[[Online Demo]](https://syw-robotics.github.io/proof-loco/#interactive-demo)

<img src="./assets/sustech-tsinghua-hkustgz-pcl.png" height="60"/>

<br>

[![IsaacSim](https://img.shields.io/badge/IsaacSim-5.1.0-b.svg)](https://docs.isaacsim.omniverse.nvidia.com/) [![Python](https://img.shields.io/badge/python-3.11-blue.svg)](https://docs.python.org/3/whatsnew/3.12.html) [![Linux platform](https://img.shields.io/badge/Platform-linux--64-orange.svg)](https://releases.ubuntu.com/22.04/) [![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-yellow.svg)](LICENSE)


<br>
</div>

Teaser

> **PROOF** blablabla

### Description

This is a re-implementation with with:

- [LocoLab](https://github.com/syw-robotics/LocoLab): comprehensive manager based rl env for locomotion
- [z_rl](https://github.com/syw-robotics/z_rl): modular rl code, built on [rsl_rl](https://github.com/leggedrobotics/rsl_rl)

New features includes: aaa, bbb, ccc

<!-- ### Status -->
<!-- - [ ] Training code (https://github.com/syw-robotics/z_rl) (heightmap teacher + depth vision student) -->
<!--      -->
<!--  -->
<!-- - [ ] Sim-to-sim and sim-to-real deployment -->


### ⚙️ Installation

先安装IsaacLab，然后LocoLab，然后:
Use the Python interpreter that already has LocoLab and Isaac Lab:

```bash
python -m pip install -e source/proof_parkour
```

#### Registered tasks

- `Naive-Heightmap-Parkour-PPO-Go2`: group-MLP actor that reads the height scan directly
- `Proof-Heightmap-Parkour-PPO-Go2`: naive GroupMLP heightmap actor, with `depth_corrupt` gating the heightmap latent, plus linear-velocity supervision
- `Naive-Vision-Parkour-Distill-Go2`: depth CNN student distilled from the naive heightmap actor, initialized from that actor's prop encoder and head
- `Proof-Vision-Parkour-Distill-Go2`: depth student distilled from the PROOF heightmap actor, with a variance net and a hysteresis gate on the heightmap latent

Each task also registers a `-Play` variant and publishes a `z_rl_cfg_entry_point`.

#### Verify

```bash
python scripts/list_envs.py
```


### 🚀 Training

#### 1. PROOF Heightmap Teacher Policy

```bash
python scripts/z_rl/train.py
```


#### 2. PROOF Vision Student Policy

```bash
python scripts/z_rl/train.py
```


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

