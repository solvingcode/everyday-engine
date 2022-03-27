import UnitHelper from '../../../utils/UnitHelper.js'
import World from '../../../world/World.js'

export default function (target, vector) {
    UnitHelper.setWorldPosition(World.get(), target, vector)
}