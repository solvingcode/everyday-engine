import Menu from '../layout/Menu.js'
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
        const menu = Menu.get()
        action.reset()
        runners.forEach(runner => {
            const runnerInstance = runner.get()
            if (runnerInstance.isHandle(window)) {
                action.add(runnerInstance, mouse, menu, keyboard)
            }
        })
        action.run()
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