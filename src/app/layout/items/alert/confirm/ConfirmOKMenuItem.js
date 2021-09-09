import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import StateManager from '../../../../state/StateManager.js'
import CloseConfirmPopupAction from '../../../../runner/action/window/CloseConfirmPopupAction.js'

export default class ConfirmOKMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     */
    constructor(parent) {
        super({
            name: 'check',
            title: 'OK',
            stateCode: '',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
    }

    /**
     * @override
     */
    update() {
        const stateManager = StateManager.get()
        const confirmStates = stateManager.getConfirmStates()
        if (confirmStates) {
            const {state: nextState, data: confirmData} = stateManager.confirmState(confirmStates[0])
            if (this.stateCode !== nextState) {
                this.stateCode = nextState
                this.postStateCode = CloseConfirmPopupAction.STATE
            }
            if (this.data !== confirmData) {
                this.data = confirmData
            }
        }
    }
}