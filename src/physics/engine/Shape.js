define(function (require) {

    const AttachEntity = require('../../world/entity/AttachEntity.js')

    /**
     * Shape class
     * Used as interface between an Entity (managed by the app) 
     * and Body (managed by the Engine).
     * Used to synchronize information between the Body and related Entity
     * @abstract
     *
     * @property {Shape} instance
     */
    class Shape {

        constructor(physicEngine) {
            if (this.constructor === Shape) {
                throw new TypeError('Abstract class Shape cannot be instantiated directly')
            }
            this.physicEngine = physicEngine
        }

        /**
         * Generate the body for the given entity
         * @param {Entity} entity
         * @return {Body}
         */
        generate(entity) {
            throw new TypeError('"Shape.generate" method must be implemented')
        }

        /**
         * Load the body for the given entity, and update physics
         * @param {Entity} entity
         * @return {Body}
         */
        load(entity) {
            const body = this.generate(entity)
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
         * Do not apply force to Attach entities
         * @param {Entity} entity 
         * @param {Body} body 
         */
        update(entity, body) {
            if (!(entity instanceof AttachEntity)) {
                this.physicEngine.applyForce(body, entity)
            }
        }

        /**
         * Get the instance of type using the given physics engine
         * @param {Shape} type 
         * @param {PhysicsEngine} physicEngine
         *
         * @return {Shape}
         */
        static get(type, physicEngine = null) {
            if (physicEngine && !type.instance) {
                type.instance = new type(physicEngine)
            }
            return type.instance
        }

    }

    return Shape
})