import World from '../../../world/World.js'

export default function (target) {
    const world = World.get()
    const physicsManager = world.getPhysicsManager()
    return physicsManager.getVelocity(target).getY()
}