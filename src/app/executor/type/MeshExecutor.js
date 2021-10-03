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
            if(parentTransformComponent){
                const parentScale = parentTransformComponent.getScale()
                const newLocalScale = Vector.linearDivide(scale, parentScale)
                transformComponent.setLocalScale(newLocalScale)
            }
        }else{
            transformComponent.setLocalScale(scale)
        }
        meshComponent.setSize(TransformHelper.getSizeFromScale(scale))
        meshComponent.setGenerated(false)
        transformComponent.setLastScale(_.cloneDeep(transformComponent.getScale()))
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
        childUnits.forEach(cUnit => {
            const childMeshComponent = cUnit.getComponent(MeshComponent)
            const childTransformComponent = cUnit.getComponent(TransformComponent)
            this.updateLocalScale(cUnit, childTransformComponent, childMeshComponent)
        })
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            const parentScale = parentTransformComponent.getScale()
            const newScale = Vector.linearMultiply(localScale, parentScale)
            transformComponent.setScale(newScale)
        } else {
            transformComponent.setScale(localScale)
        }
        transformComponent.setLastLocalScale(_.cloneDeep(transformComponent.getLocalScale()))
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
            if(!childTransformComponent.getRotationUpdated()){
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
            if(parentTransformComponent){
                const parentRotation = parentTransformComponent.getRotation()
                transformComponent.setLocalRotation(rotation - parentRotation)
            }
        }
        meshComponent.setGenerated(false)
        transformComponent.setLastRotation(transformComponent.getRotation())
    }
}