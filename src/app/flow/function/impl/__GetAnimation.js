import World from '../../../world/World.js'

export default function (id) {
    const world = World.get()
    return world.getAnimationManager().findById(parseInt(id))
}