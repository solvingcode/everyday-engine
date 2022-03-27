import World from '../../../world/World.js'

export default function (target, collider) {
    const world = World.get()
    const physicsManager = world.getPhysicsManager()
    if (collider.isEnabled()) {
        return physicsManager.getAllCollision(world, target, collider, null)
    }
    return []
}