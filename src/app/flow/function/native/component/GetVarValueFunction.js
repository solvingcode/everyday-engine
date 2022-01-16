import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import DynamicAttributeHelper from '../../../../utils/DynamicAttributeHelper.js'

export default class GetVarValueFunction extends AFunction {

    constructor() {
        super('GetVarValue')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('variable', TYPES.STRING)
        this.addOutput(TYPES.ANY)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        const variable = this.getInputValue('variable')
        this.setOutputValue(DynamicAttributeHelper.getValueByType(
            scriptComponent.getValue(variable), scriptComponent.getType(variable), world)
        )
    }
}