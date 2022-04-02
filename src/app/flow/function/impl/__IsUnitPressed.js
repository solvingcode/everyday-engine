import Window from '../../../core/Window.js'
import UnitHelper from '../../../utils/UnitHelper.js'
import World from '../../../world/World.js'

export default function (target) {
    const {mouse} = Window.get()
    return UnitHelper.isInsideWindowPosition(World.get(), target, mouse.position)
}