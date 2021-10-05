import SystemError from '../../exception/type/SystemError.js'
import {PrimitiveShape} from '../../unit/Unit.js'
import ColliderComponent from '../../component/internal/ColliderComponent.js'
import Vector from '../../utils/Vector.js'
import UnitHelper from '../../utils/UnitHelper.js'
import ClientError from '../../exception/type/ClientError.js'

/**
 * @abstract
 */
export default class PhysicsEngine {

    /**
     * @type {Matter}
     */
    instance

    init() {
        this.instance = this.createEngineInstance()
    }

    clear(){
        this.clearEngine()
    }

    /**
     * @abstract
     */
    clearEngine(){
        throw new SystemError(`${this.constructor.name}.clearWorld method must be implemented`)
    }

    /**
     * @param {Unit} unit
     * @param {RigidBodyOptions} options
     */
    addBody(unit, options) {
        this.loadBody(unit, options)
    }

    /**
     * @param {Unit} unit
     * @param {Vector} position
     * @param {Vector} force
     */
    applyForce(unit, position, force) {
        const body = this.tryFindBody(unit)
        this.applyForceToBody(body, position, force)
    }

    /**
     * @param {Unit} unit
     * @param {Vector} start
     * @param {Vector} end
     * @return {{body: *, bodyA: *, bodyB: *, collided: boolean}[]}
     */
    rayCast(unit, start, end) {
        const body = this.tryFindBody(unit)
        return this.rayCastForBody(body, start, end)
    }

    /**
     * @param {Unit} unit
     * @param {Vector} velocity
     */
    setVelocity(unit, velocity) {
        const body = this.tryFindBody(unit)
        this.setVelocityToBody(body, velocity)
    }

    /**
     * @param {Unit} unit
     * @param {Vector} position
     */
    setPosition(unit, position) {
        const body = this.tryFindBody(unit)
        this.setPositionToBody(body, position)
    }

    /**
     * @param {Unit} unit
     * @param {number} friction
     */
    setFriction(unit, friction) {
        const body = this.tryFindBody(unit)
        this.setFrictionToBody(body, friction)
    }

    /**
     * @param {Unit} unit
     * @return {Vector}
     */
    getVelocity(unit) {
        const body = this.tryFindBody(unit)
        return new Vector(this.getVelocityByBody(body))
    }

    /**
     * @abstract
     * @param {Unit} unit
     * @return {Object}
     */
    findBody(unit) {
        throw new SystemError(`${this.constructor.name}.findBody method must be implemented`)
    }

    /**
     * @abstract
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @return {{unitId: number, componentId: number, body: *}}
     */
    findBodyCollider(unit, colliderComponent) {
        throw new SystemError(`${this.constructor.name}.findBodyCollider method must be implemented`)
    }

    /**
     * @abstract
     * @param {Unit} unit
     * @return {{unitId: number, componentId: number, body: *}[]}
     */
    findColliders(unit) {
        throw new SystemError(`${this.constructor.name}.findColliders method must be implemented`)
    }

    /**
     * @param {Unit} unit
     * @return {Object}
     */
    tryFindBody(unit) {
        const body = this.findBody(unit)
        if (!body) {
            throw new ClientError(`Unit ${unit.getName()} must be a rigid body`)
        }
        return body
    }

    /**
     * @abstract
     * @param {Unit} unitA
     * @param {Unit} unitB
     * @return {boolean}
     */
    canCollide(unitA, unitB) {
        throw new SystemError(`${this.constructor.name}.canCollide method must be implemented`)
    }

    /**
     * @param {*} sourceBodyCollider
     * @param {*[]} targetBodyColliders
     * @return {*[]}
     */
    detectCollisions(sourceBodyCollider, targetBodyColliders) {
        throw new SystemError(`${this.constructor.name}.detectCollisions method must be implemented`)
    }

    /**
     * @abstract
     */
    update() {
        throw new SystemError(`${this.constructor.name}.update method must be implemented`)
    }

    /**
     * @abstract
     * @param {*} body
     * @return {*}
     */
    getBodyPosition(body) {
        throw new SystemError(`${this.constructor.name}.getBodyPosition method must be implemented`)
    }

    /**
     * @abstract
     * @param {*} body
     * @return {*}
     */
    getBodyRotation(body) {
        throw new SystemError(`${this.constructor.name}.getBodyRotation method must be implemented`)
    }

    /**
     * @abstract
     * @param {*} body
     * @return {*[]}
     */
    getBodyColliders(body) {
        throw new SystemError(`${this.constructor.name}.getBodyColliders method must be implemented`)
    }

    /**
     * @private
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @return {*}
     */
    newCollider(unit, colliderComponent) {
        return this.getColliderLoader(colliderComponent).load(unit, colliderComponent)
    }

    /**
     * @private
     * @param {Unit} unit
     * @param {RigidBodyOptions} options
     * @return {*}
     */
    loadBody(unit, options) {
        const colliderComponents = unit.findComponentsByClass(ColliderComponent)
            .filter(colliderComponent => colliderComponent.isEnabled())
        const existBody = this.findBody(unit)
        if (!existBody) {
            this.createBody(unit, options, colliderComponents)
        } else {
            const updateBody = this.hasDeprecatedColliders(unit, colliderComponents) ||
                !this.hasAllColliders(unit, colliderComponents)
            if (updateBody) {
                this.deleteUnit(unit)
                this.createBody(unit, options, colliderComponents)
            }
        }
    }

