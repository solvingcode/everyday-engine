import Action from './Action.js'
import Window from './Window.js'

/**
 * Handle global events triggered by the user (click , mouse move)
 * and define related action (Runner) to be executed
 */
class RunnerHandler {

    /**
     * Apply actions when event is triggered onto the window (Mouse and Keyboard events, ...)
     * @param {Class[]} runners
     */
    handle(runners) {
        const action = Action.get()
        const deltaTime = Window.get().getDeltaTime()
        action.reset()
        runners.forEach(runner => {
            const runnerInstance = runner.get()
            action.add(runnerInstance, deltaTime)
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

RunnerHandler.instance = null

export default RunnerHandler