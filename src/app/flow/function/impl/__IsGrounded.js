import World from '../../../world/World.js'

export default function (target, component) {
    const physicsManager = World.get().getPhysicsManager()
    return physicsManager.isGrounded(target, component)
}