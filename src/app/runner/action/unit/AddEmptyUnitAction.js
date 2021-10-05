import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetUnitInstant from '../../../unit/instant/type/internal/asset/AssetUnitInstant.js'
import Window from '../../../core/Window.js'

export default class AddEmptyUnitAction extends Action {

    static STATE = 'ACTION_ADD_EMPTY_UNIT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const {mouse} = Window.get()
        world.createUnitInstant(AssetUnitInstant, world.getWorldScalePosition(mouse.currentScenePosition), null, 'Empty')
        return true
    }

}