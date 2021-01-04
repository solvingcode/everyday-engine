define(function () {
    /**
     * Vector class.
     * Define a vector coordinate (X, Y)
     */
    class Vector {
        constructor({ x, y, z } = {x: 0, y: 0, z: 0}) {
            this.x = x
            this.y = y
            this.z = z
        }

        /**
         * @param {number} x
         */
        setX(x){
            this.x = x
        }

        /**
         * @return {number}
         */
        getX(){
            return this.x
        }

        /**
         * @param {number} y
         */
        setY(y){
            this.y = y
        }

        /**
         * @return {number}
         */
        getY(){
            return this.y
        }

        /**
         * @param {number} z
         */
        setZ(z){
            this.z = z
        }

        /**
         * @return {number}
         */
        getZ(){
            return this.z
        }

        /**
         * @param {Vector} vectorA
         * @param {Vector} vectorB
         * @return {number}
         */
        static cross(vectorA, vectorB){
            return (vectorA.x * vectorB.y) - (vectorA.y * vectorB.x)
        }

        /**
         * @param {Vector} vectorA
         * @param {Vector} vectorB
         * @return {Vector}
         */
        static add(vectorA, vectorB){
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
        static multiply(vector, value){
            return { x: vector.x * value, y: vector.y * value, z: vector.z * value }
        }

        /**
         * @param {Vector} vector
         * @param {number} value
         * @return {Vector}
         */
        static divide(vector, value){
            return { x: vector.x / value, y: vector.y / value, z: vector.z / value }
        }
    }
    return Vector
})