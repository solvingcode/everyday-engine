import SystemError from '../../exception/type/SystemError.js'

/**
 * @abstract
 */
export default class Compiler {

    static instance

    /**
     * @abstract
     * @param {AScript} flow
     * @return {boolean}
     */
    run(flow){
        throw new SystemError(`${this.constructor.name}.run must be implemented`)
    }

    /**
     * @return {Compiler}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}