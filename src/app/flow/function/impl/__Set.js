import DynamicAttributeHelper from '../../../utils/DynamicAttributeHelper.js'
import World from '../../../world/World.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'

export default function (unit, component, attribute, value) {
    const world = World.get()
    const classComponent = world.getComponentRegistry().getInstance(component)
    const componentInstance = unit.getComponent(classComponent.constructor)
    componentInstance.setValue(attribute, DynamicAttributeHelper
        .getValueByType(value, componentInstance.getType(attribute), world))
    if (classComponent.constructor === MeshComponent) {
        componentInstance.setGenerated(false)
    }
}