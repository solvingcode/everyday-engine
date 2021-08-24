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
        const transformComponent = unit.getComponent(TransformComponent)
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
        const parentUnit = unitManager.findParentUnit(unit)
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            const parentPosition = parentTransformComponent.getPosition()
            transformComponent.setLocalPosition(Vector.subtract(position, parentPosition))
        }
        transformComponent.setLastPosition(_.cloneDeep(transformComponent.getPosition()))
        transformComponent.setLastLocalPosition(_.cloneDeep(transformComponent.getLocalPosition()))
        childUnits.forEach(cUnit => {
            const childTransformComponent = cUnit.getComponent(TransformComponent)
            if(!childTransformComponent.getPositionUpdated()){
                const childLocalPosition = childTransformComponent.getLocalPosition()
                childTransformComponent.setPosition(Vector.add(position, childLocalPosition))
                childTransformComponent.setLastPosition(_.cloneDeep(childTransformComponent.getPosition())) // block updating localPosition of childs
                this.updatePosition(cUnit, childTransformComponent)
            }
        })
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
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            const parentPosition = parentTransformComponent.getPosition()
            transformComponent.setPosition(Vector.add(localPosition, parentPosition))
        } else {
            transformComponent.setPosition(_.cloneDeep(localPosition))
        }
        transformComponent.setLastPosition(_.cloneDeep(transformComponent.getPosition()))
        transformComponent.setLastLocalPosition(_.cloneDeep(transformComponent.getLocalPosition()))
        childUnits.forEach(cUnit => {
            const childTransformComponent = cUnit.getComponent(TransformComponent)
            this.updateLocalPosition(cUnit, childTransformComponent)
        })
    }
}