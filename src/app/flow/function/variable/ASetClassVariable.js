import ScriptHelper from '../../../utils/ScriptHelper.js'
import DynamicAttributeHelper from '../../../utils/DynamicAttributeHelper.js'
import AClassVariable from './AClassVariable.js'

export default class ASetClassVariable extends AClassVariable {

    /**
     * @param {string} name
     * @param {{type: number, value: *}} params
     */
    constructor(name, params = {}) {
        super(name, params)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const variable = ScriptHelper.extractNameFromVar(this.getName())
        const value = this.getInputValue('value')
        scriptComponent.setValue(variable, DynamicAttributeHelper
            .getValueByType(value, scriptComponent.getType(variable), world))
    }

    /**
     * @override
     */
    initAttributes(params) {
        this.addInput('value', params.type)
    }
}