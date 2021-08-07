import Data from './Data.js'

/**
 * @class {CameraData}
 * @extends {Data}
 */
class CameraData extends Data {

    /**
     * @type {Vector}
     */
    position
    /**
     * @type {number}
     */
    cameraUnitId

    /**
     * @param {Vector} position
     */
    setPosition(position) {
        this.position = position
    }

    /**
     * @return {Vector}
     */
    getPosition() {
        return this.position
    }

    /**
     * @param {string|number} x
     */
    setPositionX(x) {
        this.position.x = parseFloat(x)
    }

    /**
     * @param {string|number} y
     */
    setPositionY(y) {
        this.position.y = parseFloat(y)
    }

    /**
     * @param {string|number} z
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

    /**
     * @return {number}
     */
    getCameraUnitId(){
        return this.cameraUnitId
    }

    /**
     * @param {number} id
     */
    setCameraUnitId(id){
        this.cameraUnitId = id
    }

}

export default CameraData