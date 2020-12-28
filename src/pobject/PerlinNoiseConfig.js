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
    }
    return PerlinNoiseConfig
})