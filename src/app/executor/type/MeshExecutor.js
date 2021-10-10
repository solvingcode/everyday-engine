import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import Vector from '../../utils/Vector.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import TransformHelper from '../../utils/TransformHelper.js'
import GeometryHelper from '../../utils/GeometryHelper.js'

export default class MeshExecutor extends ComponentExecutor {

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
        if (transformComponent.getLocalScaleUpdated()) {
            this.updateLocalScale(unit, transformComponent, meshComponent)
        }
        if (transformComponent.getRotationUpdated()) {
            this.updateRotation(unit, transformComponent, meshComponent)
        }
    }

    /**
     * @param {Unit} unit
     * @param {TransformComponent} transformComponent
     * @param {MeshComponent} meshComponent
     */
    updateScale(unit, transformComponent, meshComponent) {
        const unitManager = World.get().getUnitManager()
        const scale = transformComponent.getScale()
        const localPosition = transformComponent.getLocalPosition()
        const childUnits = unitManager.findChildUnits(unit)
        const parentUnit = unitManager.findParentUnit(unit)
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            if (parentTransformComponent) {
                const parentScale = parentTransformComponent.getScale()
                const newLocalScale = Vector.linearDivide(scale, parentScale)
                const newScale = Vector.linearMultiply(parentScale, newLocalScale.abs())
                transformComponent.setScale(newScale)
                transformComponent.setLocalScale(newLocalScale)

                // update localPosition after changing the scale
                const scaleRatio = Vector.linearDivide(newScale, scale)
                const sizeVector = Vector.divide(
                    Vector.subtract(
                        Vector.fromSize(TransformHelper.getSizeFromScale(parentScale)),
                        Vector.fromSize(TransformHelper.getSizeFromScale(newScale))
                        )
                    , 2)
                const correctionVector = Vector.linearMultiply(sizeVector, Vector.subtract(Vector.one(), scaleRatio))
                const newLocalPosition = Vector.add(Vector.linearMultiply(localPosition, scaleRatio), correctionVector)
                transformComponent.setLocalPosition(newLocalPosition)

            }
        } else {
            transformComponent.setLocalScale(scale)
        }
        meshComponent.setSize(TransformHelper.getSizeFromScale(transformComponent.getScale()))
        meshComponent.setGenerated(false)
        transformComponent.setLastScale(_.cloneDeep(transformComponent.getScale()))
        transformComponent.setLastLocalScale(_.cloneDeep(transformComponent.getLocalScale()))
        childUnits.forEach(cUnit => {
            const childTransformComponent = cUnit.getComponent(TransformComponent)
            const childMeshComponent = cUnit.getComponent(MeshComponent)
            this.updateScale(cUnit, childTransformComponent, childMeshComponent)
        })
    }

    /**
     * @param {Unit} unit
     * @param {TransformComponent} transformComponent
     * @param {MeshComponent} meshComponent
     */
    updateLocalScale(unit, transformComponent, meshComponent) {
        const unitManager = World.get().getUnitManager()
        const localScale = transformComponent.getLocalScale()
        const parentUnit = unitManager.findParentUnit(unit)
        const childUnits = unitManager.findChildUnits(unit)
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            const parentScale = parentTransformComponent.getScale()
            const newScale = Vector.linearMultiply(localScale, parentScale)
            const newLocalScale = Vector.linearDivide(newScale, parentScale)
            transformComponent.setScale(newScale)
            transformComponent.setLastLocalScale(newLocalScale)
        } else {
            transformComponent.setScale(localScale)
        }
        transformComponent.setLastScale(_.cloneDeep(transformComponent.getLocalScale()))
        transformComponent.setLastLocalScale(_.cloneDeep(transformComponent.getLocalScale()))
        childUnits.forEach(cUnit => {
            const childMeshComponent = cUnit.getComponent(MeshComponent)
            const childTransformComponent = cUnit.getComponent(TransformComponent)
            this.updateLocalScale(cUnit, childTransformComponent, childMeshComponent)
        })
    }

    /**
     * @param {Unit} unit
     * @param {TransformComponent} transformComponent
     * @param {MeshComponent} meshComponent
     */
    updateRotation(unit, transformComponent, meshComponent) {
        const unitManager = World.get().getUnitManager()
        const rotation = transformComponent.getRotation()
        const position = transformComponent.getPosition()
        const childUnits = unitManager.findChildUnits(unit)
        childUnits.forEach(cUnit => {
            const childTransformComponent = cUnit.getComponent(TransformComponent)
            if (!childTransformComponent.getRotationUpdated()) {
                const childPosition = childTransformComponent.getPosition()
                const childRotation = childTransformComponent.getRotation()
                const childLocalRotation = childTransformComponent.getLocalRotation()
                const newChildRotation = rotation + childLocalRotation
                childTransformComponent.setRotation(newChildRotation)
                childTransformComponent.setPosition(
                    GeometryHelper.rotatePoint(childPosition, newChildRotation - childRotation, position))
            }
        })
        const parentUnit = unitManager.findParentUnit(unit)
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            if (parentTransformComponent) {
                const parentRotation = parentTransformComponent.getRotation()
                transformComponent.setLocalRotation(rotation - parentRotation)
            }
        }
        meshComponent.setGenerated(false)
        transformComponent.setLastRotation(transformComponent.getRotation())
    }
}