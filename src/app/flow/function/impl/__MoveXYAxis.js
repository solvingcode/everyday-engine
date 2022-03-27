import World from '../../../world/World.js'

export default function (target, moveVector) {
    const world = World.get()
    const physicsManager = world.getPhysicsManager()
    physicsManager.moveXYAxis(target, moveVector)
}