import ComponentExecutor from './ComponentExecutor.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import World from '../../world/World.js'
import UIContainerComponent from '../../component/internal/ui/UIContainerComponent.js'
import Vector from '../../utils/Vector.js'
import UIElementComponent from '../../component/internal/ui/UIElementComponent.js'

export default class ScreenTransformExecutor extends ComponentExecutor {

    constructor() {
        super([TransformComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const camera = World.get().getCamera()
        const transformComponent = unit.getComponent(TransformComponent)
        const position = transformComponent.getPosition()
        let screenPosition = camera.toCanvasCoord(position)
        const uiContainerComponent = unit.getComponent(UIContainerComponent)
        const uiComponent = unit.getComponent(UIElementComponent)
        if(uiContainerComponent){
            screenPosition = new Vector({x: 0, y: 0})
            if(!transformComponent.getPosition().equals(screenPosition)){
                transformComponent.setLocalPosition(screenPosition)
            }
        }else if(uiComponent){
            screenPosition = transformComponent.getPosition()
        }
        transformComponent.setScreenPosition(camera.toCameraScale(screenPosition))
    }
}