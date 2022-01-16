import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import UnitHelper from '../../../utils/UnitHelper.js'
import Storage from '../../../core/Storage.js'

export default class MoveUnitAction extends Action {

    static STATE = 'ACTION_MOVE_UNIT'

    /**
     * @override
     */
    static run(mouse, selectedUnits) {
        const {direction, step} = StateManager.get().getNextProgressData(this.STATE)
        const world = World.get()

        if(direction){
            if(selectedUnits.length === 1 && UnitHelper.isColliderEditing(selectedUnits[0])){
                UnitHelper.moveCollider(world, mouse, selectedUnits[0], direction, step)
            }else{
                UnitHelper.moveUnits(world, Storage.get(), mouse, selectedUnits, direction, step)
            }
        }
        return true
    }

}