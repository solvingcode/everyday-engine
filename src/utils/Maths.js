define(function () {

    /**
     * Maths libs
     */
    class Maths {
        /**
         * Generate an uniqu ID
         * @return {number}
         */
        static generateId() {
            return Date.now() + parseInt(Math.random() * 100000)
        }
        /**
         * Convert degree to randian
         * @param {Number} deg 
         */
        static fromDegree(deg) {
            return deg * Math.PI / 180
        }
        /**
         * Convert radian to degree
         * @param {Number} rad 
         */
        static toDegree(rad) {
            return Math.round((rad * 180 / Math.PI) * 100) / 100
        }
        /**
         * Get random value within an interval
         * @param {Number} min 
         * @param {Number} max 
         */
        static randomInterval(min, max) {
            return Math.random() * (max - min) + min
        }
        /**
         * Get random value
         * @param {Number} seed 
         */
        static getRandomValue(seed) {
            let t = seed
            t = BigInt((t << 13) ^ t)
            t = (t * (t * t * 15731n + 789221n) + 1376312589n)
            t = parseInt(t.toString(2).slice(-31), 2)
            return 1.0 - t / 1073741824
        }
    }

    return Maths
})