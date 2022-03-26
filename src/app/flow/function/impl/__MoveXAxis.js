import World from '../../../world/World.js'

export default function (target, speed, direction) {
    const world = World.get()
    const physicsManager = world.getPhysicsManager()
    physicsManager.moveXAxis(target, speed * direction)
}