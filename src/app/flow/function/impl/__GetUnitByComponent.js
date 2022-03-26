import World from '../../../world/World.js'

export default function (component) {
    return World.get().getUnitManager().findUnitByComponent(component)
}