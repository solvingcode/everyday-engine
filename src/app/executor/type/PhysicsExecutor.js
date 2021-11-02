import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import Vector from '../../utils/Vector.js'
import ColliderComponent from '../../component/internal/ColliderComponent.js'
import TransformHelper from '../../utils/TransformHelper.js'
import MeshComponent from '../../component/internal/MeshComponent.js'

export default class PhysicsExecutor extends ComponentExecutor {

    constructor() {
        super([TransformComponent, ColliderComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const transformComponent = unit.getComponent(TransformComponent)
        const meshComponent = unit.getComponent(MeshComponent)
        if (transformComponent.getPhysicsPositionUpdated()) {
            this.updatePosition(unit, transformComponent)
        }
        if (transformComponent.getPhysicsRotationUpdated()) {
            this.updateRotation(unit, transformComponent, meshComponent)
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
            if (parentTransformComponent.getPhysicsPositionUpdated()) {
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
        transformComponent.setPhysicsPositionUpdated(false)
    }

    /**
     * @param {Unit} unit
     * @param {TransformComponent} transformComponent
     * @param {MeshComponent} meshComponent
     */
    updateRotation(unit, transformComponent, meshComponent) {
        const world = World.get()
        const unitManager = world.getUnitManager()
        const parentUnit = unitManager.findParentUnit(unit)
        const physicsRotation = transformComponent.getPhysicsRotation()
        const localRotation = transformComponent.getLocalRotation()
        if (!parentUnit) {
            transformComponent.setLocalRotation(physicsRotation)
        } else {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            if (parentTransformComponent.getPhysicsRotationUpdated()) {
                const parentPhysicsRotationGap = parentTransformComponent.getPhysicsRotation() -
                    parentTransformComponent.getRotation()
                const physicsRotationGap = transformComponent.getPhysicsRotation() -
                    transformComponent.getRotation()
                const correctionGap = physicsRotationGap - parentPhysicsRotationGap
                const newLocalRotation = localRotation + correctionGap
                transformComponent.setLocalRotation(newLocalRotation)
            } else {
                transformComponent.setLocalRotation(TransformHelper.getLocalRotation(physicsRotation, parentUnit))
            }
        }
        transformComponent.setRotation(physicsRotation, true)
        meshComponent.setGenerated(false)
        transformComponent.setPhysicsRotationSync(true)
        transformComponent.setPhysicsRotationUpdated(false)
    }
}