import AppState from '../state/AppState.js'

export default class MessageHelper {
    /**
     * @param {string} state
     * @return {string}
     */
    static getConfirmMessage(state) {
        switch (AppState.States[state]){
            case AppState.States.CONFIRM_ACTION_DELETE_UNIT_START:
                return 'Do you want to remove selected units ?'
            case AppState.States.CONFIRM_ACTION_DELETE_FOLDER_START:
                return 'Do you want to remove selected folders ?'
            case AppState.States.CONFIRM_ACTION_DELETE_ASSET_START:
                return 'Do you want to remove selected assets ?'
            case AppState.States.CONFIRM_ACTION_DELETE_SCRIPT_NODE_START:
                return 'Do you want to remove selected nodes ?'
            case AppState.States.CONFIRM_ACTION_NEW_PROJECT_START:
                return 'Do you want to start new project (Unsaved modification will be lost!) ?'
            default:
                return 'Do you want to remove selected elements ?'
        }
    }
}