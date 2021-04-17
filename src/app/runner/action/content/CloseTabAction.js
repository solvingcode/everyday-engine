import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import TabManager from '../../../manager/TabManager.js'

export default class CloseTabAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_CLOSE_TAB'

    /**
     * @override
     */
    static run() {
        const {bind} = StateManager.get().getNextProgressData(this.STATE)
        TabManager.get().remove(bind)
        return true
    }

}