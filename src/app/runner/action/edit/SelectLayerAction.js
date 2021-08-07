import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import UnitSelector from '../../../selector/UnitSelector.js'
import Unit from '../../../unit/Unit.js'

export default class SelectLayerAction extends Action {

    static STATE = 'ACTION_SELECT_LAYER_ELEMENT'

    /**
     * @override
     */
    static run() {
        const {object} = StateManager.get().getNextProgressData(this.STATE)
        if (object instanceof Unit) {
            UnitSelector.get().unselectAll(World.get())
            object.select()
        }
        return true
    }

}