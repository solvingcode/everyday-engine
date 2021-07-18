import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import DynamicAttributeHelper from '../../../../utils/DynamicAttributeHelper.js'

export default class GetFunction extends AFunction{

    constructor() {
        super('Get')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('component', TYPES.COMPONENT, 0)
        this.addInput('attribute', TYPES.STRING)
        this.addOutput(TYPES.ANY)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const classComponent = this.getInputValue('component')
        const attribute = this.getInputValue('attribute')
        const component = unit.getComponent(classComponent)
        const componentAttribute = component.get(attribute)
        const value = component.getValue(attribute)
        const outputValue = DynamicAttributeHelper.getValueByType(value, componentAttribute.getAttrType(), world, unit, scriptComponent)
        this.setOutputValue(outputValue)
    }
}