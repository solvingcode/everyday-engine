import MeshComponent from '../../../component/internal/MeshComponent.js'
import UITextComponent from '../../../component/internal/ui/UITextComponent.js'
import World from '../../../world/World.js'

export default function (component, attribute, value) {
    component.setValue(attribute, value)
    if (component instanceof MeshComponent || component instanceof UITextComponent) {
        const targetUnit = World.get().getUnitManager().findUnitByComponent(component)
        targetUnit.getComponent(MeshComponent).setGenerated(false)
    }
}