import {
    createMujoco, mujocoWasmUrl, loadAssets, Simulation, Policy,
    Renderer, DepthCamera, Controller, GatePlot, corruptionNames,
} from "./assets/index-CyBGSuy8.js"
import { loadManifest, configureModel } from "./runtime-config.js"

const element = id => document.getElementById(id)
const motionKeys = new Set(["w", "a", "s", "d", "q", "e"])

function showProgress(message, percent, detail = "") {
    window.__go2BootStage = { message, percent, detail }
    element("bootMessage").textContent = message
    element("bootProgress").style.width = `${Math.max(3, Math.min(100, percent))}%`
    element("bootDetail").textContent = detail
}

function showError(error) {
    console.error(error)
    const boot = element("boot")
    boot.classList.add("error")
    boot.style.opacity = "1"
    boot.style.display = "grid"
    element("bootMessage").textContent = "Demo failed to start"
    element("bootDetail").textContent = error?.stack || String(error)
    window.__go2BootError = error?.stack || String(error)
}

function drawDepth(camera) {
    const canvas = element("depth")
    canvas.width = camera.outputWidth
    canvas.height = camera.outputHeight
    const context = canvas.getContext("2d", { alpha: false })
    const image = context.createImageData(canvas.width, canvas.height)
    camera.frame.forEach((value, index) => {
        const shade = Math.round(20 + Math.max(0, Math.min(1, value)) * 225)
        image.data.set([shade, shade, shade, 255], index * 4)
    })
    context.putImageData(image, 0, 0)
}

