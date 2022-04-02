import World from '../../../world/World.js'

export default function (target) {
    const world = World.get()
    world.getPhysicsManager().deleteUnit(target)
    world.getUnitManager().destroyUnit(target)
}