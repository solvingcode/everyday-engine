import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import DynamicAttributeHelper from '../../../../utils/DynamicAttributeHelper.js'

export default class SetVarFunction extends AFunction{

    constructor() {
        super('SetVar')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('variable', TYPES.STRING)
        this.addInput('value', TYPES.ANY)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const variable = this.getInputValue('variable')
        const value = this.getInputValue('value')
        scriptComponent.setValue(variable, DynamicAttributeHelper
            .getValueByType(value, scriptComponent.getType(variable), world))
    }
}