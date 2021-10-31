import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import Vector from '../../utils/Vector.js'
import TransformHelper from '../../utils/TransformHelper.js'
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
        const position = transformComponent.getPosition()
        const parentUnit = unitManager.findParentUnit(unit)
        const childUnits = unitManager.findChildUnits(unit)
        let newPosition
        if (parentUnit && parentUnit.getComponent(TransformComponent)) {
            const parentTransformComponent = parentUnit.getComponent(TransformComponent)
            const parentPosition = parentTransformComponent.getPosition()
            newPosition = Vector.add(localPosition, parentPosition)
        } else {
            newPosition = _.cloneDeep(localPosition)
        }
        if(!_.isEqual(newPosition, transformComponent.getPosition())){
            if(UnitHelper.hasPhysics(world, unit) && !transformComponent.getPhysicsPositionSync()){
                TransformHelper.translate(world, unit, Vector.subtract(newPosition, position))
            }else{
                transformComponent.setPosition(newPosition, true)
            }
        }
        transformComponent.setLastLocalPosition(_.cloneDeep(transformComponent.getLocalPosition()))
        childUnits.forEach(cUnit => {
            const childTransformComponent = cUnit.getComponent(TransformComponent)
            this.updateLocalPosition(cUnit, childTransformComponent)
        })
    }
}