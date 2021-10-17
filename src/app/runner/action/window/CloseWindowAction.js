import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import WindowManager from '../../../manager/WindowManager.js'

export default class CloseWindowAction extends Action {

    static STATE = 'ACTION_CLOSE_WINDOW'

    /**
     * @override
     * @param {Mouse} mouse
     */
    static run(mouse) {
        const {window} = StateManager.get().getNextProgressData(this.STATE)
        WindowManager.get().closeWindow(window)
        return true
    }

}