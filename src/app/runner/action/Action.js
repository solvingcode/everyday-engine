/**
 * @abstract
 */
class Action {

    constructor() {
        if (this.constructor === Action) {
            throw new TypeError('Abstract class Action cannot be instantiated directly')
        }
    }

    /**
     * Execute actions.
     * If return true, then the stop state will be triggered automatically, otherwise,
     * the stop should be executed manually
     * @abstract
     * @param {any} params
     * @return {boolean}
     */
    static run(...params) {
        throw new TypeError('"run" method must be implemented')
    }

    /**
     * Stop actions.
     * If return true, then the end state will be triggered automatically, otherwise,
     * the end state should be executed manually
     * @param {any} params
     * @return {boolean}
     */
    static stop(...params) {
        return true
    }

    /**
     * Should start the action
     * @param {string} type
     * @param {StateManager} stateManager
     *
     * @return {boolean}
     */
    static shouldStart(type, stateManager) {
        return stateManager.isStart(type)
    }

    /**
     * Should progress the action
     * @param {string} type
     * @param {StateManager} stateManager
     *
     * @return {boolean}
     */
    static shouldProgress(type, stateManager) {
        return stateManager.isProgress(type)
    }

    /**
     * Should stop the action
     * @param {string} type
     * @param {StateManager} stateManager
     *
     * @return {boolean}
     */
    static shouldStop(type, stateManager) {
        return stateManager.isStop(type)
    }

    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}

export default Action