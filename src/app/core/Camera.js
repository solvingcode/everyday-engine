import CameraData from '../project/data/CameraData.js'
import Vector from '../utils/Vector.js'
import Size from '../pobject/Size.js'

/**
 * @class {Camera}
 * Define the camera
 * @property {Vector} position
 */
class Camera extends CameraData {
    constructor(position) {
        super()
        this.initPosition = Object.assign({x: 0, y: 0, z: 0}, position)
        this.position = this.initPosition
        this.entityId = null
    }

    /**
     * Update camera position
     * @param {Object} position
     */
    update(position) {
        this.position = Object.assign({x: 0, y: 0, z: 0}, position)
    }

    /**
     * Reset camera position
     */
    reset() {
        this.position = this.initPosition
    }

    /**
     * Calculate and return the camera view
     */
    getCameraView() {
        const cameraViewX = this.position.x
        const cameraViewY = this.position.y
        const cameraViewZ = this.position.z || 0
        return {cameraViewX, cameraViewY, cameraViewZ}
    }

    /**
     * Convert a position to canvas coordination
     * @param {Vector} position
     */
    toCanvasCoord(position) {
        const {cameraViewX, cameraViewY} = this.getCameraView()
        const x = parseInt(position.x) - cameraViewX
        const y = parseInt(position.y) - cameraViewY
        return new Vector({x, y})
    }

    /**
     * Get the canvas coordination from the given position
     * @param {Vector} position
     */
    fromCanvasCoord(position) {
        const {cameraViewX, cameraViewY} = this.getCameraView()
        const x = position.x + cameraViewX
        const y = position.y + cameraViewY
        const z = position.z
        return new Vector({x, y, z})
    }

    /**
     * @param {Vector} position
     * @return {Vector}
     */
    toCameraScale(position){
        const scale = this.getScale(position)
        const x = position.x * scale
        const y = position.y * scale
        const z = position.z
        return new Vector({x, y, z})
    }

    /**
     * @param {Vector} position
     * @return {Vector}
     */
    fromCameraScale(position){
        const scale = this.getScale(position)
        const x = position.x / scale
        const y = position.y / scale
        const z = position.z
        return new Vector({x, y, z})
    }

    /**
     * @param {Vector} position
     * @return {number}
     */
    getScale(position){
        const {cameraViewZ} = this.getCameraView()
        const distanceZ = cameraViewZ - position.z
        return 1 + distanceZ * 0.5
    }

    /**
     * @param {Size} size
     * @param {Vector} position
     * @return {Size}
     */
    toScaleSize(size, position = new Vector()){
        const scale = this.getScale(position)
        return new Size({
            width: size.width * scale,
            height: size.height * scale
        })
    }

    /**
     * @param {number} value
     * @param {Vector} position
     * @return {number}
     */
    toScaleNumber(value, position = new Vector()){
        return value * this.getScale(position)
    }

    /**
     * @param {Size} size
     * @param {Vector} position
     * @return {Size}
     */
    fromScaleSize(size, position = new Vector()){
        const scale = this.getScale(position)
        return new Size({
            width: size.width / scale,
            height: size.height / scale
        })
    }

    /**
     * @param {number} value
     * @param {Vector} position
     * @return {number}
     */
    fromScaleNumber(value, position = new Vector()){
        return value / this.getScale(position)
    }

    /**
     * Attach the camera to an entity
     * @param {Entity} entity
     */
    attach(entity) {
        this.entityId = entity.id
    }

    /**
     * Detach the camera
     */
    detach() {
        this.entityId = null
    }

    /**
     * Get the entity using the id
     * @param {EntityManager} entityManager
     */
    getEntity(entityManager) {
        return entityManager.findById(this.entityId)
    }

    /**
     * @param {Vector} position
     */
    setInitPosition(position) {
        this.initPosition = position
    }
}

export default Camera