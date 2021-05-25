import SystemError from '../../exception/type/SystemError.js'

/**
 * @abstract
 */
export default class ColliderLoader {

    /**
     * @abstract
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @return {*}
     */
    static load(unit, colliderComponent){
        throw new SystemError(`${this.constructor.name}.load method must be implemented`)
    }

}