import World from '../../../world/World.js'

export default function (target) {
    const tagPreference = World.get().getPreference().getTag()
    return target.getTagId() ? tagPreference.find(target.getTagId()).getName() : ''
}