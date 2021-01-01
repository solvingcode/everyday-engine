define(function(require){

    const Data = require('./Data.js')

    /**
     * @class {CameraData}
     * @extends {Data}
     */
    class CameraData extends Data {

        position
        entityId

        /**
         * @param {Vector} position
         */
        setPosition(position){
            this.position = position
        }

        /**
         * @param {number} entityId
         */
        setEntityId(entityId){
            this.entityId = entityId
        }

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