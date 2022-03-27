import World from '../../../world/World.js'

export default function () {
    const world = World.get()
    const camera = world.getCamera()
    return camera.getUnit(world.getUnitManager())
}