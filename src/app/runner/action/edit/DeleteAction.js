import Action from '../Action.js'
import StateHelper from '../../../utils/StateHelper.js'

export default class DeleteAction extends Action {

    /**
     * @override
     */
    static run() {
        StateHelper.startDeleteSectionState()
        return true
    }

}