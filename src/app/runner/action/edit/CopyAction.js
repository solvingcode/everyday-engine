import Action from '../Action.js'
import StateHelper from '../../../utils/StateHelper.js'

export default class CopyAction extends Action {

    /**
     * @override
     */
    static run() {
        StateHelper.startCopySectionState()
        return true
    }

}