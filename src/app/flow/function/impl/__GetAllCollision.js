import World from '../../../world/World.js'

export default function (target, collider, maskGroup) {
    const world = World.get()
    const physicsManager = world.getPhysicsManager()
    const colliderComponent = collider
    if (colliderComponent.isEnabled()) {
        return physicsManager.getAllCollision(world, target, colliderComponent, maskGroup)
    }
}