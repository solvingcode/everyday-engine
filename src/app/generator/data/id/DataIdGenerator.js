import SystemError from '../../../exception/type/SystemError.js'

/**
 * @abstract
 */
export default class DataIdGenerator {

    /**
     * @abstract
     * @param {*} data
     * @return {void}
     */
    static generate(data){
        throw new SystemError(`${this.constructor.name}.generate must me implemented`)
    }

}