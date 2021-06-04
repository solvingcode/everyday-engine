import AEmptyStackFunction from '../function/AEmptyStackFunction.js'

/**
 * @abstract
 */
export default class AVariable extends AEmptyStackFunction{

    /**
     * @param {string} name
     * @param {string} type
     */
    constructor(type, name) {
        super('Variable')
        this.setName(`${name}`)
        this.addOutput(type)
    }

}