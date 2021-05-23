import AttachEntity from '../../entity/types/constraint/AttachEntity.js'
import SystemError from '../../exception/type/SystemError.js'

/**
 * @abstract
 * Used as interface between a Unit (managed by the app)
 * and Body (managed by the Engine).
 * Used to synchronize information between the Body and related Entity
 */
class Shape {

    /**
     * @type {PhysicsEngine}
     */
    physicEngine

    /**
     * @param {PhysicsEngine} physicEngine
     */
    constructor(physicEngine) {
        this.physicEngine = physicEngine
    }

    /**
     * Generate the body for the given entity
     * @param {Unit} unit
     * @param {World} world
     * @return {*}
     */
    generate(unit, world) {
        throw new SystemError(`${this.constructor.name}.generate method must be implemented`)
    }

    /**
     * Load the body for the given unit, and update physics
     * @param {Unit} unit
     * @param {World} world
     * @return {*}
     */
    load(unit, world) {
        const body = this.generate(unit, world)
        this.setup(unit, body)
        this.update(unit, body)
        return body
    }

    /**
     * Get the body physics from the entity
     * @param {Unit} unit
     * @return {*}
     */
    getBodyFromEntity(unit) {
        return this.physicEngine.getBodyFromEntity(unit)
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
     * @param {Matter.ContentMenuItem} body
     */
    setup(entity, body) {
        entity.isControlled() && entity.setCollisionGroup(-1)
        body.isStatic = body.isStatic || entity.isControlled() || entity.isFixed()
    }

    /**
     * Synchronize informations from entity to body
     * Do not apply force to Attach entities
     * @param {EntityMotion | AttachEntity} entity
     * @param {ContentMenuItem | Constraint} physicEntity
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

export default Shape