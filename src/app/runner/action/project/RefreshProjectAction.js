import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import Window from '../../../core/Window.js'

export default class RefreshProjectAction extends Action {

    static STATE = 'ACTION_REFRESH'

    /**
     * @override
     */
    static run() {
        try {
            StateManager.get().stopAllAction()
            Window.get().clear()
        } catch (error) {
            StateManager.get().reset()
        }
        return false
    }

}