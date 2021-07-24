import SystemError from '../../exception/type/SystemError.js'

/**
 * @abstract
 */
export default class ColliderLoader {

    /**
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @return {*}
     */
    static load(unit, colliderComponent){
        const bodyCollider = this.loadCollider(unit, colliderComponent)
        if(bodyCollider){
            if(colliderComponent.isTrigger()){
                bodyCollider.isSensor = true
            }
            bodyCollider.label = colliderComponent.getId()
            bodyCollider.velocity = colliderComponent.getVelocity()
        }
        return bodyCollider
    }

    /**
     * @abstract
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @return {*}
     */
    static loadCollider(unit, colliderComponent){
        throw new SystemError(`${this.constructor.name}.loadCollider method must be implemented`)
    }

}