define(function (require) {

    const AttachEntity = require('../../../../world/entity/AttachEntity.js')

    /**
     * Shape class
     * Used as interface between an Entity (managed by the app) 
     * and Body (managed by the Engine).
     * Used to synchronize information between the Body and related Entity
     * @abstract
     */
    class Shape {

        constructor(physicEngine) {
            if (this.constructor === Shape) {
                throw new TypeError('Abstract class Shape cannot be instantiated directly')
            }
            this.physicEngine = physicEngine
        }

        /**
         * Get the body for the given entity
         * @param {Entity} entity
         */
        get(entity) {
            throw new TypeError('"Shape.get" method must be implemented')
        }

        /**
         * Load the body for the given entity, and update physics
         * @param {Entity} entity 
         */
        load(entity) {
            const body = this.get(entity)
            this.update(entity, body)
            return body
        }

        /**
         * Get the body physics from the entity
         * @param {Entity} entity 
         */
        getBodyFromEntity(entity) {
            return this.physicEngine.getBodyFromEntity(entity)
        }

        /**
         * Get the engine (third party)
         */
        getEngine() {
            return this.physicEngine.getEngine()
        }

        /**
         * Synchronize informations from entity to body
         * Do not applied to Attach entities
         * @param {Entity} entity 
         * @param {Body} body 
         */
        update(entity, body) {
            if (!(entity instanceof AttachEntity)) {
                this.getEngine().Body.setVelocity(body, entity.physics.velocity)
            }
        }

    }

    return Shape
})