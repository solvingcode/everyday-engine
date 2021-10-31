import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import UIContainerComponent from '../../component/internal/ui/UIContainerComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import ObjectHelper from '../../utils/ObjectHelper.js'
import Vector from '../../utils/Vector.js'
import TransformHelper from '../../utils/TransformHelper.js'

export default class UIContainerExecutor extends ComponentExecutor {

    constructor() {
        super([UIContainerComponent, TransformComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const camera = world.getCamera()
        const cameraUnit = camera.getUnit(world.getUnitManager())
        if(cameraUnit){
            const cameraPosition = cameraUnit.getComponent(TransformComponent).getPosition()
            const cameraScale = cameraUnit.getComponent(TransformComponent).getScale()
            const transformComponent = unit.getComponent(TransformComponent)
            const position = transformComponent.getPosition()
            const scale = transformComponent.getScale()
            const newPosition = new Vector({x: cameraPosition.getX(), y: cameraPosition.getY()})
            if (!ObjectHelper.isEqual(position, newPosition)) {
                transformComponent.setLocalPosition(TransformHelper
                    .getLocalPosition(newPosition, world.getUnitManager().findParentUnit(unit)))
            }
            if (!ObjectHelper.isEqual(cameraScale, scale)) {
                transformComponent.setLocalScale(TransformHelper
                    .getLocalScale(cameraScale, world.getUnitManager().findParentUnit(unit)))
            }
        }
    }

}