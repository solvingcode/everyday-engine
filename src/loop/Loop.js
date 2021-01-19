define(function () {

    /**
     * @class {Loop}
     */
    class Loop{

        constructor() {
            this.loop = this.loop.bind(this)
        }

        /**
         * @type {Class[]}
         */
        runners

        /**
         * @return {Class[]}
         */
        getRunners(){
            return this.runners
        }

        loop(){
            throw new TypeError('Loop.loop must be implemented!')
        }

        static get() {
            if (!this.instance) {
                this.instance = new this()
            }
            return this.instance
        }

    }

    return Loop

})