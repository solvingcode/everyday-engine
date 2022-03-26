import World from '../../../world/World.js'

export default function (target, position, force) {
    const world = World.get()
    const physicsManager = world.getPhysicsManager()
    physicsManager.applyForce(target, position, force)
}