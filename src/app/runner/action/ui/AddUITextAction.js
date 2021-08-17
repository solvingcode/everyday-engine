import Action from '../Action.js'
import World from '../../../world/World.js'
import UITextUnitInstant from '../../../unit/instant/type/internal/ui/UITextUnitInstant.js'

export default class AddUITextAction extends Action {

    static STATE = 'ACTION_ADD_UI_TEXT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        world.createUnitInstant(UITextUnitInstant)
        return true
    }

}