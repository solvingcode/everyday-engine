define(function () {

    /**
     * Maths libs
     */
    class Maths {
        /**
         * Generate an uniqu ID
         */
        static generateId(){
            return Date.now() + parseInt(Math.random() * 100000)
        }
    }

    return Maths
})