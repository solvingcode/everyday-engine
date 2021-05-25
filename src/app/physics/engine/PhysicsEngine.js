import SystemError from '../../exception/type/SystemError.js'
import {PrimitiveShape} from '../../unit/Unit.js'
import ColliderComponent from '../../component/internal/ColliderComponent.js'

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
     * @param {boolean} isStatic
     */
    addBody(unit, isStatic) {
        if(!this.findBody(unit)){
            this.saveBody(unit, this.loadBody(unit, isStatic))
        }
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
     * @abstract
     */
    update(){
        throw new SystemError(`${this.constructor.name}.update method must be implemented`)
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
     * @param {boolean} isStatic
     * @return {*}
     */
    loadBody(unit, isStatic) {
        const colliders = unit.findComponentsByClass(ColliderComponent).map(colliderComponent =>
            this.newCollider(unit, colliderComponent)
        )
        const body = this.newBody(unit, {isStatic})
        this.setColliders(body, colliders)
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
    getRectColliderLoader(colliderComponent){
        throw new SystemError(`${this.constructor.name}.getRectColliderLoader method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {*} body
     * @param {*[]} colliders
     */
    setColliders(body, colliders){
        throw new SystemError(`${this.constructor.name}.attachCollider method must be implemented`)
    }

    /**
     * @protected
     * @abstract
     * @param {Unit} unit
     * @param {{isStatic: boolean}} options
     * @return {*}
     */
    newBody(unit, options){
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