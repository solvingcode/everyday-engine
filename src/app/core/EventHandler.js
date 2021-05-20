import Action from './Action.js'

/**
 * Handle global events triggered by the user (click , mouse move)
 * and define related action (Runner) to be executed
 */
class EventHandler {

    /**
     * Apply actions when event is triggered onto the window (Mouse and Keyboard events, ...)
     * @param {Window} window
     * @param {Class[]} runners
     */
    handle(window, runners) {
        const mouse = window.mouse
        const keyboard = window.keyboard
        const action = Action.get()
        action.reset()
        runners.forEach(runner => {
            const runnerInstance = runner.get()
            action.add(runnerInstance, mouse, keyboard)
        })
        action.run(window)
    }

    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}

EventHandler.instance = null

export default EventHandler