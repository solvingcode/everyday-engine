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
     * Execute actions
     * @abstract
     * @param {any} params
     * @return {boolean}
     */
    static run(...params) {
        throw new TypeError('"run" method must be implemented')
    }

    /**
     * Stop actions
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

}

export default Action