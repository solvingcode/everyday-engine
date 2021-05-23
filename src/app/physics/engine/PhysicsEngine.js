import SystemError from '../../exception/type/SystemError.js'
import {PrimitiveShape} from '../../unit/Unit.js'
import RectColliderLoader from './loader/RectColliderLoader.js'

/**
 * @abstract
 */
export default class PhysicsEngine {

    /**
     * @type {{unitId: number, rigidBody: *}[]}
     */
    mapRigidBodyUnit

    /**
     * @type {Matter}
     */
    instance

    constructor() {
        this.mapRigidBodyUnit = []
    }

    init(){
        this.instance = this.createEngineInstance()
    }

    /**
     * @param {Unit} unit
     */
    addUnit(unit) {
        if(!this.findRigidBody(unit)){
            this.mapRigidBodyUnit.push({
                unitId: unit.getId(),
                rigidBody: this.loadRigidBody(unit)
            })
        }
    }

    /**
     * @param {Unit} unit
     * @return {*}
     */
    loadRigidBody(unit) {
        const colliderBodies = [].map(colliderComponent =>
            this.getColliderLoader(colliderComponent).load(unit, colliderComponent))
        const rigidBody = this.newRigidBody(colliderBodies)
        this.addToWorld(rigidBody)
        return rigidBody
    }

    /**
     * @param {Component} component
     * @return {ColliderLoader}
     */
    getColliderLoader(component){
        let shape = component.getShape()
        switch(shape){
            case PrimitiveShape.RECT:
                return RectColliderLoader
            default:
                throw new SystemError(`No ColliderLoader configured for "${shape}"`)
        }
    }

    /**
     * @param {Unit} unit
     * @return {Object}
     */
    findRigidBody(unit){
        const mapRigidBody = this.mapRigidBodyUnit.find(bodyUnit => bodyUnit.unitId === unit.getId())
        return mapRigidBody && mapRigidBody.rigidBody
    }

    /**
     * @abstract
     * @param {*[]} colliderBodies
     * @return {*}
     */
    newRigidBody(colliderBodies){
        throw new SystemError(`${this.constructor.name}.newRigidBody method must be implemented`)
    }

    /**
     * @abstract
     * @param {*} rigidBody
     */
    addToWorld(rigidBody){
        throw new SystemError(`${this.constructor.name}.addToWorld method must be implemented`)
    }

    /**
     * @abstract
     * @return {*}
     */
    getEngine(unit) {
        throw new SystemError(`${this.constructor.name}.getEngine method must be implemented`)
    }

    /**
     * @abstract
     * @return {*}
     */
    createEngineInstance(){
        throw new SystemError(`${this.constructor.name}.createEngineInstance method must be implemented`)
    }

    /**
     * @abstract
     */
    update(){
        throw new SystemError(`${this.constructor.name}.update method must be implemented`)
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