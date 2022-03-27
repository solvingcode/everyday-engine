import World from '../../../world/World.js'

export default function (target, collider, distance, maskGroup) {
    const world = World.get()
    const physicsManager = world.getPhysicsManager()
    return physicsManager
        .boxCast(world, target, collider, distance, maskGroup)
        .map(pColliderComponent => pColliderComponent.getId())
}