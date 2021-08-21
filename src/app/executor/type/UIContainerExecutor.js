import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import UIContainerComponent from '../../component/internal/ui/UIContainerComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import ObjectHelper from '../../utils/ObjectHelper.js'
import Vector from '../../utils/Vector.js'

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
                transformComponent.setPosition(newPosition)
            }
            if (!ObjectHelper.isEqual(cameraScale, scale)) {
                transformComponent.setScale(_.cloneDeep(cameraScale))
            }
        }
    }

}