import World from '../../../world/World.js'

export default function (unit, component, attribute) {
    const classComponent = World.get().getComponentRegistry().getInstance(component)
    const componentInstance = unit.getComponent(classComponent.constructor)
    return componentInstance.getValue(attribute)
}