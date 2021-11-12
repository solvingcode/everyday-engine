import Action from '../Action.js'
import World from '../../../world/World.js'
import UITextUnitInstant from '../../../unit/instant/type/internal/ui/UITextUnitInstant.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import Vector from '../../../utils/Vector.js'

export default class AddUITextAction extends Action {

    static STATE = 'ACTION_ADD_UI_TEXT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const unit = world.createUnitInstant(UITextUnitInstant)
        const transformComponent = unit.getComponent(TransformComponent)
        transformComponent.setLocalScale(Vector.one())
        return true
    }

}