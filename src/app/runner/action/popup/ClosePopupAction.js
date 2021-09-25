import Action from '../Action.js'
import PopupMenuManager from '../../../manager/PopupMenuManager.js'

export default class ClosePopupAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_CLOSE_CONTENT_POPUP'

    /**
     * @override
     */
    static run() {
        PopupMenuManager.get().clear()
        return true
    }

}