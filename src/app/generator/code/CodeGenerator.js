import NotImplementedError from '../../exception/type/NotImplementedError.js'

/**
 * @abstract
 */
export default class CodeGenerator {

    static instance

    /**
     * @abstract
     * @param {AFunction} scriptFunction
     * @param {World} world
     * @return {string}
     */
    generate(scriptFunction, world){
        throw new NotImplementedError(this, this.generate)
    }

    /**
     * @return {CodeGenerator}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}