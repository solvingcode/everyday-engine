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
     * @param {number} a
     * @param {number} b
     * @param {number} t
     * @return {number}
     */
    static cosineInterpolate(a, b, t) {
        const c = (1 - Math.cos(t * 3.1415927)) * .5
        return (1. - c) * a + c * b
    }
}

export default Maths