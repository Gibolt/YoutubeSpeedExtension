const playbackContainerName = 'PlayBackRatePanel'
const selector = `.${playbackContainerName}#${playbackContainerName}`

let listenerSet = false
let zoomSet = false

const detectTouch = () => {
    if (listenerSet) return
    const container = document.querySelector(selector)
    if (!container) return

    listenerSet = true
    container.addEventListener('touchstart', (e) => {
        if (!zoomSet) {
            container.style.zoom = '2.5'
            zoomSet = true
        }
        // Prevent double tab to skip while tapping quickly to speed up
        e.stopPropagation();
    })
    timeouts.forEach((timeout) => clearTimeout(timeout))
}

// Try running script every second for 20 seconds or until plugin is found
const timeouts = Array(21).fill().map((_, i) => setTimeout(detectTouch, 1000 * i));
