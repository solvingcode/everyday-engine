import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import Vector from '../../utils/Vector.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import TransformHelper from '../../utils/TransformHelper.js'
import UnitHelper from '../../utils/UnitHelper.js'

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
        if (transformComponent.getLocalScaleUpdated()) {
            this.updateLocalScale(unit, transformComponent, meshComponent)
        }
        if (transformComponent.getLocalRotationUpdated()) {
            this.updateLocalRotation(unit, transformComponent, meshComponent)
        }
    }

    /**
     * @param {Unit} unit
     * @param {TransformComponent} transformComponent
     * @param {MeshComponent} meshComponent
     */
    updateLocalScale(unit, transformComponent, meshComponent) {
        const world = World.get()
        const unitManager = world.getUnitManager()
        const localScale = transformComponent.getLocalScale()
        const parentUnit = unitManager.findParentUnit(unit)
        const childUnits = unitManager.findChildUnits(unit)
        let newScale
        if (parentUnit && parentUnit.getComponent(TransformComponent)) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            const parentScale = parentTransformComponent.getScale()
            newScale = Vector.linearMultiply(localScale, parentScale)
        } else {
            newScale = localScale
        }
        UnitHelper.setScale(world, unit, newScale)
        transformComponent.setLastLocalScale(_.cloneDeep(transformComponent.getLocalScale()))
        meshComponent.setSize(TransformHelper.getSizeFromScale(transformComponent.getScale()))
        meshComponent.setGenerated(false)
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
    updateLocalRotation(unit, transformComponent, meshComponent) {
        const world = World.get()
        const unitManager = world.getUnitManager()
        const localRotation = transformComponent.getLocalRotation()
        const childUnits = unitManager.findChildUnits(unit)
        const parentUnit = unitManager.findParentUnit(unit)
        let newRotation
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            if (parentTransformComponent) {
                const parentRotation = parentTransformComponent.getRotation()
                newRotation = localRotation + parentRotation
            }
        } else {
            newRotation = localRotation
        }
        UnitHelper.setRotation(world, unit, newRotation)
        transformComponent.setLastLocalRotation(transformComponent.getLocalRotation())
        childUnits.forEach(cUnit => {
            const childTransformComponent = cUnit.getComponent(TransformComponent)
            const childMeshComponent = cUnit.getComponent(MeshComponent)
            this.updateLocalRotation(cUnit, childTransformComponent, childMeshComponent)
        })
    }
}