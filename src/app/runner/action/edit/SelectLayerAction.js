import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import UnitSelector from '../../../selector/UnitSelector.js'

export default class SelectLayerAction extends Action {

    static STATE = 'ACTION_SELECT_LAYER_ELEMENT'

    /**
     * @override
     */
    static run() {
        const {unit} = StateManager.get().getNextProgressData(this.STATE)
        UnitSelector.get().unselectAll(World.get())
        unit.select()
        return true
    }

}