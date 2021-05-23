import PhysicsEngineData from '../../project/data/PhysicsEngineData.js'
import SystemError from '../../exception/type/SystemError.js'

/**
 * Used as interface between the application and engine (third party Engine)
 * @abstract
 */
class PhysicsEngine extends PhysicsEngineData {

    constructor() {
        super()
        this.mapShapeToUnit = []
    }

    /**
     * @abstract
     */
    init() {
        throw new SystemError(`${this.constructor.name}.init method must be implemented`)
    }

    /**
     * @param {Unit} unit
     * @param {World} world
     */
    add(unit, world) {
        this.mapShapeToUnit.push({
            unitId: unit.getId(),
            shape: this.loadShape(unit, world)
        })
    }

    /**
     * @abstract
     * @param {Unit} unit
     * @param {World} world
     * @return {*}
     */
    loadShape(unit, world) {
        throw new SystemError(`${this.constructor.name}.loadShape method must be implemented`)
    }

    /**
     * @abstract
     * @param {Unit} unit
     */
    update(unit) {
        throw new SystemError(`${this.constructor.name}.update method must be implemented`)
    }

    /**
     * @abstract
     * Get the Engine (third party)
     * @return {*}
     */
    getEngine() {
        throw new SystemError(`${this.constructor.name}.getEngine method must be implemented`)
    }

    /**
     * @abstract
     * Run the physics engine.
     */
    run() {
        throw new SystemError(`${this.constructor.name}.run method must be implemented`)
    }

    /**
     * Stop the physics engine and reset the mapping.
     */
    stop() {
        this.stopEngine()
        this.mapShapeToUnit = []
    }

    /**
     * @abstract
     */
    stopEngine() {
        throw new SystemError(`${this.constructor.name}.stopEngine method must be implemented`)
    }

    /**
     * @abstract
     * Update the physics engine.
     */
    updateEngine() {
        throw new SystemError(`${this.constructor.name}.updateEngine method must be implemented`)
    }

    /**
     * @abstract
     * Get bodies information (position, ...)
     * @return {*[]}
     */
    getBodies() {
        throw new SystemError(`${this.constructor.name}.getBodies method must be implemented`)
    }

    /**
     * @abstract
     * Get joints information (position, ...)
     * @return {*[]}
     */
    getJoints() {
        throw new SystemError(`${this.constructor.name}.getJoints method must be implemented`)
    }

    /**
     * @abstract
     * Create new group of collision
     * @return {*}
     */
    newGroup() {
        throw new SystemError(`${this.constructor.name}.newGroup method must be implemented`)
    }

    /**
     * @abstract
     * @param {Unit} unit
     */
    updateCollisionFilters(unit) {
        throw new SystemError(`${this.constructor.name}.updateCollisionFilters method must be implemented`)
    }

    /**
     * @abstract
     * Update constraint bodies using the given constraint param
     * @param {Unit} unit
     * @param {Constraint} constraint
     */
    updateConstraint(unit, constraint) {
        throw new SystemError(`${this.constructor.name}.updateConstraint method must be implemented`)
    }

    /**
     * @abstract
     * Apply force to the entity
     * @param {Object} body
     * @param {EntityMotion} entity
     */
    applyPhysics(body, entity) {
        throw new TypeError('"applyForce" method must be implemented')
    }

    /**
     * @param {Unit} unit
     * @abstract
     */
    removeShape(unit) {
        throw new SystemError(`${this.constructor.name}.removeShape method must be implemented`)
    }

    /**
     * Check if two entity collide
     * @abstract
     * @param {Number} unitAId
     * @param {Number} unitBId
     */
    isCollide(unitAId, unitBId) {
        throw new SystemError(`${this.constructor.name}.isCollide method must be implemented`)
    }

    /**
     * Get body physics from the entity
     * @param {Entity} entity
     */
    getBodyFromEntity(entity) {
        return this.physicsManager.getBodyFromEntity(entity)
    }

    /**
     * Find the shape from the entity
     * @param {Unit} unit
     */
    findShapeFromUnit(unit) {
        const shapeUnit = this.mapShapeToUnit
            .find(mShape => mShape.unitId === unit.getId())
        return shapeUnit && shapeUnit.shape
    }

    /**
     * @abstract
     * @param {World} world
     * @param {Entity} entity
     * @return {boolean}
     */
    updateJointPosition(world, entity) {
        throw new SystemError(`${this.constructor.name}.updateJointPosition method must be implemented`)
    }

}

export default PhysicsEngine