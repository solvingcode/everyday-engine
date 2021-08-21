import Action from '../Action.js'
import World from '../../../world/World.js'
import UIImageUnitInstant from '../../../unit/instant/type/internal/ui/UIImageUnitInstant.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import Vector from '../../../utils/Vector.js'

export default class AddUIImageAction extends Action {

    static STATE = 'ACTION_ADD_UI_IMAGE'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const unit = world.createUnitInstant(UIImageUnitInstant)
        const transformComponent = unit.getComponent(TransformComponent)
        transformComponent.setScale(new Vector())
        transformComponent.setLocalScale(new Vector({x: 1, y: 1}))
        return true
    }

}