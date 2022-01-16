import Action from '../Action.js'
import StateHelper from '../../../utils/StateHelper.js'

export default class PasteAction extends Action {

    /**
     * @override
     */
    static run() {
        StateHelper.startPasteSectionState()
        return true
    }

}