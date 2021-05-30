import StateManager from '../state/StateManager.js'
import ClientError from './type/ClientError.js'
import SystemError from './type/SystemError.js'

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
        if(!(e instanceof ClientError) && !(e instanceof SystemError)){
            throw e
        }
        console.warn(e)

        try {
            StateManager.get().stopAll()
        } catch (error) {
            StateManager.get().reset()
        }

        //Here Go to the last recovery point
        //....

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