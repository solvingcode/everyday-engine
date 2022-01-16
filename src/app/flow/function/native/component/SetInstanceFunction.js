import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
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
        this.addInput('value', TYPES.ANY)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const component = this.getInputValue('component')
        const attribute = this.getInputValue('attribute')
        const value = this.getInputValue('value')
        component.setValue(attribute, value)
        if(component instanceof MeshComponent || component instanceof UITextComponent){
            const targetUnit = world.getUnitManager().findUnitByComponent(component)
            targetUnit.getComponent(MeshComponent).setGenerated(false)
        }
    }
}