import ScriptHelper from '../../../utils/ScriptHelper.js'
import AClassVariable from './AClassVariable.js'

export default class AGetClassVariable extends AClassVariable {

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
        this.setOutputValue(scriptComponent.getValue(ScriptHelper.extractNameFromVar(this.getName())))
    }

    /**
     * @override
     */
    initAttributes(params) {
    }
}