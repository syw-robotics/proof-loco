"""Algorithm extensions.

The heightmap teacher uses ``EncoderEstimationPPO`` from ``z_rl``. Its loss fits the
leading actor latent entries to the privileged linear velocity.
The naive depth student uses ``NaiveStudentDistillation``. The PROOF depth student uses
``ProofGateDistillation``. Loading an RL checkpoint copies the teacher head and prop encoder
into the student. Warmup keeps that prop encoder and the head fixed. ``frozen_prop_encoder``
keeps the prop encoder fixed after warmup. Both default to off.
The naive student outputs the action directly and fits it with MSE.
The PROOF student fits ``mu`` to the masked heightmap latent, trains a variance net with
Gaussian NLL, and trains the gate with BCE.
"""
