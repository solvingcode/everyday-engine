import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import Vector from '../../utils/Vector.js'
import UnitHelper from '../../utils/UnitHelper.js'

export default class TransformExecutor extends ComponentExecutor {

    constructor() {
        super([TransformComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const transformComponent = unit.getComponent(TransformComponent)
        if (transformComponent.getLocalPositionUpdated() || this.isAxisUpdated(unit, transformComponent)) {
            this.updateLocalPosition(unit, transformComponent)
        }
    }

    /**
     * @param {Unit} unit
     * @param {TransformComponent} transformComponent
     * @return {boolean}
     */
    isAxisUpdated(unit, transformComponent){
        const world = World.get()
        const actualLocalAxisPosition = transformComponent.getLocalAxisPosition()
        return !actualLocalAxisPosition.equals(UnitHelper.getAxisLocalPosition(world, unit))
    }

    /**
     * @param {Unit} unit
     * @param {TransformComponent} transformComponent
     */
    updateLocalPosition(unit, transformComponent) {
        const world = World.get()
        const unitManager = world.getUnitManager()
        const axisLocalPosition = UnitHelper.getAxisLocalPosition(world, unit)
        const parentUnit = unitManager.findParentUnit(unit)
        const childUnits = unitManager.findChildUnits(unit)
        let newPosition
        if (parentUnit && parentUnit.getComponent(TransformComponent)) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            const parentPosition = parentTransformComponent.getPosition()
            newPosition = Vector.add(axisLocalPosition, parentPosition)
        } else {
            newPosition = _.cloneDeep(axisLocalPosition)
        }
        UnitHelper.setPosition(world, unit, newPosition)
        transformComponent.setLocalAxisPosition(axisLocalPosition)
        transformComponent.setLastLocalPosition(_.cloneDeep(transformComponent.getLocalPosition()))
        childUnits.forEach(cUnit => {
            const childTransformComponent = cUnit.getComponent(TransformComponent)
            this.updateLocalPosition(cUnit, childTransformComponent)
        })
    }
}