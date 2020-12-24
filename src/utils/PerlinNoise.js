define(function (require) {

    const Maths = require('./Maths.js')
    const NoiseRandom = require('./NoiseRandom.js')

    /**
     * Generate perlin noise random values
     * @property {number} seed
     * @property {PerlinNoiseConfig} configs
     */
    class PerlinNoise {

        /**
         * @param {PerlinNoiseConfig} configs
         */
        constructor(configs){
            this.configs = configs
        }

        /**
         * @param {number} x
         * @param {number} y
         * @return {number}
         */
        noise(x, y){
            const integerX = Math.floor(x)
            const integerY = Math.floor(y)

            const fractionalX = x - integerX
            const fractionalY = y - integerY

            const a = this.getNoise(integerX, integerY)
            const b = this.getNoise(integerX + 1, integerY)

            const c = this.getNoise(integerX, integerY + 1)
            const d = this.getNoise(integerX + 1, integerY + 1)

            const f = Maths.cosineInterpolate(a, b, fractionalX)
            const g = Maths.cosineInterpolate(c, d, fractionalY)

            return Maths.cosineInterpolate(f, g, fractionalY)
        }

        /**
         * @param {number} x
         * @param {number} y
         * @return {number}
         */
        getNoise(x, y){
            return NoiseRandom.get(this.configs.seed).getNoiseValue(x + y)
        }

        /**
         * @param {number} x
         * @param {number} y
         * @return {number}
         */
        getPerlinNoise(x, y){
            let r = 0
            for (let i = 0; i <= this.configs.octaves; i++) {
                let frequency = Math.pow(2, i)
                let amplitude = Math.pow(this.configs.persistence, i)
                let noise = this.noise(x * frequency / this.configs.smoothness, y * frequency / this.configs.smoothness)
                r += noise * amplitude
            }
            let result = (r / 2 + 1) * this.configs.amplitude - 20
            return result > 0 ? result : 1
        }

    }

    /**
     * @typedef {{seed: number, octaves: number, amplitude: number, persistence: number, smoothness: number}} PerlinNoiseConfig
     */

    return PerlinNoise
})