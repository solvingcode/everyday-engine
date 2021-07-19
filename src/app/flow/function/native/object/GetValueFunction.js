import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import DynamicAttributeHelper from '../../../../utils/DynamicAttributeHelper.js'

export default class GetValueFunction extends AFunction{

    constructor() {
        super('GetValue')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('attributes', TYPES.ARRAY | TYPES.DYNAMIC_ATTRIBUTE, [])
        this.addInput('name', TYPES.STRING)
        this.addOutput(TYPES.ANY)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const attributes = this.getInputValue('attributes')
        const name = this.getInputValue('name')
        const attribute = DynamicAttributeHelper.get(attributes, name)
        const outputValue = DynamicAttributeHelper.getValueByType(attribute.getAttrValue(), attribute.getAttrType(), world, unit, scriptComponent)
        this.setOutputValue(outputValue)
    }
}