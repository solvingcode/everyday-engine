import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import Vector from '../../utils/Vector.js'
import TransformHelper from '../../utils/TransformHelper.js'

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
        const world = World.get()
        const unitManager = World.get().getUnitManager()
        const position = transformComponent.getPosition()
        const childUnits = unitManager.findChildUnits(unit)
        const parentUnit = unitManager.findParentUnit(unit)
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            if (parentTransformComponent) {
                const parentPosition = parentTransformComponent.getPosition()
                transformComponent.setLocalPosition(Vector.subtract(position, parentPosition))
            }
        }
        transformComponent.setLastPosition(_.cloneDeep(transformComponent.getPosition()))
        transformComponent.setLastLocalPosition(_.cloneDeep(transformComponent.getLocalPosition()))
        childUnits.forEach(cUnit => {
            const childTransformComponent = cUnit.getComponent(TransformComponent)
            if (!childTransformComponent.getPositionUpdated()) {
                const childLocalPosition = childTransformComponent.getLocalPosition()
                const newChildPosition = Vector.add(position, childLocalPosition)
                TransformHelper.translateTo(world, cUnit, newChildPosition)
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
        const world = World.get()
        const unitManager = world.getUnitManager()
        const localPosition = transformComponent.getLocalPosition()
        const parentUnit = unitManager.findParentUnit(unit)
        const childUnits = unitManager.findChildUnits(unit)
        let newPosition
        if (parentUnit) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            const parentPosition = parentTransformComponent.getPosition()
            newPosition = Vector.add(localPosition, parentPosition)
        } else {
            newPosition = _.cloneDeep(localPosition)
        }
        TransformHelper.translateTo(world, unit, newPosition)
        transformComponent.setLastPosition(_.cloneDeep(transformComponent.getPosition()))
        transformComponent.setLastLocalPosition(_.cloneDeep(transformComponent.getLocalPosition()))
        childUnits.forEach(cUnit => {
            const childTransformComponent = cUnit.getComponent(TransformComponent)
            this.updateLocalPosition(cUnit, childTransformComponent)
        })
    }
}