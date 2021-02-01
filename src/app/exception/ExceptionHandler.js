import StateManager from '../state/StateManager.js'

class ExceptionHandler {

    /**
     * @type {ExceptionHandler}
     */
    static instance

    /**
     * @param {Error} e
     */
    handle(e) {
        try {
            StateManager.get().stopAll()
        } catch (e) {
            StateManager.get().reset()
        }
        if (e instanceof TypeError) {
            throw e
        }
        alert(e.message)
    }

    /**
     * @return {ExceptionHandler}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}

export default ExceptionHandler