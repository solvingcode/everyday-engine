import Action from './Action.js'

/**
 * Handle global events triggered by the user (click , mouse move)
 * and define related action (Runner) to be executed
 */
class RunnerHandler {

    /**
     * @type {number}
     */
    lastTime

    /**
     * Apply actions when event is triggered onto the window (Mouse and Keyboard events, ...)
     * @param {Class[]} runners
     */
    handle(runners) {
        const action = Action.get()
        const deltaTime = this.updateDeltaTime()
        action.reset()
        runners.forEach(runner => {
            const runnerInstance = runner.get()
            action.add(runnerInstance, deltaTime)
        })
        action.run()
    }

    /**
     * @return {number}
     */
    updateDeltaTime(){
        const deltaTime = this.lastTime ? (Date.now() - this.lastTime) / 1000 : 0
        this.lastTime = Date.now()
        return deltaTime
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