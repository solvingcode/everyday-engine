define(function () {

    class Runner {

        constructor() {
            if (this.constructor === Runner) {
                throw new TypeError('Abstract class Runner cannot be instantiated directly')
            }
        }

        /**
         * Execute actions.
         */
        execute(...params) {
            throw new TypeError('"execute" method must be implemented')
        }

    }

    return Runner

})