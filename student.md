checkpoint 是在学生实验目录 logs/z_rl/parkour_proof_vision_distill 下面按 --load_run 查找的，不会直接读你给的老师绝对路径。先把这个 run 链进去：

mkdir -p logs/z_rl/parkour_proof_vision_distill
ln -sfn /home/syw/.gitrepos/proof-loco/logs/z_rl/parkour_proof_heightmap/2026-10-03_13-34-23_symm_w_muon_layernorm_w_self_colli-flat_ori-track_lin_vel_xy_exp_relaxed_when_parkour_0-resume \
  logs/z_rl/parkour_proof_vision_distill/teacher
然后训练：

python scripts/z_rl/train.py \
  --task Proof-Vision-Parkour-Distill-Go2 \
  --headless \
  --resume \
  --load_run teacher \
  --checkpoint model_7998.pt \
  --run_name proof_student

学生日志会写到 logs/z_rl/parkour_proof_vision_distill/<时间戳>_proof_student。之后从这个学生目录续训时，checkpoint 里已经有 student_state_dict，会同时恢复学生、老师和优化器，不会再按老师权重重新初始化。
