import Action from '../Action.js'
import World from '../../../world/World.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import Vector from '../../../utils/Vector.js'
import TextUnitInstant from '../../../unit/instant/type/internal/text/TextUnitInstant.js'
import Window from '../../../core/Window.js'

export default class AddTextUnitAction extends Action {

    static STATE = 'ACTION_ADD_TEXT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const {mouse} = Window.get()
        const unit = world.createChildUnitInstant(TextUnitInstant, null)
        const currentScenePosition = world.getWorldScalePosition(mouse.currentScenePosition)
        const transformComponent = unit.getComponent(TransformComponent)
        transformComponent.setLocalScale(Vector.one())
        transformComponent.setLocalPosition(currentScenePosition)
        return true
    }

}