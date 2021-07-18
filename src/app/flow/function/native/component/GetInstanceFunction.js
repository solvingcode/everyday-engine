import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import DynamicAttributeHelper from '../../../../utils/DynamicAttributeHelper.js'

export default class GetInstanceFunction extends AFunction{

    constructor() {
        super('GetInstance')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('component', TYPES.COMPONENT_INSTANCE, 0)
        this.addInput('attribute', TYPES.STRING)
        this.addOutput(TYPES.ANY)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const component = this.getInputValue('component')
        const attribute = this.getInputValue('attribute')
        const componentAttribute = component.get(attribute)
        const value = component.getValue(attribute)
        const outputValue = DynamicAttributeHelper.getValueByType(value, componentAttribute.getAttrType(), world, unit, scriptComponent)
        this.setOutputValue(outputValue)
    }
}