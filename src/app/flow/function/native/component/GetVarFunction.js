import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import DynamicAttributeHelper from '../../../../utils/DynamicAttributeHelper.js'

export default class GetVarFunction extends AFunction{

    constructor() {
        super('GetVar')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('variable', TYPES.STRING)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const variable = this.getInputValue('variable')
        const value = scriptComponent.getValue(variable)
        const outputValue = DynamicAttributeHelper.getValueByType(value, scriptComponent.getType(variable), world, unit, scriptComponent)
        this.setOutputValue(outputValue)
    }
}