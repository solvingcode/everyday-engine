import World from '../../../world/World.js'

export default function (target) {
    World.get().getUnitManager().setVisibilityUnit(target, false)
}