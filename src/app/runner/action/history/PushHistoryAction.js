import Action from '../Action.js'
import History from '../../../core/History.js'
import World from '../../../world/World.js'
import Storage from '../../../core/Storage.js'

class PushHistoryAction extends Action {

    /**
     * Undo actions
     */
    static run() {
        History.get().push(Storage.type.ENTITY, World.get().getEntityManager().entities)
        return true
    }

}

export default PushHistoryAction