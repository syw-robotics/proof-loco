# Copyright (c) 2022-2026, The Isaac Lab Project Developers (https://github.com/isaac-sim/IsaacLab/blob/main/CONTRIBUTORS.md).
# All rights reserved.
#
# SPDX-License-Identifier: BSD-3-Clause

"""Train project tasks with LocoLab's shared Z-RL entry point."""

from locolab.entrypoints.z_rl.train import main
from project_args import add_train_arguments, configure_train


if __name__ == "__main__":
    main(add_arguments=add_train_arguments, configure=configure_train)
