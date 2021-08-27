import Action from '../Action.js'
import World from '../../../world/World.js'
import UIEmptyUnitInstant from '../../../unit/instant/type/internal/ui/UIEmptyUnitInstant.js'

export default class AddUIEmptyAction extends Action {

    static STATE = 'ACTION_ADD_UI_EMPTY'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        world.createUnitInstant(UIEmptyUnitInstant)
        return true
    }

}