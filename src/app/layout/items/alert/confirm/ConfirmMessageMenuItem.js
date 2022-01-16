import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import StateManager from '../../../../state/StateManager.js'
import MessageHelper from '../../../../utils/MessageHelper.js'

export default class ConfirmMessageMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'Confirm',
            stateCode: '',
            type: Layout.type.TEXT,
            zone: parent.zone
        })
    }

    /**
     * @override
     */
    doUpdate() {
        const confirmStates = StateManager.get().getConfirmStates()
        const confirmMessage = MessageHelper.getConfirmMessage(confirmStates[0])
        if(!this.text || this.text[0] !== confirmMessage){
            this.text = [confirmMessage]
            return true
        }
    }
}