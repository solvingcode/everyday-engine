define(function(){

    /**
     * @class {CameraData}
     */
    class CameraData {

        position
        entityId

        /**
         * @param {string} x
         */
        setPositionX(x) {
            this.position.x = parseFloat(x)
        }

        /**
         * @param {string} y
         */
        setPositionY(y) {
            this.position.y = parseFloat(y)
        }

        /**
         * @param {string} z
         */
        setPositionZ(z) {
            this.position.z = parseFloat(z)
        }

        /**
         * @return {number}
         */
        getPositionX() {
            return this.position.x
        }

        /**
         * @return {number}
         */
        getPositionY() {
            return this.position.y
        }

        /**
         * @return {number}
         */
        getPositionZ() {
            return this.position.z
        }

    }

    return CameraData

})