define(function () {

    class Action {

        constructor() {
            if (this.constructor === Action) {
                throw new TypeError('Abstract class Action cannot be instantiated directly')
            }
        }

        /**
         * Execute actions
         * @param {any} params
         */
        static run(...params) {
            throw new TypeError('"run" method must be implemented')
        }

        /**
         * Stop actions.
         */
        static stop() {
            return true
        }

        /**
         * Should start the action
         * @param {string} type
         * @param {StateManager} stateManager
         *
         * @return {boolean}
         */
        static shouldStart(type, stateManager){
            return stateManager.isStart(type)
        }

        /**
         * Should stop the action
         * @param {string} type
         * @param {StateManager} stateManager
         *
         * @return {boolean}
         */
        static shouldStop(type, stateManager){
            return stateManager.isStop(type)
        }

    }

    return Action

})