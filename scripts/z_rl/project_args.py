"""Project arguments and playback hooks for LocoLab's shared Z-RL entry points."""


def add_train_arguments(parser):
    parser.add_argument("--pretrain_terrain", action="store_true", help="Use the rough pretraining terrains.")


def configure_train(args, env_cfg, agent_cfg):
    if args.pretrain_terrain and not hasattr(env_cfg, "use_pretrain_terrain"):
        raise ValueError(f"Task '{args.task}' does not support --pretrain_terrain.")
    if hasattr(env_cfg, "use_pretrain_terrain"):
        env_cfg.use_pretrain_terrain(args.pretrain_terrain)
        print(f"[INFO] Terrain: {'pretrain' if args.pretrain_terrain else 'parkour'}")


def add_play_arguments(parser):
    import argparse

    add_train_arguments(parser)
    parser.add_argument(
        "--real-time", dest="realtime", action="store_true", default=argparse.SUPPRESS,
        help="Alias for --realtime.",
    )
    parser.add_argument(
        "--select_terrain", type=str, nargs="+", default=None,
        help="Play on selected sub-terrains by name.",
    )
    parser.add_argument(
        "--inspect_joint_torque", type=float, nargs="?", const=25.0, default=0.0, metavar="NM",
        help="Print applied joint-torque statistics (default threshold: 25 N·m).",
    )


def configure_play(args, env_cfg, agent_cfg):
    configure_train(args, env_cfg, agent_cfg)
    if hasattr(env_cfg.curriculum, "terrain_levels") and args.select_terrain is not None:
        generator = env_cfg.scene.terrain.terrain_generator
        unknown = [name for name in args.select_terrain if name not in generator.sub_terrains]
        if unknown:
            available = ", ".join(generator.sub_terrains)
            raise ValueError(f"Unknown terrain(s) {unknown}. Available terrains: {available}.")
        selected = list(dict.fromkeys(args.select_terrain))
        generator.sub_terrains = {name: generator.sub_terrains[name] for name in selected}
        print(f"[INFO] Play terrain: {', '.join(selected)}")


def wrap_play_env(args, env):
    if args.inspect_joint_torque <= 0:
        return env
    from proof_parkour.utils.joint_torque_inspector import JointTorqueInspector

    inspector = JointTorqueInspector.from_env(env, args.inspect_joint_torque)
    if inspector is None:
        return env

    class InspectedEnv:
        def __getattr__(self, name):
            return getattr(env, name)

        def step(self, actions):
            result = env.step(actions)
            inspector.update(env.unwrapped.step_dt)
            return result

        def close(self):
            try:
                inspector.report_final()
            finally:
                env.close()

    return InspectedEnv()


def export_onnx(runner, policy, export_model_dir):
    """Retain the project's export-only workflow and model-specific ONNX files."""
    import os

    import torch
    from z_rl.utils.onnx_export import export_to_onnx

    default_device = torch.get_default_device()
    try:
        torch.set_default_device("cpu")
        export_modules = getattr(policy, "onnx_export_modules", None)
        if export_modules is None:
            runner.export_policy_to_onnx(path=export_model_dir, filename="policy.onnx")
        else:
            os.makedirs(export_model_dir, exist_ok=True)
            for filename, module in export_modules():
                module.eval()
                module.to("cpu")
                save_path = os.path.join(export_model_dir, filename)
                export_to_onnx(
                    module,
                    module.get_dummy_inputs(),
                    save_path,
                    export_params=True,
                    opset_version=18,
                    verbose=False,
                    input_names=module.input_names,
                    output_names=module.output_names,
                )
                print(f"[INFO] Exported ONNX model to: {save_path}")
    finally:
        torch.set_default_device(default_device)
