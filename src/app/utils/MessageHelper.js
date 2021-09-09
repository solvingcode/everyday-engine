import AppState from '../state/AppState.js'

export default class MessageHelper {
    /**
     * @param {string} state
     * @return {string}
     */
    static getConfirmMessage(state) {
        switch (AppState.States[state]){
            case AppState.States.CONFIRM_ACTION_DELETE_START:
                return 'Do you want to remove selected Units ?'
            default:
                return 'Do you want to remove selected elements ?'
        }
    }
}