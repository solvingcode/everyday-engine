/**
 * Vector class.
 * Define a vector coordinate (X, Y)
 */
class Vector {
    constructor({x, y, z} = {x: 0, y: 0, z: 0}) {
        this.x = x
        this.y = y
        this.z = z || 0
    }

    /**
     * @param {number} x
     */
    setX(x) {
        this.x = x
    }

    /**
     * @return {number}
     */
    getX() {
        return this.x
    }

    /**
     * @param {number} y
     */
    setY(y) {
        this.y = y
    }

    /**
     * @return {number}
     */
    getY() {
        return this.y
    }

    /**
     * @param {number} z
     */
    setZ(z) {
        this.z = z
    }

    /**
     * @return {number}
     */
    getZ() {
        return this.z
    }

    /**
     * @param {Vector} vector
     * @return {boolean}
     */
    equals(vector){
        return this.x === vector.x &&
            this.y === vector.y &&
            this.z === vector.z
    }

    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {number}
     */
    static cross(vectorA, vectorB) {
        return (vectorA.x * vectorB.y) - (vectorA.y * vectorB.x)
    }

    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {number}
     */
    static dot(vectorA, vectorB) {
        return (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y)
    }

    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {Vector}
     */
    static add(vectorA, vectorB) {
        return {
            x: vectorA.x + vectorB.x,
            y: vectorA.y + vectorB.y,
            z: vectorA.z + vectorB.z
        }
    }

    /**
     * @param {Vector} vector
     * @param {number} value
     * @return {Vector}
     */
    static multiply(vector, value) {
        return new Vector({x: vector.x * value, y: vector.y * value, z: vector.z * value})
    }

    /**
     * @param {Vector} vector
     * @param {number} value
     * @return {Vector}
     */
    static divide(vector, value) {
        return new Vector({x: vector.x / value, y: vector.y / value, z: vector.z / value})
    }

    /**
     * @param {Vector} vector
     * @return {number}
     */
    static length(vector){
        return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2))
    }

    /**
     * @param {Vector} vector
     */
    static normalize(vector){
        return this.divide(vector, this.length(vector))
    }

    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {number}
     */
    static angle(vectorA, vectorB){
        const signedAngleRadian = Math.atan2(vectorB.y, vectorB.x) - Math.atan2(vectorA.y, vectorA.x)
        return signedAngleRadian || 0
    }
}

export default Vector