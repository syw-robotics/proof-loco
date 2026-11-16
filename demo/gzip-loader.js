(function () {
    if (window.__demoGzipLoader) return
    window.__demoGzipLoader = true

    var nativeFetch = window.fetch.bind(window)

    function inputUrl(input) {
        return typeof input === "string" ? input : input && (input.url || input.href)
    }

    function gzipUrl(input) {
        var url = inputUrl(input)
        if (!url || url.indexOf(".gz") !== -1) return null
        if (!/\.obj(\?|#|$)/i.test(url)) return null
        return url.replace(/(\.obj)(\?|#|$)/i, "$1.gz$2")
    }

    function report(label) {
        try {
            if (window.parent && window.parent !== window) {
                window.parent.postMessage({ type: "unitree-go2-demo:progress", label: label }, "*")
            }
        } catch (err) {}
    }

    function formatMb(bytes) {
        return (bytes / 1048576).toFixed(1)
    }

    function inflateResponse(response, label) {
        if (!response.ok || !response.body || typeof DecompressionStream !== "function") return response
        var headers = new Headers(response.headers)
        headers.set("Content-Type", "text/plain")
        headers.delete("Content-Encoding")
        var total = Number(response.headers.get("Content-Length")) || 0
        var loaded = 0
        var progress = new TransformStream({
            transform: function (chunk, controller) {
                loaded += chunk.byteLength
                if (label) {
                    report(total ? label + " " + formatMb(loaded) + " / " + formatMb(total) + " MB" : label)
                }
                controller.enqueue(chunk)
            },
        })
        return new Response(
            response.body.pipeThrough(progress).pipeThrough(new DecompressionStream("gzip")),
            { status: response.status, statusText: response.statusText, headers: headers },
        )
    }

    function fetchMaybeGzip(input, init, label) {
        var rewritten = gzipUrl(input)
        if (!rewritten) return nativeFetch(input, init)
        if (label) report(label)
        return nativeFetch(rewritten, init).then(function (response) {
            if (!response.ok) return nativeFetch(input, init)
            return inflateResponse(response, label)
        })
    }

    window.fetch = function (input, init) {
        var url = inputUrl(input) || ""
        var label = /\.obj(\?|#|$)/i.test(url) ? "Downloading robot mesh" : ""
        return fetchMaybeGzip(input, init, label)
    }

    function watchBootStage() {
        var boot = document.getElementById("boot")
        if (!boot) return
        var update = function () {
            var message = document.getElementById("bootMessage")
            var detail = document.getElementById("bootDetail")
            if (!message) return
            report(detail && detail.textContent ? message.textContent + ": " + detail.textContent : message.textContent)
        }
        new MutationObserver(update).observe(boot, { childList: true, characterData: true, subtree: true })
        update()
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", watchBootStage)
    else watchBootStage()

})()
