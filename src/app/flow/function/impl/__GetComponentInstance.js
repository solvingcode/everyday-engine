import World from '../../../world/World.js'
import ClientError from '../../../exception/type/ClientError.js'

export default function (unit, component) {
    const world = World.get()
    const classComponentName = component
    const classComponent = world.getComponentRegistry().getInstance(classComponentName)
    if (!classComponent) {
        throw new ClientError(`${classComponentName} not found`)
    }
    const componentInstance = unit.findComponentByClass(classComponent.constructor)
    if (!componentInstance) {
        throw new ClientError(`${classComponent.constructor.name} not found`)
    }
    return componentInstance
}