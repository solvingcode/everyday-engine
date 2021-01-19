define(function () {

    /**
     * @class {Runner}
     * @abstract
     */
    class Runner {

        constructor() {
            if (this.constructor === Runner) {
                throw new TypeError('Abstract class Runner cannot be instantiated directly')
            }
        }

        /**
         * @abstract
         * @param {Window} window
         * @return {boolean}
         */
        isHandle(window){
            throw new TypeError('"Runner.isHandle" method must be implemented')
        }

        /**
         * @abstract
         * Execute actions.
         */
        execute(...params) {
            throw new TypeError('"Runner.execute" method must be implemented')
        }

        static get() {
            if (!this.instance) {
                this.instance = new this()
            }
            return this.instance
        }

    }

    return Runner

})