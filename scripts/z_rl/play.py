# Copyright (c) 2022-2026, The Isaac Lab Project Developers (https://github.com/isaac-sim/IsaacLab/blob/main/CONTRIBUTORS.md).
# All rights reserved.
#
# SPDX-License-Identifier: BSD-3-Clause

"""Play project checkpoints with LocoLab's shared Z-RL entry point."""

from locolab.entrypoints.z_rl.play import main
from project_args import add_play_arguments, configure_play, export_onnx, wrap_play_env


if __name__ == "__main__":
    main(
        add_arguments=add_play_arguments, configure=configure_play,
        wrap_env=wrap_play_env, export_onnx=export_onnx,
    )
