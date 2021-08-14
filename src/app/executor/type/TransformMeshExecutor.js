import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import Vector from '../../utils/Vector.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import TransformHelper from '../../utils/TransformHelper.js'

export default class TransformMeshExecutor extends ComponentExecutor {

    constructor() {
        super([TransformComponent, MeshComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const transformComponent = unit.getComponent(TransformComponent)
        const meshComponent = unit.getComponent(MeshComponent)
        if (transformComponent.getScaleUpdated()) {
            this.updateScale(unit, transformComponent, meshComponent)
        }
        if (transformComponent.getPositionUpdated()) {
            this.updatePosition(unit, transformComponent)
        }
        if (transformComponent.getLocalPositionUpdated()) {
            this.updateLocalPosition(unit, transformComponent)
        }
    }

    /**
     * @param {Unit} unit
     * @param {TransformComponent} transformComponent
     */
    updatePosition(unit, transformComponent) {
        const unitManager = World.get().getUnitManager()
        const position = transformComponent.getPosition()
        const childUnits = unitManager.findChildUnits(unit)
        childUnits.forEach(cUnit => {
            const childTransformComponent = cUnit.getComponent(TransformComponent)
            if(!childTransformComponent.getPositionUpdated()){
                const childLocalPosition = childTransformComponent.getLocalPosition()
                childTransformComponent.setPosition(Vector.add(position, childLocalPosition))
            }
        })
        const parentUnit = unitManager.findParentUnit(unit)
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            const parentPosition = parentTransformComponent.getPosition()
            transformComponent.setLocalPosition(Vector.subtract(position, parentPosition))
        }
        transformComponent.setPositionUpdated(false)
        transformComponent.setLocalPositionUpdated(false)
    }

    /**
     * @param {Unit} unit
     * @param {TransformComponent} transformComponent
     */
    updateLocalPosition(unit, transformComponent) {
        const unitManager = World.get().getUnitManager()
        const localPosition = transformComponent.getLocalPosition()
        const parentUnit = unitManager.findParentUnit(unit)
        const childUnits = unitManager.findChildUnits(unit)
        childUnits.forEach(cUnit => {
            cUnit.getComponent(TransformComponent).setLocalPositionUpdated(true)
        })
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            const parentPosition = parentTransformComponent.getPosition()
            transformComponent.setPosition(Vector.add(localPosition, parentPosition))
        } else {
            transformComponent.setPosition(localPosition)
        }
        transformComponent.setPositionUpdated(false)
        transformComponent.setLocalPositionUpdated(false)
    }

    /**
     * @param {Unit} unit
     * @param {TransformComponent} transformComponent
     * @param {MeshComponent} meshComponent
     */
    updateScale(unit, transformComponent, meshComponent) {
        const unitManager = World.get().getUnitManager()
        const scale = transformComponent.getScale()
        const childUnits = unitManager.findChildUnits(unit)
        childUnits.forEach(cUnit => {
            const childTransformComponent = cUnit.getComponent(TransformComponent)
            if(!childTransformComponent.getScaleUpdated()){
                const childMeshComponent = cUnit.getComponent(MeshComponent)
                const childLocalScale = childTransformComponent.getLocalScale()
                const newChildScale = Vector.linearMultiply(scale, childLocalScale)
                const childLocalPosition = childTransformComponent.getLocalPosition()
                const childScale = childTransformComponent.getScale()
                childTransformComponent.setScale(newChildScale)
                childTransformComponent.setLocalPosition(Vector.linearMultiply(childLocalPosition, Vector.linearDivide(newChildScale, childScale)))
                childMeshComponent.setSize(TransformHelper.getSizeFromScale(newChildScale))
                childMeshComponent.setGenerated(false)
            }
        })
        const parentUnit = unitManager.findParentUnit(unit)
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            const parentScale = parentTransformComponent.getScale()
            const newLocalScale = Vector.linearDivide(scale, parentScale)
            transformComponent.setLocalScale(newLocalScale)
        }
        meshComponent.setSize(TransformHelper.getSizeFromScale(scale))
        meshComponent.setGenerated(false)
        transformComponent.setScaleUpdated(false)
    }
}