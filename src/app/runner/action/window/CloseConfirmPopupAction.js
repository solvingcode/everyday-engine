import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'

export default class CloseConfirmPopupAction extends Action {

    static STATE = 'ACTION_CLOSE_CONFIRM_POPUP'

    /**
     * @override
     * @param {Mouse} mouse
     */
    static run(mouse) {
        StateManager.get().removeConfirmStates()
        return true
    }

}