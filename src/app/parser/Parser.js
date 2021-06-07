import SystemError from '../exception/type/SystemError.js'

/**
 * @abstract
 */
export default class Parser {

    /**
     * @abstract
     * @param {*} data
     * @return {*}
     */
    static parse(data){
        throw new SystemError(`${this.prototype.name}.parse must be implemented`)
    }

}