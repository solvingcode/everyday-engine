import World from '../../../world/World.js'

export default function (name) {
    return World.get().findUnitsByName(name)
}