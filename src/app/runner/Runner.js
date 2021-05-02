import SystemError from '../exception/type/SystemError.js'

/**
 * Runner is a component responsible for deciding what to do when a application state is defined
 * @class {Runner}
 * @abstract
 */
class Runner {

    constructor() {
        if (this.constructor === Runner) {
            throw new SystemError('Abstract class Runner cannot be instantiated directly')
        }
    }

    /**
     * Define when the runner can be handle by the eventHandler
     * @abstract
     * @param {Window} window
     * @return {boolean}
     */
    isHandle(window) {
        throw new SystemError('"Runner.isHandle" method must be implemented')
    }

    /**
     * @abstract
     * Execute actions.
     */
    execute(...params) {
        throw new SystemError('"Runner.execute" method must be implemented')
    }

    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}

export default Runner