import Action from '../Action.js'
import History from '../../../core/History.js'

class UndoAction extends Action {

    static run() {
        History.get().restore()
        return true
    }

}

export default UndoAction