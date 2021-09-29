import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'

export default class DeleteMaskAction extends Action {

    static STATE = 'ACTION_DELETE_MASK'

    /**
     * @override
     */
    static run() {
        const mask = StateManager.get().getNextProgressData(this.STATE)
        World.get().getPreference().getMaskGroup().delete(mask)
        return true
    }

}