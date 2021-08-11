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
        if(transformComponent.getPositionUpdated()){
            this.updatePosition(unit, transformComponent)
        }
        if(transformComponent.getScaleUpdated()){
            this.updateScale(unit, transformComponent, meshComponent)
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
            const childMeshComponent = cUnit.getComponent(MeshComponent)
            const childLocalScale = childTransformComponent.getLocalScale()
            const newChildScale = Vector.linearMultiply(scale, childLocalScale)
            childTransformComponent.setScale(newChildScale)
            childMeshComponent.setSize(TransformHelper.getSizeFromScale(newChildScale))
            childMeshComponent.setGenerated(false)
        })
        const parentUnit = unitManager.findParentUnit(unit)
        if(parentUnit){
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