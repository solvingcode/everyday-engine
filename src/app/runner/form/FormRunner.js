import Runner from '../Runner.js'
import {KeyCode} from '../../core/Keyboard.js'
import StateManager from '../../state/StateManager.js'
import FormUpdateAction from '../action/form/FormUpdateAction.js'

export default class FormRunner extends Runner {

    /**
     * @override
     */
    isHandle(window) {
        return window.keyboard.isKeyReleased(KeyCode.ENTER)
    }

    /**
     * @override
     */
    execute() {
        const stateManager = StateManager.get()
        if(stateManager.isProgress(FormUpdateAction.STATE)){
            stateManager.stopNextState(FormUpdateAction.STATE)
        }
    }
}