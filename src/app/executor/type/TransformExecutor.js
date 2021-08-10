import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import Vector from '../../utils/Vector.js'

export default class TransformExecutor extends ComponentExecutor {

    constructor() {
        super([TransformComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const unitManager = World.get().getUnitManager()
        const transformComponent = unit.getComponent(TransformComponent)
        if(transformComponent.getPositionUpdated()){
            const position = transformComponent.getPosition()
            const childUnits = unitManager.findChildUnits(unit)
            childUnits.forEach(cUnit => {
                const childTransformComponent = cUnit.getComponent(TransformComponent)
                const childLocalPosition = childTransformComponent.getLocalPosition()
                childTransformComponent.setPosition(Vector.add(position, childLocalPosition))
            })
            const parentUnit = unitManager.findParentUnit(unit)
            if(parentUnit){
                const parentTransformComponent = parentUnit.getComponent(TransformComponent)
                const parentPosition = parentTransformComponent.getPosition()
                transformComponent.setLocalPosition(Vector.subtract(position, parentPosition))
            }
            transformComponent.setPositionUpdated(false)
        }
    }

}