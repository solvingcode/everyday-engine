import Action from '../Action.js'
import StateHelper from '../../../utils/StateHelper.js'
import StateManager from '../../../state/StateManager.js'

export default class MoveKeyAction extends Action {

    static STATE = 'ACTION_MOVE_KEY'

    /**
     * @override
     */
    static run() {
        StateHelper.startMoveSectionState(StateManager.get().getNextProgressData(this.STATE))
        return true
    }

}