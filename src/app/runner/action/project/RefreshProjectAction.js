import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'

export default class RefreshProjectAction extends Action {

    static STATE = 'ACTION_REFRESH'

    /**
     * @override
     */
    static run() {
        try {
            StateManager.get().stopAllAction()
        } catch (error) {
            StateManager.get().reset()
        }
        return false
    }

}