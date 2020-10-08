define(function () {
    /**
     * Camera class
     * Define the camera
     */
    class Camera {
        constructor(position) {
            this.initPosition = position
            this.position = position
            this.entityId = null
        }
        /**
         * Update camera position
         * @param {Object} position 
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
            const cameraViewX = this.position.x - WINDOW_WIDTH / 2
            const cameraViewY = this.position.y - WINDOW_HEIGHT / 2
            return { cameraViewX, cameraViewY }
        }
        /**
         * Convert a position to canvas coordination
         * @param {Object} position 
         */
        toCanvasCoord(position) {
            const { cameraViewX, cameraViewY } = this.getCameraView()
            const x = parseInt(position.x) - cameraViewX
            const y = parseInt(position.y) - cameraViewY
            return { x, y }
        }
        /**
         * Get the canvas coordination from the given position
         * @param {Object} position 
         */
        fromCanvasCoord(position) {
            const { cameraViewX, cameraViewY } = this.getCameraView()
            const x = position.x + cameraViewX
            const y = position.y + cameraViewY
            return { x, y }
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
        getEntity(entityManager){
            return entityManager.findById(this.entityId)
        }
    }

    return Camera
})