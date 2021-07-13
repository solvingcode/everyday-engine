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
     * @type {{unitId: number, body: *}[]}
     */
    mapBodyUnit

    /**
     * @type {{unitId: number, componentId: number, body: *}[]}
     */
    mapBodyCollider

    /**
     * @type {Matter}
     */
    instance

    constructor() {
        this.mapBodyUnit = []
        this.mapBodyCollider = []
    }

    init() {
        this.instance = this.createEngineInstance()
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
     * @param {Unit} unit
     * @return {Object}
     */
    findBody(unit) {
        const mapBody = this.mapBodyUnit.find(bodyUnit => bodyUnit.unitId === unit.getId())
        return mapBody && mapBody.body
    }

    /**
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @return {{unitId: number, componentId: number, body: *}}
     */
    findCollider(unit, colliderComponent) {
        return this.mapBodyCollider.find(bodyCollider =>
            bodyCollider.componentId === colliderComponent.getId() &&
            bodyCollider.unitId === unit.getId()
        )
    }

    /**
     * @param {Unit} unit
     * @return {{unitId: number, componentId: number, body: *}[]}
     */
    findColliders(unit) {
        return this.mapBodyCollider.filter(bodyCollider =>
            bodyCollider.unitId === unit.getId()
        )
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
     * @return {{unitId: number, body: *}[]}
     */
    getMapBodyUnit() {
        return this.mapBodyUnit
    }

    /**
     * @private
     * @param {Unit} unit
     * @param {*} body
     */
    saveBody(unit, body) {
        const existMapBody = this.mapBodyUnit.find(mapBody => mapBody.unitId === unit.getId())
        if (!existMapBody) {
            this.mapBodyUnit.push({
                unitId: unit.getId(),
                body: body
            })
        } else {
            existMapBody.body = body
        }
    }

    /**
     * @private
     * @param {Unit} unit
     */
    deleteColliders(unit) {
        _.remove(this.mapBodyCollider, mapCollider => mapCollider.unitId === unit.getId())
    }

    /**
     * @private
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @param {*} body
     */
    saveCollider(unit, colliderComponent, body) {
        this.mapBodyCollider.push({
            unitId: unit.getId(),
            componentId: colliderComponent.getId(),
            body
        })
    }

    /**
     * @private
     * @param {Unit} unit
     * @param {ColliderComponent[]} colliderComponents
     * @param {*[]} colliders
     */
    saveColliders(unit, colliderComponents, colliders) {
        colliderComponents.forEach((colliderComponent, iColliderComponent) =>
            this.saveCollider(unit, colliderComponent, colliders[iColliderComponent]))
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
        const colliderComponentIds = colliderComponents.map(colliderComponent => colliderComponent.getId())
        const existBody = this.findBody(unit)
        if (!existBody) {
            this.createBody(unit, options, colliderComponents)
        } else {
            let updateBody = false
            const actualColliders = this.findColliders(unit)
            actualColliders.forEach(collider => {
                if (!colliderComponentIds.includes(collider.componentId)) {
                    updateBody = true
                }
            })
            colliderComponents.forEach(colliderComponent => {
                if (!actualColliders.find(collider => collider.componentId === colliderComponent.getId())) {
                    updateBody = true
                }
            })
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
        const body = this.newBody(position, _.cloneDeep(colliders), options)
        this.addToWorld(body)
        this.saveBody(unit, body)
        this.saveColliders(unit, colliderComponents, colliders)
    }

    /**
     * @param {Unit} unit
     */
    deleteUnit(unit) {
        const body = this.findBody(unit)
        if (body) {
            this.deleteBody(body)
            this.deleteColliders(unit)
        }
    }

    /**
     * @abstract
     * @param {*} body
     */
    deleteBody(body) {
        throw new SystemError(`${this.constructor.name}.deleteColliderBody method must be implemented`)
    }

    /**
     * @abstract
     * @param {*} body
     * @param {*} collider
     */
    addColliderBody(body, collider) {
        throw new SystemError(`${this.constructor.name}.addColliderBody method must be implemented`)
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
     * @param {Vector} position
     * @param {*[]} colliders
     * @param {RigidBodyOptions} options
     * @return {*}
     */
    newBody(position, colliders, options) {
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
     * @return {*}
     */
    getInstance() {
        if (!this.instance) {
            throw new SystemError(`Physics Engine "${this.constructor.name}" not initialized`)
        }
        return this.instance
    }
}