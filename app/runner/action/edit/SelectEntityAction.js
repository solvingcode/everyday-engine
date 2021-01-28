import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import EntitySelector from '../../../world/manager/EntitySelector.js'
import World from '../../../world/World.js'

/**
 * @class {SelectEntityAction}
 * Select the entity provided in the AppState
 */
class SelectEntityAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_SELECT_ENTITY'

    /**
     * @override
     */
    static run() {
        EntitySelector.get().unselectAll(World.get())
        const {bind} = StateManager.get().getNextProgressData(this.STATE)
        bind.select()
        return true
    }

}

export default SelectEntityAction