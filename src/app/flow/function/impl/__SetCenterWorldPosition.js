import UnitHelper from '../../../utils/UnitHelper.js'
import World from '../../../world/World.js'

export default function (target, vector) {
    UnitHelper.setCenterWorldPosition(World.get(), target, vector)
}