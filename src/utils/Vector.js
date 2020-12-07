define(function () {
    /**
     * Vector class.
     * Define a vector coordinate (X, Y)
     */
    class Vector {
        constructor({ x, y }) {
            this.x = x
            this.y = y
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
                y: vectorA.y + vectorB.y
            }
        }

        /**
         * @param {Vector} vector
         * @param {number} value
         * @return {Vector}
         */
        static multiply(vector, value){
            return { x: vector.x * value, y: vector.y * value }
        }

        /**
         * @param {Vector} vector
         * @param {number} value
         * @return {Vector}
         */
        static divide(vector, value){
            return { x: vector.x / value, y: vector.y / value }
        }
    }
    return Vector
})