async function main() {
    showProgress("Reading deployment manifest", 5)
    const manifest = await loadManifest()
    showProgress("Loading policy and MuJoCo model", 8, `${manifest.robot.name} / ${manifest.robot.terrain}`)
    let loadedNetworks = 0
    const [assets, policy] = await Promise.all([
        loadAssets(() => createMujoco({ locateFile: file => file.endsWith(".wasm") ? mujocoWasmUrl : file }),
            manifest, ({ completed, totalFiles, label }) => {
                showProgress("Loading simulation", 8 + completed / totalFiles * 55, `${completed}/${totalFiles}  ${label}`)
            }),
        Policy.create(manifest, name => {
            showProgress("Loading policy networks", 15 + ++loadedNetworks * 8, name)
        }),
    ])
    configureModel(assets.modelFiles, manifest)
    showProgress("Compiling MuJoCo model", 66, "Go2 + parkour terrain")
    const sim = new Simulation(assets, manifest)
    showProgress("Building robot renderer", 72, "Parsing original visual meshes")
    const renderer = new Renderer(element("scene"), sim)
    const meshCount = renderer.addRobotMeshes(manifest, (completed, total, name) => {
        showProgress("Building robot renderer", 72 + completed / total * 18, `${completed}/${total}  ${name}`)
    })
    if (meshCount === 0) throw new Error("No Go2 visual meshes were attached to the scene")
    showProgress("Starting perception pipeline", 92, "MuJoCo depth camera + recurrent policy")
    const depthCamera = new DepthCamera(sim, renderer, manifest.camera, manifest.corruption)
    const controller = new Controller(sim, depthCamera, policy, manifest)
    const gatePlot = new GatePlot(element("gatePlot"), element("gateScore"), {
        ...manifest.policy.gatePlot, policyStepDt: manifest.timing.policyStepDt,
    })
    function setGatePlot(enabled) {
        element("gatePlotToggle").checked = enabled
        element("gateView").classList.toggle("enabled", enabled)
        gatePlot.setEnabled(enabled)
    }
    element("gatePlotToggle").addEventListener("change", event => setGatePlot(event.currentTarget.checked))
    setGatePlot(manifest.policy.gatePlot.enabled)
    drawDepth(depthCamera)

    const pressedKeys = new Set()
    const command = new Float32Array(3)
    const commandRange = manifest.observation.observations.find(term => term.type === "command").command_range
    const policyDt = manifest.timing.policyStepDt
    let spawn = manifest.spawnPoints.options.find(point => point.id === manifest.spawnPoints.default)
    let paused = false
    let resetRequested = false
    let stepping = false
    let failed = false
    let accumulator = 0
    let lastFrame = performance.now()
    let lastCommandUpdate = lastFrame
    let lastActivity = 0
    let sleeping = false
    let visible = window.parent === window

    function updateSpawn() {
        document.querySelectorAll("[data-spawn]").forEach(button => {
            const active = button.dataset.spawn === spawn.id
            button.classList.toggle("active", active)
            button.setAttribute("aria-pressed", String(active))
        })
    }
    for (const point of manifest.spawnPoints.options) {
        const option = document.createElement("div")
        option.className = "spawn-option"
        const button = document.createElement("button")
        button.type = "button"
        button.dataset.spawn = point.id
        button.textContent = point.label
        button.addEventListener("click", () => {
            spawn = point
            resetRequested = true
            updateSpawn()
        })
        const description = document.createElement("small")
        description.textContent = point.description.replace(/\s*\|\s*/g, "\n")
        option.append(button, description)
        element("spawnOptions").append(option)
    }
    updateSpawn()

    function updateCommand() {
        for (const [index, [positive, negative]] of [["w", "s"], ["a", "d"], ["q", "e"]].entries()) {
            command[index] = pressedKeys.has(positive) === pressedKeys.has(negative) ? 0
                : pressedKeys.has(positive) ? commandRange[index][1] : commandRange[index][0]
        }
        document.querySelectorAll("[data-key]").forEach(button => {
            button.classList.toggle("active", pressedKeys.has(button.dataset.key))
        })
    }
    function setPaused(value) {
        paused = value
        element("pauseIcon").innerHTML = paused ? "&#9654;" : "&#10074;&#10074;"
        const label = paused ? "Resume simulation" : "Pause simulation"
        element("pauseButton").title = label
        element("pauseButton").setAttribute("aria-label", label)
    }
    function recordActivity() {
        lastActivity = performance.now()
    }
    function setSleeping(value) {
        sleeping = value
        element("sleep").hidden = !value
        if (window.parent !== window) {
            window.parent.postMessage({ type: "unitree-go2-demo:activity", state: value ? "sleeping" : "running" }, "*")
        }
        setPaused(value)
    }
    function updateCorruption() {
        const mode = controller.corruptionMode
        const enabled = mode !== "off"
        const name = corruptionNames[mode] ?? mode
        const exposure = manifest.corruption.training_exposure?.[mode] ?? "unknown"
        const labels = { seen: "Seen in training", unseen: "Unseen in training", unknown: "Training status unknown" }
        const label = labels[exposure] ?? exposure
        element("corruptionButton").classList.toggle("active", enabled)
        element("corruptionButton").setAttribute("aria-pressed", String(enabled))
        element("corruptionButton").title = enabled ? `Depth corruption: ${name} (${label})` : "Toggle random depth corruption"
        element("corruptionName").textContent = enabled ? name : "Apply visual corruption"
        element("corruptionExposure").hidden = !enabled
        element("corruptionExposure").dataset.exposure = enabled ? exposure : ""
        element("corruptionExposureText").textContent = enabled ? label : ""
    }
    function toggleCorruption() {
        controller.toggleCorruption()
        updateCorruption()
    }

    window.addEventListener("pointerdown", recordActivity)
    window.addEventListener("touchstart", recordActivity, { passive: true })
    window.addEventListener("keydown", event => {
        recordActivity()
        const key = event.key.toLowerCase()
        if (motionKeys.has(key)) {
            event.preventDefault()
            pressedKeys.add(key)
            updateCommand()
        } else if (!event.repeat && ["p", " ", "r"].includes(key)) {
            event.preventDefault()
            if (key === "p") toggleCorruption()
            if (key === " ") setPaused(!paused)
            if (key === "r") resetRequested = true
        }
    })
    window.addEventListener("keyup", event => {
        const key = event.key.toLowerCase()
        if (!motionKeys.has(key)) return
        event.preventDefault()
        pressedKeys.delete(key)
        updateCommand()
    })
    window.addEventListener("blur", () => {
        pressedKeys.clear()
        updateCommand()
    })
    window.addEventListener("message", event => {
        if (event.data?.type !== "unitree-go2-demo:visibility" || event.source !== window.parent) return
        visible = !!event.data.visible
        if (!visible) setPaused(true)
        else if (!sleeping) {
            recordActivity()
            setPaused(false)
        }
    })
    for (const button of document.querySelectorAll("[data-key]")) {
        const key = button.dataset.key
        const release = event => {
            event.preventDefault()
            pressedKeys.delete(key)
            updateCommand()
        }
        button.addEventListener("pointerdown", event => {
            event.preventDefault()
            button.setPointerCapture(event.pointerId)
            pressedKeys.add(key)
            updateCommand()
        })
        button.addEventListener("pointerup", release)
        button.addEventListener("pointercancel", release)
        button.addEventListener("lostpointercapture", release)
    }
    element("pauseButton").addEventListener("click", () => setPaused(!paused))
    element("resetButton").addEventListener("click", () => { resetRequested = true })
    element("corruptionButton").addEventListener("click", toggleCorruption)

    function showCommand() {
        for (const [index, id] of ["commandVx", "commandVy", "commandWz"].entries()) {
            const value = controller.command[index]
            element(id).textContent = `${value >= 0 ? "+" : ""}${value.toFixed(2)}`
        }
    }
    async function step() {
        if (resetRequested) {
            resetRequested = false
            controller.reset(spawn)
            updateCorruption()
            accumulator = 0
            return
        }
        await controller.tick(command)
        drawDepth(depthCamera)
    }
    async function frame(now) {
        if (failed) return
        requestAnimationFrame(frame)
        if (pressedKeys.size) lastActivity = now
        if (visible && !paused) {
            if (!lastActivity) lastActivity = now
            if (now - lastActivity > 10000) setSleeping(true)
        }
        if (sleeping && visible && now - lastActivity < 10000) setSleeping(false)
        const elapsed = Math.min(0.1, Math.max(0, (now - lastFrame) / 1000))
        lastFrame = now
        accumulator = paused ? 0 : accumulator + elapsed
        if (!stepping && (!paused || resetRequested)) {
            stepping = true
            try {
                let steps = 0
                while (accumulator >= policyDt && steps < 2) {
                    accumulator -= policyDt
                    await step()
                    steps++
                }
                if (resetRequested && paused) await step()
                if (accumulator > policyDt * 4) accumulator = 0
            } catch (error) {
                failed = true
                showError(error)
            } finally {
                stepping = false
            }
        }
        renderer.render(true)
        gatePlot.update(controller.ticks, controller.gateScore)
        gatePlot.draw(now)
        if (now - lastCommandUpdate > 300) {
            showCommand()
            lastCommandUpdate = now
        }
    }

    updateCorruption()
    showCommand()
    showProgress("Ready", 100, `${meshCount} visual geoms / ${manifest.observation.propSize}+depth observations`)
    await new Promise(resolve => setTimeout(resolve, 180))
    element("boot").style.opacity = "0"
    setTimeout(() => { element("boot").style.display = "none" }, 320)
    window.__go2Demo = { manifest, sim, policy, depthCamera, controller, renderer, gatePlot }
    window.parent.postMessage({ type: "unitree-go2-demo:ready" }, "*")
    requestAnimationFrame(frame)
}

main().catch(showError)
