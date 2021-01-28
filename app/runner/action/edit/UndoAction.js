import Action from '../Action.js'
import History from '../../../core/History.js'
import World from '../../../world/World.js'
import Storage from '../../../core/Storage.js'

class UndoAction extends Action {

    /**
     * Undo actions
     */
    static run() {
        const data = History.get().pop()
        data && World.get().getEntityManager().replace(data.fetch(Storage.type.ENTITY))
        return true
    }

}

export default UndoAction