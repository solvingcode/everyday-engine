import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import DynamicAttributeHelper from '../../../../utils/DynamicAttributeHelper.js'
import MeshComponent from '../../../../component/internal/MeshComponent.js'
import UITextComponent from '../../../../component/internal/ui/UITextComponent.js'

export default class SetInstanceFunction extends AFunction{

    constructor() {
        super('SetInstance')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('component', TYPES.COMPONENT_INSTANCE, 0)
        this.addInput('attribute', TYPES.STRING)
        this.addInput('value', TYPES.STRING)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const component = this.getInputValue('component')
        const attribute = this.getInputValue('attribute')
        const value = this.getInputValue('value')
        const componentAttribute = component.get(attribute)
        const newValue = DynamicAttributeHelper.getValueByType(value, componentAttribute.getAttrType(), world, unit, scriptComponent)
        component.setValue(attribute, newValue)
        if(component instanceof MeshComponent || component instanceof UITextComponent){
            const targetUnit = world.getUnitManager().findUnitByComponent(component)
            targetUnit.getComponent(MeshComponent).setGenerated(false)
        }
    }
}