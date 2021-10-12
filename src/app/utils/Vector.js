/**
 * Vector class.
 * Define a vector coordinate (X, Y)
 */
class Vector {
    constructor({x, y, z} = {x: 0, y: 0, z: 0}) {
        this.x = x || 0
        this.y = y || 0
        this.z = z || 0
    }

    /**
     * @param {number|string} x
     */
    setX(x) {
        this.x = parseFloat(x) || 0
    }

    /**
     * @return {number}
     */
    getX() {
        return this.x
    }

    /**
     * @param {number|string} y
     */
    setY(y) {
        this.y = parseFloat(y) || 0
    }

    /**
     * @return {number}
     */
    getY() {
        return this.y
    }

    /**
     * @param {number|string} z
     */
    setZ(z) {
        this.z = parseFloat(z) || 0
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
     * @return {Vector}
     */
    abs(){
        return new Vector({
            x: Math.abs(this.getX()),
            y: Math.abs(this.getY())
        })
    }

    /**
     * @return {Vector}
     */
    static zero(){
        return new Vector({x: 0, y: 0})
    }

    /**
     * @return {Vector}
     */
    static one(){
        return new Vector({x: 1, y: 1})
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
        return new Vector({
            x: vectorA.x + vectorB.x,
            y: vectorA.y + vectorB.y,
            z: vectorA.z + vectorB.z
        })
    }

    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {Vector}
     */
    static subtract(vectorA, vectorB) {
        return new Vector({
            x: vectorA.x - vectorB.x,
            y: vectorA.y - vectorB.y,
            z: vectorA.z - vectorB.z
        })
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
     * @return {Vector}
     */
    static sign(vector){
        return this.linearDivide(vector, this.abs(vector))
    }

    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {Vector}
     */
    static linearMultiply(vectorA, vectorB){
        return new Vector({
            x: vectorA.x * vectorB.x,
            y: vectorA.y * vectorB.y,
            z: vectorA.z * vectorB.z
        })
    }

    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {Vector}
     */
    static linearDivide(vectorA, vectorB){
        return new Vector({
            x: vectorB.x ? vectorA.x / vectorB.x : 0,
            y: vectorB.y ? vectorA.y / vectorB.y : 0,
            z: vectorB.z ? vectorA.z / vectorB.z : 0
        })
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
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {number}
     */
    static distance(vectorA, vectorB){
        return Math.sqrt(Math.pow(vectorB.x - vectorA.x, 2) + Math.pow(vectorB.y - vectorA.y, 2))
    }

    /**
     * @param {Vector} vector
     * @return {Vector}
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

    /**
     * @param {Size} size
     * @return {Vector}
     */
    static fromSize(size){
        return new Vector({
            x: size.getWidth(),
            y: size.getHeight()
        })
    }

    /**
     * @param {Vector} vector
     * @return {Vector}
     */
    static abs(vector){
        return new Vector({
            x: Math.abs(vector.x),
            y: Math.abs(vector.y)
        })
    }
}

export default Vector