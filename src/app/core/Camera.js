import CameraData from '../project/data/CameraData.js'
import Vector from '../utils/Vector.js'
import Size from '../pobject/Size.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import TransformComponent from '../component/internal/TransformComponent.js'

class Camera extends CameraData {

    /**
     * @type {Vector}
     */
    position

    /**
     * @type {Vector}
     */
    initPosition

    constructor(position) {
        super()
        this.initPosition = position
        this.position = this.initPosition
        this.scaleFactor = 0.2
        this.cameraUnitId = null
    }

    /**
     * Update camera position
     * @param {Vector} position
     */
    update(position) {
        this.position = position
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
        const z = position.z || 0
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
        const z = position.z || 0
        return new Vector({x, y, z})
    }

    /**
     * @param {Vector} position
     * @return {number}
     */
    getScale(position){
        const {cameraViewZ} = this.getCameraView()
        const distanceZ = cameraViewZ - (position.z || 0)
        return 1 + distanceZ * this.scaleFactor
    }

    /**
     * @param {number} scale
     */
    setScale(scale){
        const distanceZ = (scale - 1) / this.scaleFactor
        this.setPositionZ(distanceZ)
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
     * @param {number} cameraUnitId
     * @param {World} world
     */
    setup(cameraUnitId, world){
        this.cameraUnitId = cameraUnitId
        const unit = this.getUnit(world.getUnitManager())
        if(!unit){
            throw new TypeError(`Error Setup camera (Unit ID: ${cameraUnitId})`)
        }
        const meshComponent = unit.getComponent(MeshComponent)
        const scale = world.getResolution().getWidth() / meshComponent.getSize().getWidth()
        const unitPosition = unit.getComponent(TransformComponent).getPosition()
        this.update(unitPosition)
        this.setScale(scale)
        meshComponent.setEnabled(false)
        world.regenerateAll()
    }

    /**
     * @param {UnitManager} unitManager
     */
    getUnit(unitManager) {
        return unitManager.findUnitById(this.cameraUnitId)
    }

    /**
     * @param {Vector} position
     */
    setInitPosition(position) {
        this.initPosition = position
    }
}

export default Camera