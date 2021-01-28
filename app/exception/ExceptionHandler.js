define(function (require) {

    import StateManager from '../state/StateManager.js'

    class ExceptionHandler{

        /**
         * @type {ExceptionHandler}
         */
        static instance

        /**
         * @param {Error} e
         */
        handle(e){
            StateManager.get().stopAll()
            if(e instanceof TypeError){
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

})