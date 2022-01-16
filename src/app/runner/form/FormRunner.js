import Runner from '../Runner.js'
import {KeyCode} from '../../core/Keyboard.js'
import StateManager from '../../state/StateManager.js'
import FormUpdateAction from '../action/form/FormUpdateAction.js'
import Window from '../../core/Window.js'
import FormHelper from '../../utils/FormHelper.js'

export default class FormRunner extends Runner {

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * @override
     */
    execute() {
        const stateManager = StateManager.get()
        const {keyboard} = Window.get()
        if (stateManager.isProgress(FormUpdateAction.STATE)) {
            const {item} = stateManager.getNextProgressData(FormUpdateAction.STATE)
            if ((FormHelper.isFieldChanged(item) && FormHelper.isAtClickChange(item.field)) ||
                keyboard.isKeyReleased(KeyCode.ENTER)) {
                stateManager.stopNextState(FormUpdateAction.STATE)
            }
        }
    }
}