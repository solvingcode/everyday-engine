/**
 * @abstract
 */
export default class Parser {

    /**
     * @abstract
     * @param {*} data
     * @return {AScript}
     */
    static parse(data){
        throw new TypeError(`${this.prototype.name}.parse must be implemented`)
    }

}