    /**
     * @private
     * @param {ColliderComponent} component
     * @return {ColliderLoader}
     */
    getColliderLoader(component) {
        let shape = component.getShape()
        switch (shape) {
            case PrimitiveShape.RECT:
                return this.getRectColliderLoader(component)
            case PrimitiveShape.CIRCLE:
                return this.getCircleColliderLoader(component)
            default:
                throw new SystemError(`No ColliderLoader configured for "${shape}"`)
        }
    }

    /**
     * @param {Unit} unit
     * @param {RigidBodyOptions} options
     * @param {ColliderComponent[]} colliderComponents
     */
    createBody(unit, options, colliderComponents) {
        const colliders = colliderComponents.map(colliderComponent => this.newCollider(unit, colliderComponent))
        const position = UnitHelper.toCenterPosition(unit)
        const body = this.newBody(unit, position, _.cloneDeep(colliders), options)
        this.setVelocityToBody(body, options.velocity)
        this.addToWorld(body)
    }

    /**
     * @param {Unit} unit
     */
    deleteUnit(unit) {
        const body = this.findBody(unit)
        if (body) {
            this.deleteBody(body)
        }
    }

    /**
     * @param {{unit: Unit, colliderComponent: ColliderComponent}} sourceColliderUnit
     * @param {{unit: Unit, colliderComponent: ColliderComponent}[]} targetColliderUnits
     * @return {ColliderComponent[]}
     */
    getAllCollision(sourceColliderUnit, targetColliderUnits){
        const targetBodyColliders = targetColliderUnits.map(targetColliderUnit => {
            return this.findBodyCollider(targetColliderUnit.unit, targetColliderUnit.colliderComponent)
        }).filter(bodyCollider => bodyCollider)
        const sourceBodyCollider = this.findBodyCollider(sourceColliderUnit.unit, sourceColliderUnit.colliderComponent)
        const collisions = this.detectCollisions(sourceBodyCollider, targetBodyColliders)
        return collisions.map(collision => {
            const colliderUnit = targetColliderUnits.find(targetColliderUnit => {
                return this.isCollisionHasCollider(collision, targetColliderUnit.colliderComponent)
            })
            return colliderUnit.colliderComponent
        }).filter(collider => collider !== sourceColliderUnit.colliderComponent)
    }

    /**
     * @abstract
     * @param {*} body
     */
    deleteBody(body) {
        throw new SystemError(`${this.constructor.name}.deleteColliderBody method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {ColliderComponent} colliderComponent
     * @return {ColliderLoader}
     */
    getCircleColliderLoader(colliderComponent) {
        throw new SystemError(`${this.constructor.name}.getCircleColliderLoader method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {*} body
     * @param {Vector} velocity
     */
    setVelocityToBody(body, velocity) {
        throw new SystemError(`${this.constructor.name}.setVelocityToBody method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {*} body
     * @param {Vector} position
     */
    setPositionToBody(body, position) {
        throw new SystemError(`${this.constructor.name}.setPositionToBody method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {*} body
     * @param {number} friction
     */
    setFrictionToBody(body, friction) {
        throw new SystemError(`${this.constructor.name}.setFrictionToBody method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {*} body
     * @param {Vector} position
     * @param {Vector} force
     */
    applyForceToBody(body, position, force) {
        throw new SystemError(`${this.constructor.name}.applyForceToBody method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {*} body
     * @param {Vector} start
     * @param {Vector} end
     * @return {{body: *, bodyA: *, bodyB: *, collided: boolean}[]}
     */
    rayCastForBody(body, start, end) {
        throw new SystemError(`${this.constructor.name}.rayCastForBody method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {ColliderComponent} colliderComponent
     * @return {ColliderLoader}
     */
    getRectColliderLoader(colliderComponent) {
        throw new SystemError(`${this.constructor.name}.getRectColliderLoader method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {*} body
     * @return {Vector}
     */
    getVelocityByBody(body) {
        throw new SystemError(`${this.constructor.name}.getVelocityByBody method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {Unit} unit
     * @param {Vector} position
     * @param {*[]} colliders
     * @param {RigidBodyOptions} options
     * @return {*}
     */
    newBody(unit, position, colliders, options) {
        throw new SystemError(`${this.constructor.name}.newRigidBody method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {*} rigidBody
     */
    addToWorld(rigidBody) {
        throw new SystemError(`${this.constructor.name}.addToWorld method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @return {*}
     */
    createEngineInstance() {
        throw new SystemError(`${this.constructor.name}.createEngineInstance method must be implemented`)
    }

    /**
     * @abstract
     * @param {Unit} unit
     * @param {ColliderComponent[]} colliderComponents
     * @return {boolean}
     */
    hasDeprecatedColliders(unit, colliderComponents) {
        throw new SystemError(`${this.constructor.name}.hasDeprecatedColliders method must be implemented`)
    }

    /**
     * @abstract
     * @param {Unit} unit
     * @param {ColliderComponent[]} colliderComponents
     * @return {boolean}
     */
    hasAllColliders(unit, colliderComponents) {
        throw new SystemError(`${this.constructor.name}.hasAllColliders method must be implemented`)
    }

    /**
     * @abstract
     * @param {*} collision
     * @param {ColliderComponent} colliderComponent
     * @return {boolean}
     */
    isCollisionHasCollider(collision, colliderComponent) {
        throw new SystemError(`${this.constructor.name}.isCollisionHasCollider method must be implemented`)
    }

    /**
     * @abstract
     * @param {*} collision
     * @return {number[]}
     */
    getColliderIdsFromCollision(collision) {
        throw new SystemError(`${this.constructor.name}.getColliderFromCollision method must be implemented`)
    }

    /**
     * @return {*}
     */
    getInstance() {
        if (!this.instance) {
            throw new SystemError(`Physics Engine "${this.constructor.name}" not initialized`)
        }
        return this.instance
    }
}