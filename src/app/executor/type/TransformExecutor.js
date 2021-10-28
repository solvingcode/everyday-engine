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
        if (transformComponent.getLocalPositionUpdated()) {
            this.updateLocalPosition(unit, transformComponent)
        }
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
        TransformHelper.translateToWorldPosition(world, unit, newPosition)
        transformComponent.setLastLocalPosition(_.cloneDeep(transformComponent.getLocalPosition()))
        childUnits.forEach(cUnit => {
            const childTransformComponent = cUnit.getComponent(TransformComponent)
            this.updateLocalPosition(cUnit, childTransformComponent)
        })
    }
}