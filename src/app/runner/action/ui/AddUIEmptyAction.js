import Action from '../Action.js'
import World from '../../../world/World.js'
import UIEmptyUnitInstant from '../../../unit/instant/type/internal/ui/UIEmptyUnitInstant.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import Vector from '../../../utils/Vector.js'

export default class AddUIEmptyAction extends Action {

    static STATE = 'ACTION_ADD_UI_EMPTY'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const unit = world.createUnitInstant(UIEmptyUnitInstant)
        const transformComponent = unit.getComponent(TransformComponent)
        transformComponent.setLocalScale(Vector.one())
        return true
    }

}