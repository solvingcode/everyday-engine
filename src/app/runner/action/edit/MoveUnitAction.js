import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import UnitHelper from '../../../utils/UnitHelper.js'

export default class MoveUnitAction extends Action {

    static STATE = 'ACTION_UNIT_MOVE'

    /**
     * @override
     */
    static run(mouse) {
        const {units, direction, step} = StateManager.get().getNextProgressData(this.STATE)
        const world = World.get()

        if(direction){
            units.forEach(unit => {
                if(UnitHelper.isColliderEditing(unit)){
                    UnitHelper.moveCollider(world, unit, step, direction)
                }else{
                    UnitHelper.moveUnit(world, unit, step, direction)
                }
            })
        }
        return true
    }

}