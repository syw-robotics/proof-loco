// 修改后刷新 demo，无需重新构建。
export default {
    // 物理频率必须是策略频率和相机频率的整数倍。
    mujoco: { hz: 500 },

    // 策略网络文件及推理频率；裁剪范围必须与训练一致。
    policy: {
        actor_url: "src/policy/actor.onnx",
        encoder_url: "src/policy/depth_encoder.onnx",
        hz: 50,
        gateDecimation: 1,
        action_clip: null,
        target_q_clip: [-10, 10],
    },

    // 相机安装位置（米）、xyz 欧拉角（度）和图像预处理。
    depth_camera: {
        hz: 20,
        name: "depth_camera",
        position: [0.335, 0.015, 0.088],
        rpy: [60, 0, -90],
        intrinsics: {
            width: 48,
            height: 27,
            fovx: 87,
            fovy: 58,
            render_scale: 2,
            near: 0.1,
            far: 2,
        },
        preprocessing: {
            crop: { top: 2, bottom: 2, left: 2, right: 2 },
            gaussian_blur: { kernel_size: 3, sigma: 1 },
            clip_range: [0.1, 2],
            normalize_mode: "clip_scale",
            fill_invalid: 2,
        },
        // 裁剪后的尺寸，必须与深度编码器一致。
        output_height: 23,
        output_width: 44,
    },

    // 按 P 后，每帧以这个概率施加深度干扰。
    corruption: { frame_probability: 0.8 },

    // 按 terms 顺序拼接；历史帧旧的在前。维度、缩放和裁剪须与策略一致。
    observation: {
        concat_mode: "term_major",
        prime_on_reset: true,
        use_scaled_prev_action: false,
        terms: [
            { type: "base_ang_vel", history_len: 10, scale: 1.0 },
            { type: "projected_gravity", history_len: 10 },
            {
                type: "command",
                history_len: 10,
                // vx、vy、wz 的 [最小值, 最大值]；W/A/Q 取最大值，S/D/E 取最小值。
                command_range: [[-0.5, 1.0], [-0.5, 0.5], [-1.2, 1.2]],
            },
            { type: "joint_pos_rel", history_len: 10 },
            { type: "joint_vel", history_len: 10, scale: 1.0 },
            { type: "prev_action", history_len: 10, clip: [-10, 10] },
            {
                type: "depth_image",
                history_len: 2,
                // 20 Hz 相机隔一帧采样，两帧相隔 0.1 秒。
                history_skip_frames: 2,
            },
        ],
    },
}
