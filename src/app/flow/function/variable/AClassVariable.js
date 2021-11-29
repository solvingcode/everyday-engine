import AFunction from '../AFunction.js'

export default class AClassVariable extends AFunction {

    /**
     * @param {string} name
     * @param {{type: number, value: *}} params
     */
    constructor(name, params = {}) {
        super(name, params)
        this.addOutput(params.type, params.value)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const value = this.getInputValue('value')
        if (value !== undefined && value !== '[undefined]') {
            this.setOutputValue(value)
        }
    }

    /**
     * @override
     */
    initAttributes(params) {
        this.addInput('value', params.type)
    }
}