import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import Vector from '../../../utils/Vector.js'
import GUIMoveXComponent from '../../../component/internal/gui/move/GUIMoveXComponent.js'
import UnitHelper from '../../../utils/UnitHelper.js'
import GUIMoveYComponent from '../../../component/internal/gui/move/GUIMoveYComponent.js'
import GUIMoveFreeComponent from '../../../component/internal/gui/move/GUIMoveFreeComponent.js'
import World from '../../../world/World.js'
import Storage from '../../../core/Storage.js'

class MoveAction extends Action {

    static STATE = 'ACTION_MOVE'

    /**
     * Move selected units
     * @param {Mouse} mouse
     * @param {Unit[]} selectedUnits
     */
    static run(mouse, selectedUnits) {
        const world = World.get()
        const {unit} = StateManager.get().getNextProgressData(this.STATE)
        let direction

        if(unit.getComponent(GUIMoveFreeComponent)){
            direction = new Vector({x: 1, y: 1})
        }else if(unit.getComponent(GUIMoveXComponent)){
            direction = new Vector({x: 1, y: 0})
        }else if(unit.getComponent(GUIMoveYComponent)){
            direction = new Vector({x: 0, y: 1})
        }

        if(direction){
            if(selectedUnits.length === 1 && UnitHelper.isColliderEditing(selectedUnits[0])){
                UnitHelper.moveCollider(world, mouse, selectedUnits[0], direction)
            }else{
                UnitHelper.moveUnits(world, Storage.get(), mouse, selectedUnits, direction)
            }
        }
        return false
    }

}

MoveAction.instance = null

export default MoveAction