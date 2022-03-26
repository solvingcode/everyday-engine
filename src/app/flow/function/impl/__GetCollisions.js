import World from '../../../world/World.js'

export default function (target, colliderComponent) {
    const world = World.get()
    const physicsManager = world.getPhysicsManager()
    if (colliderComponent.isEnabled()) {
        return physicsManager.getAllCollision(world, target, colliderComponent, null)
    }
    return []
}