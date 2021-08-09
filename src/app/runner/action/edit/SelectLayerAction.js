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
        const world = World.get()
        const {bind} = StateManager.get().getNextProgressData(this.STATE)
        world.getSceneManager().unSelectAll()
        UnitSelector.get().unselectAll(World.get())
        bind.select()
        return true
    }

}