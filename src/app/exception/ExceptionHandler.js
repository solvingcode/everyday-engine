import StateManager from '../state/StateManager.js'
import History from '../core/History.js'

class ExceptionHandler {

    /**
     * @type {ExceptionHandler}
     */
    static instance

    /**
     * @type {Error}
     */
    lastError

    /**
     * @param {Error} e
     */
    handle(e) {
        try {
            StateManager.get().stopAll()
        } catch (error) {
            StateManager.get().reset()
        }
        History.get().restore()
        this.setLastError(e)
    }

    /**
     * @param {Error} error
     */
    setLastError(error){
        this.lastError = error
    }

    /**
     * @return {Error}
     */
    getLastError(){
        return this.lastError
    }

    /**
     * @return {Error}
     */
    popLastError(){
        const lastError = this.getLastError()
        this.setLastError(null)
        return lastError
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