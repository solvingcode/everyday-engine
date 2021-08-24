import Action from '../Action.js'
import World from '../../../world/World.js'
import UIImageUnitInstant from '../../../unit/instant/type/internal/ui/UIImageUnitInstant.js'

export default class AddUIImageAction extends Action {

    static STATE = 'ACTION_ADD_UI_IMAGE'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        world.createUnitInstant(UIImageUnitInstant)
        return true
    }

}