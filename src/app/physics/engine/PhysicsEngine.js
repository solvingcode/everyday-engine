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
     * @type {Matter}
     */
    instance

    constructor() {
        this.mapBodyUnit = []
    }

    init(){
        this.instance = this.createEngineInstance()
    }

    /**
     * @param {Unit} unit
     * @param {RigidBodyOptions} options
     */
    addBody(unit, options) {
        if(!this.findBody(unit)){
            this.saveBody(unit, this.loadBody(unit, options))
        }
    }

    /**
     * @param {Unit} unit
     * @param {Vector} position
     * @param {Vector} force
     */
    applyForce(unit, position, force){
        const body = this.tryFindBody(unit)
        this.applyForceToBody(body, position, force)
    }

    /**
     * @param {Unit} unit
     * @param {Vector} start
     * @param {Vector} end
     * @return {{body: *, bodyA: *, bodyB: *, collided: boolean}[]}
     */
    rayCast(unit, start, end){
        const body = this.tryFindBody(unit)
        return this.rayCastForBody(body, start, end)
    }

    /**
     * @param {Unit} unit
     * @param {Vector} velocity
     */
    setVelocity(unit, velocity){
        const body = this.tryFindBody(unit)
        this.setVelocityToBody(body, velocity)
    }

    /**
     * @param {Unit} unit
     * @return {Vector}
     */
    getVelocity(unit){
        const body = this.tryFindBody(unit)
        return new Vector(this.getVelocityByBody(body))
    }

    /**
     * @param {Unit} unit
     * @return {Object}
     */
    findBody(unit){
        const mapBody = this.mapBodyUnit.find(bodyUnit => bodyUnit.unitId === unit.getId())
        return mapBody && mapBody.body
    }


    /**
     * @param {Unit} unit
     * @return {Object}
     */
    tryFindBody(unit){
        const body = this.findBody(unit)
        if(!body){
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
    canCollide(unitA, unitB){
        throw new SystemError(`${this.constructor.name}.canCollide method must be implemented`)
    }

    /**
     * @abstract
     */
    update(){
        throw new SystemError(`${this.constructor.name}.update method must be implemented`)
    }

    /**
     * @abstract
     * @param {*} body
     * @return {*}
     */
    getBodyPosition(body){
        throw new SystemError(`${this.constructor.name}.getBodyPosition method must be implemented`)
    }

    /**
     * @abstract
     * @param {*} body
     * @return {*[]}
     */
    getBodyColliders(body){
        throw new SystemError(`${this.constructor.name}.getBodyColliders method must be implemented`)
    }

    /**
     * @param {Unit} unit
     * @return {Vector}
     */
    getBodyPositionFromCollider(unit){
        const body = this.findBody(unit)
        const colliders = this.getBodyColliders(body)
        const firstColliderIndex = 1
        let bodyPosition = UnitHelper.fromCenterPosition(unit, new Vector(this.getBodyPosition(body)))
        if(colliders.length > firstColliderIndex){ // body has colliders (first collider is always the parent body)
            const firstCollider = colliders[firstColliderIndex]
            const firstColliderPosition = new Vector(this.getBodyPosition(firstCollider))
            const colliderComponents = unit.findComponentsByClass(ColliderComponent)
            const colliderComponentRelated = colliderComponents[firstColliderIndex - 1]
            const colliderPosition = Vector.add(
                firstColliderPosition,
                Vector.multiply(colliderComponentRelated.getPosition(), -1))
            bodyPosition = UnitHelper.fromColliderCenterPosition(unit, colliderComponentRelated, colliderPosition)
        }
        return bodyPosition
    }

    /**
     * @return {{unitId: number, body: *}[]}
     */
    getMapBodyUnit(){
        return this.mapBodyUnit
    }

    /**
     * @private
     * @param {Unit} unit
     * @param {*} body
     */
    saveBody(unit, body){
        this.mapBodyUnit.push({
            unitId: unit.getId(),
            body: body
        })
    }

    /**
     * @private
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @return {*}
     */
    newCollider(unit, colliderComponent){
        return this.getColliderLoader(colliderComponent).load(unit, colliderComponent)
    }

    /**
     * @private
     * @param {Unit} unit
     * @param {RigidBodyOptions} options
     * @return {*}
     */
    loadBody(unit, options) {
        const colliders = unit.findComponentsByClass(ColliderComponent).map(colliderComponent =>
            this.newCollider(unit, colliderComponent)
        )
        const body = this.newBody(unit, colliders, options)
        this.addToWorld(body)
        return body
    }

    /**
     * @private
     * @param {ColliderComponent} component
     * @return {ColliderLoader}
     */
    getColliderLoader(component){
        let shape = component.getShape()
        switch(shape){
            case PrimitiveShape.RECT:
                return this.getRectColliderLoader(component)
            case PrimitiveShape.CIRCLE:
                return this.getCircleColliderLoader(component)
            default:
                throw new SystemError(`No ColliderLoader configured for "${shape}"`)
        }
    }

    /**
     * @protected
     * @abstract
     * @param {ColliderComponent} colliderComponent
     * @return {ColliderLoader}
     */
    getCircleColliderLoader(colliderComponent){
        throw new SystemError(`${this.constructor.name}.getCircleColliderLoader method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {*} body
     * @param {Vector} velocity
     */
    setVelocityToBody(body, velocity){
        throw new SystemError(`${this.constructor.name}.setVelocityToBody method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {*} body
     * @param {Vector} position
     * @param {Vector} force
     */
    applyForceToBody(body, position, force){
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
    rayCastForBody(body, start, end){
        throw new SystemError(`${this.constructor.name}.rayCastForBody method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {ColliderComponent} colliderComponent
     * @return {ColliderLoader}
     */
    getRectColliderLoader(colliderComponent){
        throw new SystemError(`${this.constructor.name}.getRectColliderLoader method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {*} body
     * @return {Vector}
     */
    getVelocityByBody(body){
        throw new SystemError(`${this.constructor.name}.getVelocityByBody method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {Unit} unit
     * @param {*[]} colliders
     * @param {RigidBodyOptions} options
     * @return {*}
     */
    newBody(unit, colliders, options){
        throw new SystemError(`${this.constructor.name}.newRigidBody method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {*} rigidBody
     */
    addToWorld(rigidBody){
        throw new SystemError(`${this.constructor.name}.addToWorld method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @return {*}
     */
    createEngineInstance(){
        throw new SystemError(`${this.constructor.name}.createEngineInstance method must be implemented`)
    }

    /**
     * @return {*}
     */
    getInstance(){
        if(!this.instance){
            throw new SystemError(`Physics Engine "${this.constructor.name}" not initialized`)
        }
        return this.instance
    }

}