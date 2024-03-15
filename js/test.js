(async function iife() {
    // This is the time delay after which the "run" button is "clicked"; Change it as per your need!
    var UNSUBSCRIBE_DELAY_TIME = 2000

    /**
    * Delay runner. Wraps `setTimeout` so it can be `await`ed on.
    * @param {Function} fn
    * @param {number} delay
    */
    var runAfterDelay = (fn, delay) => new Promise((resolve, reject) => {

        setTimeout(() => {
            fn()
            resolve()
        }, delay)

    })

    // Get the channel list; this can be considered a row in the page.

    var channels = Array.from(document.getElementsByTagName(`ytd-channel-renderer`))

    console.log(`${channels.length} channels found.`)

    var ctr = 0

    for (const channel of channels) {
        // Get the subscribe button and trigger a "click"
        channel.querySelector(`[aria-label^='Unsubscribe from']`).click()

        await runAfterDelay(() => {
            // Get the dialog container...
            document.getElementsByTagName(`yt-confirm-dialog-renderer`)[0]
                .querySelector(`[aria-label^='Unsubscribe']`).click()

            console.log(`Unsubsribed ${ctr + 1}/${channels.length}`)

            ctr++

        }, UNSUBSCRIBE_DELAY_TIME)

    }

})()
