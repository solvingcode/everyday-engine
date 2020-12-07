define(function () {

    /**
     * Generate noise random using given seed
     * @property {number} seed
     */
    class NoiseRandom {

        /**
         * @param {number} seed
         */
        constructor(seed){
            this.seed = seed
        }

        /**
         * Return random value between 0 and 1
         * @param {number} value
         * @return {number}
         */
        getNoiseValue(value) {
            value += this.seed
            let result = BigInt((value << 13) ^ value)
            result = (result * (result * result * 15731n + 789221n) + 1376312589n)
            result = parseInt(result.toString(2).slice(-31), 2)
            return 1.0 - result / 1073741824
        }

        /**
         * @param {number} seed
         * @return {NoiseRandom}
         */
        static get(seed){
            return new NoiseRandom(seed)
        }
    }

    return NoiseRandom
})