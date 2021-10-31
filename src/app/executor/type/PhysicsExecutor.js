import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import Vector from '../../utils/Vector.js'
import ColliderComponent from '../../component/internal/ColliderComponent.js'
import TransformHelper from '../../utils/TransformHelper.js'

export default class PhysicsExecutor extends ComponentExecutor {

    constructor() {
        super([TransformComponent, ColliderComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const transformComponent = unit.getComponent(TransformComponent)
        if (transformComponent.getPhysicsUpdated()) {
            this.updatePosition(unit, transformComponent)
        }
    }

    /**
     * @param {Unit} unit
     * @param {TransformComponent} transformComponent
     */
    updatePosition(unit, transformComponent) {
        const world = World.get()
        const unitManager = world.getUnitManager()
        const parentUnit = unitManager.findParentUnit(unit)
        const physicsPosition = transformComponent.getPhysicsPosition()
        const localPosition = transformComponent.getLocalPosition()
        if (!parentUnit) {
            transformComponent.setLocalPosition(physicsPosition)
        } else {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            if (parentTransformComponent.getPhysicsUpdated()) {
                const parentPhysicsPositionGap = Vector.subtract(parentTransformComponent.getPhysicsPosition(),
                    parentTransformComponent.getPosition())
                const physicsPositionGap = Vector.subtract(transformComponent.getPhysicsPosition(),
                    transformComponent.getPosition())
                const correctionGap = Vector.subtract(physicsPositionGap, parentPhysicsPositionGap)
                const newLocalPosition = Vector.add(localPosition, correctionGap)
                transformComponent.setLocalPosition(newLocalPosition)
            } else {
                transformComponent.setLocalPosition(TransformHelper.getLocalPosition(physicsPosition, parentUnit))
            }
        }
        transformComponent.setPhysicsPositionSync(true)
        transformComponent.setPhysicsUpdated(false)
    }
}