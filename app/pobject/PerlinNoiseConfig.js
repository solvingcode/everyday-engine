define(function () {
    /**
     * @class {PerlinNoiseConfig}
     */
    class PerlinNoiseConfig {
        constructor() {
            this.seed = null
            this.octaves = null
            this.amplitude = null
            this.persistence = null
            this.smoothness = null
        }

        /**
         * @param {number} value
         */
        setSeed(value){
            this.seed = value
        }

        /**
         * @returns {number}
         */
        getSeed(){
            return this.seed
        }

        /**
         * @param {number} value
         */
        setOctaves(value){
            this.octaves = value
        }

        /**
         * @returns {number}
         */
        getOctaves(){
            return this.octaves
        }

        /**
         * @param {number} value
         */
        setAmplitude(value){
            this.amplitude = value
        }

        /**
         * @returns {number}
         */
        getAmplitude(){
            return this.amplitude
        }

        /**
         * @param {number} value
         */
        setPersistence(value){
            this.persistence = value
        }

        /**
         * @returns {number}
         */
        getPersistence(){
            return this.persistence
        }

        /**
         * @param {number} value
         */
        setSmoothness(value){
            this.smoothness = value
        }

        /**
         * @returns {number}
         */
        getSmoothness(){
            return this.smoothness
        }
    }
    export default PerlinNoiseConfig
})