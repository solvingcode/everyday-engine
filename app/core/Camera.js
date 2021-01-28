define(function (require) {

    import CameraData from '../project/data/CameraData.js'
    import Vector from '../utils/Vector.js'

    /**
     * @class {Camera}
     * Define the camera
     * @property {{x: number, y: number, z: number}} position
     */
    class Camera  extends CameraData{
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
            const cameraViewX = this.position.x - SCENE_WIDTH / 2
            const cameraViewY = this.position.y - SCENE_HEIGHT / 2
            const cameraViewZ = this.position.z || 0
            return { cameraViewX, cameraViewY, cameraViewZ }
        }
        /**
         * Convert a position to canvas coordination
         * @param {Object} position 
         */
        toCanvasCoord(position) {
            const { cameraViewX, cameraViewY } = this.getCameraView()
            const x = parseInt(position.x) - cameraViewX
            const y = parseInt(position.y) - cameraViewY
            return new Vector({ x, y })
        }
        /**
         * Get the canvas coordination from the given position
         * @param {Object} position 
         */
        fromCanvasCoord(position) {
            const { cameraViewX, cameraViewY } = this.getCameraView()
            const x = position.x + cameraViewX
            const y = position.y + cameraViewY
            return new Vector({ x, y })
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
        setInitPosition(position){
            this.initPosition = position
        }
    }

    export default Camera
})