import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import DynamicAttributeHelper from '../../../../utils/DynamicAttributeHelper.js'

export default class SetFunction extends AFunction{

    constructor() {
        super('Set')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('component', TYPES.COMPONENT, 0)
        this.addInput('attribute', TYPES.STRING)
        this.addInput('value', TYPES.STRING)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const classComponent = this.getInputValue('component')
        const attribute = this.getInputValue('attribute')
        const value = this.getInputValue('value')
        const componentAttribute = unit.getComponent(classComponent).get(attribute)
        const newValue = DynamicAttributeHelper.getValueByType(value, componentAttribute.getAttrType(), world, unit, scriptComponent)
        unit.getComponent(classComponent).setValue(attribute, newValue)
    }
}