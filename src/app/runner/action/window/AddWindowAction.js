import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import WindowManager from '../../../manager/WindowManager.js'

export default class AddWindowAction extends Action {

    static STATE = 'ACTION_ADD_WINDOW'

    /**
     * @override
     * @param {Mouse} mouse
     */
    static run(mouse) {
        const {window} = StateManager.get().getNextProgressData(this.STATE)
        WindowManager.get().addWindow(window)
        return true
    }

}