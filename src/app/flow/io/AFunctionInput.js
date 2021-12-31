import AEmptyStackFunction from '../function/AEmptyStackFunction.js'

export default class AFunctionInput extends AEmptyStackFunction{

    /**
     * @param {string} name
     * @param {{type: number, value: *}} params
     */
    constructor(name, params = {}) {
        super(name, params)
        this.addOutput(params.type, params.value)
    }

}