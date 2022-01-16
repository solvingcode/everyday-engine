import AStackFunction from '../AStackFunction.js'

export default class ACustomFunction extends AStackFunction{

    /**
     * @param {string} name
     * @param {DynamicAttribute[]} inputs
     * @param {DynamicAttribute} output
     */
    constructor(name, inputs, output) {
        super(name)
        this.setInputs(inputs)
        this.setOutput(output)
    }

    createStack() {
    }

    initAttributes() {
    }
}