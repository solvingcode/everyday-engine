import Action from '../Action.js'
import World from '../../../world/World.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import Vector from '../../../utils/Vector.js'
import UIButtonUnitInstant from '../../../unit/instant/type/internal/ui/UIButtonUnitInstant.js'

export default class AddUIButtonAction extends Action {

    static STATE = 'ACTION_ADD_UI_BUTTON'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const unit = world.createUnitInstant(UIButtonUnitInstant)
        const transformComponent = unit.getComponent(TransformComponent)
        transformComponent.setScale(new Vector())
        transformComponent.setLocalScale(new Vector({x: 1, y: 1}))
        return true
    }

}