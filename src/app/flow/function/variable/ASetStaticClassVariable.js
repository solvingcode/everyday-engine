import AClassVariable from './AClassVariable.js'

export default class ASetStaticClassVariable extends AClassVariable {

    /**
     * @param {string} name
     * @param {{type: number, value: *, varStatic}} params
     */
    constructor(name, params = {}) {
        super(name, params)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        this.setOutputValue(this.getInputValue('value'))
    }

    /**
     * @override
     */
    initAttributes(params) {
        this.addInput('value', params.type)
    }
}