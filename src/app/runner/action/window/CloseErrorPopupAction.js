import Action from '../Action.js'
import ExceptionHandler from '../../../exception/ExceptionHandler.js'

export default class CloseErrorPopupAction extends Action {

    /**
     * @override
     * @param {Mouse} mouse
     */
    static run(mouse) {
        ExceptionHandler.get().popLastError()
        return true
    }

}