define(function () {

    class Action {

        constructor() {
            if (this.constructor === Action) {
                throw new TypeError('Abstract class Action cannot be instantiated directly')
            }
        }

        /**
         * Execute actions.
         */
        static run(...params) {
            throw new TypeError('"run" method must be implemented')
        }

        /**
         * Stop actions.
         */
        static stop(...params) { }

    }

    return Action

})