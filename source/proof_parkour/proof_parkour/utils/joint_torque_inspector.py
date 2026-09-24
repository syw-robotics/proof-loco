"""Print applied joint-torque stats while playing."""

from __future__ import annotations

import torch


class _Stats:
    def __init__(self, num_joints: int, device: torch.device):
        self.count = 0
        self.sum_abs = torch.zeros(num_joints, device=device)
        self.max_abs = torch.zeros(num_joints, device=device)
        self.exceed = torch.zeros(num_joints, device=device)

    def add(self, abs_torque: torch.Tensor, threshold: float) -> None:
        self.sum_abs += abs_torque.sum(dim=0)
        self.max_abs = torch.maximum(self.max_abs, abs_torque.max(dim=0).values)
        self.exceed += (abs_torque >= threshold).sum(dim=0)
        self.count += int(abs_torque.shape[0])


class JointTorqueInspector:
    """Print mean and max absolute joint torque, and flag samples past a threshold."""

    def __init__(self, robot, threshold: float, report_interval_s: float = 5.0):
        self._robot = robot
        self._threshold = float(threshold)
        self._interval_s = float(report_interval_s)
        self._names = [str(name) for name in robot.joint_names]
        self._session: _Stats | None = None
        self._window: _Stats | None = None
        self._window_time = 0.0
        self._final_reported = False

    @classmethod
    def from_env(cls, env, threshold: float, report_interval_s: float = 5.0) -> JointTorqueInspector | None:
        """Build an inspector for ``env``'s ``robot`` articulation, or disable it."""
        if threshold <= 0.0:
            return None
        base = getattr(env, "unwrapped", env)
        scene = getattr(base, "scene", None)
        robot = None
        if scene is not None:
            try:
                robot = scene["robot"]
            except (KeyError, TypeError):
                robot = None
        if robot is None or not getattr(robot, "joint_names", None):
            print("[WARN] Joint torque inspection skipped: scene has no 'robot' articulation.")
            return None
        print(
            f"[INFO] Joint torque inspection enabled: |τ| threshold={threshold:.1f} N·m, "
            f"report every {report_interval_s:.0f}s."
        )
        return cls(robot, threshold, report_interval_s)

    def update(self, dt: float) -> None:
        """Record the absolute torque written by the latest physics step."""
        applied = getattr(self._robot.data, "applied_torque", None)
        if applied is None:
            return
        abs_torque = applied.abs()
        if self._session is None or self._window is None:
            num_joints = abs_torque.shape[-1]
            if len(self._names) != num_joints:
                self._names = [f"joint_{index}" for index in range(num_joints)]
            self._session = _Stats(num_joints, abs_torque.device)
            self._window = _Stats(num_joints, abs_torque.device)
        self._session.add(abs_torque, self._threshold)
        self._window.add(abs_torque, self._threshold)
        self._window_time += dt
        if self._window_time >= self._interval_s and self._window.count > 0:
            self._print(self._window, f"last {self._window_time:.0f}s")
            self._window = _Stats(abs_torque.shape[-1], abs_torque.device)
            self._window_time = 0.0

    def report_final(self) -> None:
        """Print the cumulative stats once. Safe to call if inspection never ran."""
        if self._final_reported:
            return
        self._final_reported = True
        if self._session is None or self._session.count == 0:
            print("[joint torque] no applied-torque samples were recorded.")
            return
        self._print(self._session, "session")

    def _print(self, stats: _Stats, label: str) -> None:
        count = max(stats.count, 1)
        mean = (stats.sum_abs / count).detach().cpu().tolist()
        max_abs = stats.max_abs.detach().cpu().tolist()
        exceed = stats.exceed.detach().cpu().tolist()
        print(f"[joint torque] {label} | |τ| >= {self._threshold:.1f} N·m", flush=True)
        for name, joint_mean, joint_max, joint_exceed in zip(self._names, mean, max_abs, exceed):
            mark = "*" if joint_exceed > 0.0 else " "
            print(
                f"  {mark} {name}: mean {joint_mean:.1f}  max {joint_max:.1f}  "
                f">= {100.0 * joint_exceed / count:.0f}%",
                flush=True,
            )
