import AClassVariable from './AClassVariable.js'

export default class AGetStaticClassVariable extends AClassVariable {

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
    }

    /**
     * @override
     */
    initAttributes(params) {
    }
}