define(function (require) {

    const AttachEntity = require('../../entity/types/constraint/AttachEntity.js')

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
         * @param {EntityMotion} entity
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
            this.setup(entity, body)
            this.update(entity, body)
            return body
        }

        /**
         * Get the body physics from the entity
         * @param {Entity} entity
         * @return {Body | Constraint}
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
         * Setup the body for the given entity
         * @param {EntityMotion} entity
         * @param {Matter.Body} body
         */
        setup(entity, body){
            entity.isControlled() && entity.setCollisionGroup(-1)
            body.isStatic = body.isStatic || entity.isControlled() || entity.isFixed()
        }

        /**
         * Synchronize informations from entity to body
         * Do not apply force to Attach entities
         * @param {EntityMotion | AttachEntity} entity
         * @param {Body | Constraint} physicEntity
         */
        update(entity, physicEntity) {
            if (!(entity instanceof AttachEntity)) {
                this.physicEngine.applyPhysics(physicEntity, entity)
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