import config from "./config.js"

function integerSteps(name, high, low) {
    const steps = high / low
    if (!Number.isFinite(low) || low <= 0 || !Number.isInteger(steps) || steps < 1) {
        throw new Error(`${name}: ${high} Hz must be a positive integer multiple of ${low} Hz`)
    }
    return steps
}

function merge(target, source) {
    for (const [key, value] of Object.entries(source)) {
        if (value && typeof value === "object" && !Array.isArray(value)) {
            target[key] = merge(target[key] ?? {}, value)
        } else {
            target[key] = value
        }
    }
    return target
}

function quatFromRpyDegrees(rpy) {
    const [roll, pitch, yaw] = rpy.map(angle => angle * Math.PI / 360)
    const cr = Math.cos(roll), sr = Math.sin(roll)
    const cp = Math.cos(pitch), sp = Math.sin(pitch)
    const cy = Math.cos(yaw), sy = Math.sin(yaw)
    return [cr * cp * cy + sr * sp * sy, sr * cp * cy - cr * sp * sy,
        cr * sp * cy + sr * cp * sy, cr * cp * sy - sr * sp * cy]
}

export function applyRuntimeConfig(manifest, settings) {
    const { mujoco, policy, depth_camera: camera, observation } = settings
    if (!Number.isFinite(mujoco.hz) || mujoco.hz <= 0) throw new Error("mujoco.hz must be positive")
    const substeps = integerSteps("Policy rate", mujoco.hz, policy.hz)
    const cameraSteps = integerSteps("Camera rate", mujoco.hz, camera.hz)
    Object.assign(manifest.timing, {
        simulationHz: mujoco.hz,
        declaredPhysicsDt: 1 / mujoco.hz,
        effectivePhysicsDt: 1 / mujoco.hz,
        declaredDecimation: substeps,
        effectiveSubsteps: substeps,
        policyStepDt: 1 / policy.hz,
        cameraUpdateRate: camera.hz,
        cameraIntervalSteps: cameraSteps,
    })
    Object.assign(manifest.policy, {
        actorUrl: policy.actor_url,
        encoderUrl: policy.encoder_url,
        rawActionClip: policy.action_clip,
        targetQClip: policy.target_q_clip,
        obsPrimeOnReset: observation.prime_on_reset,
        obsUseScaledPrevAction: observation.use_scaled_prev_action,
    })
    manifest.policy.gate.decimation = policy.gateDecimation
    merge(manifest.camera, {
        name: camera.name,
        update_rate: camera.hz,
        transform: {
            position: camera.position,
            rpy: camera.rpy,
            degrees: true,
            quaternion: quatFromRpyDegrees(camera.rpy),
        },
        intrinsics: camera.intrinsics,
        preprocessing: camera.preprocessing,
        outputHeight: camera.output_height,
        outputWidth: camera.output_width,
    })
    merge(manifest.corruption, settings.corruption)

    if (observation.concat_mode !== "term_major") throw new Error("Only term_major observations are supported")
    manifest.observation.concatMode = observation.concat_mode
    // Keep config order and derive vector sizes instead of editing them separately.
    const terms = manifest.observation.observations
    manifest.observation.observations = observation.terms.map(spec => {
        const type = spec.type === "depth_image" ? "depth" : spec.type
        const term = terms.find(term => term.type === type)
        if (!term) throw new Error(`Unknown observation term: ${spec.type}`)
        const { history_skip_frames, ...values } = spec
        Object.assign(term, values, { type })
        if (type === "depth") {
            Object.assign(term.params, {
                height: camera.output_height,
                width: camera.output_width,
                history_skip_frames,
            })
            term.frameSize = camera.output_height * camera.output_width
            manifest.observation.depth = term
        }
        term.vectorSize = (term.baseDim ?? term.frameSize) * term.history_len
        return term
    })
    manifest.observation.propSize = manifest.observation.observations
        .filter(term => term.type !== "depth")
        .reduce((size, term) => size + term.vectorSize, 0)
    return manifest
}

export async function loadManifest() {
    const response = await fetch(new URL("src/manifest.json", document.baseURI))
    if (!response.ok) throw new Error(`Manifest request failed: HTTP ${response.status}`)
    const manifest = await response.json()
    if (manifest.schemaVersion !== 1) throw new Error(`Unsupported manifest schema: ${manifest.schemaVersion}`)
    return applyRuntimeConfig(manifest, config)
}

export function configureModel(modelFiles, manifest) {
    const { name, transform, intrinsics } = manifest.camera
    const dt = String(Math.round(manifest.timing.effectivePhysicsDt * 1e9) / 1e9)
    let xml = new TextDecoder().decode(modelFiles.get("model.xml"))
    xml = xml.replace(/timestep="[^"]+"/, `timestep="${dt}"`)
    xml = xml.replace(/<camera\b[^>]*\/>/g, tag => {
        if (!tag.includes(`name="${name}"`)) return tag
        return tag.replace(/pos="[^"]*"/, `pos="${transform.position.join(" ")}"`)
            .replace(/quat="[^"]*"/, `quat="${transform.quaternion.join(" ")}"`)
            .replace(/fovy="[^"]*"/, `fovy="${intrinsics.fovy}"`)
    })
    modelFiles.set("model.xml", new TextEncoder().encode(xml))
}
