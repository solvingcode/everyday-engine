import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import UnitSelector from '../../../selector/UnitSelector.js'

export default class DeleteComponentAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_DELETE_COMPONENT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const {bind} = StateManager.get().getNextProgressData(this.STATE)
        const selectedUnit = UnitSelector.get().getFirstSelected(world)
        selectedUnit.deleteComponent(bind.getId())
        return true
    }

}