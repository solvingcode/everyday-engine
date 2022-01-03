import Action from '../Action.js'
import World from '../../../world/World.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import Vector from '../../../utils/Vector.js'
import UITransformComponent from '../../../component/internal/ui/UITransformComponent.js'

export default class AlignParentAction extends Action {

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedUnits = world.getUnitManager().getAllSelected()
        selectedUnits.forEach(selectedUnit => {
            const transformComponent = selectedUnit.getComponent(TransformComponent)
            const uiTransformComponent = selectedUnit.getComponent(UITransformComponent)
            if (transformComponent) {
                transformComponent.setLocalPosition(new Vector({x: 0, y: 0}))
                transformComponent.setLocalScale(new Vector({x: 1, y: 1}))
            }
            if (uiTransformComponent) {
                uiTransformComponent.setLastAnchorMin(null)
                uiTransformComponent.setLastAnchorMax(null)
            }
        })
        return true
    }

}