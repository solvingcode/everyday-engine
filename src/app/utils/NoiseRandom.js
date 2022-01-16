/**
 * Generate noise random using given seed
 * @property {number} seed
 */
class NoiseRandom {

    /**
     * @param {number} seed
     */
    constructor(seed) {
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
        result = (result * (result * result * BigInt(15731) + BigInt(789221)) + BigInt(1376312589))
        result = parseInt(result.toString(2).slice(-31), 2)
        return 1.0 - result / 1073741824
    }

    /**
     * @param {number} seed
     * @return {NoiseRandom}
     */
    static get(seed) {
        return new NoiseRandom(seed)
    }
}

export default NoiseRandom