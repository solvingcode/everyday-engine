import Action from '../Action.js'
import World from '../../../world/World.js'
import UIContainerUnitInstant from '../../../unit/instant/type/internal/ui/UIContainerUnitInstant.js'

export default class AddUIContainerAction extends Action {

    static STATE = 'ACTION_ADD_UI_CONTAINER'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        world.createUnitInstant(UIContainerUnitInstant)
        return true
    }

}