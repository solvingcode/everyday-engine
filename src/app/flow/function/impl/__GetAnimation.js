import World from '../../../world/World.js'

export default function (id) {
    return World.get().getAnimationManager().findById(parseInt(id))
}