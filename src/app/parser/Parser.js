import SystemError from '../exception/type/SystemError.js'

/**
 * @abstract
 */
export default class Parser {

    /**
     * @abstract
     * @param {*} data
     * @param {Storage} storage
     * @return {*}
     */
    static parse(data, storage){
        throw new SystemError(`${this.prototype.name}.parse must be implemented`)
    }

}