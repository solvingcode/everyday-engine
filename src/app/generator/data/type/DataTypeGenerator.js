/**
 * @abstract
 */
import SystemError from '../../../exception/type/SystemError.js'

export default class DataTypeGenerator {

    /**
     * @abstract
     * @param {*} data
     */
    static generate(data){
        throw new SystemError(`${this.constructor.name}.generate must me implemented`)
    }

}