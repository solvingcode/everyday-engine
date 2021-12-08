import ExceptionHandler from '../exception/ExceptionHandler.js'

/**
 * Define the action to be executed when an event is triggered
 */
class Action {

    constructor() {
        this.queue = []
        this.exceptionHandler = ExceptionHandler.get()
    }

    static get() {
        if (!Action.instance) {
            Action.instance = new Action()
        }
        return Action.instance
    }

    /**
     * Add action to the queue.
     * @param {Object} object the object must define the method "execute"
     * @param {...any} args
     */
    add(object, ...args) {
        this.queue.push({object, args})
    }

    /**
     * Run all actions. stop the execution if the "execute" return true.
     */
    run() {
        for (const iQueue in this.queue) {
            if (this.queue.hasOwnProperty(iQueue)) {
                try {
                    const action = this.queue[iQueue]
                    if (action.object.run(...action.args)) {
                        break
                    }
                } catch (e) {
                    this.exceptionHandler.handle(e)
                }
            }
        }
    }

    reset() {
        this.queue = []
    }

}

Action.instance = null

export default Action