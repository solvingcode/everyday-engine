import Layout from '../../../Layout.js'
import MenuItem from '../../../MenuItem.js'
import StateManager from '../../../../state/StateManager.js'
import ConfirmMessageMenuItem from './ConfirmMessageMenuItem.js'
import ConfirmTitleMenuItem from './ConfirmTitleMenuItem.js'
import ConfirmCloseMenuItem from './ConfirmCloseMenuItem.js'
import ConfirmOKMenuItem from './ConfirmOKMenuItem.js'

export default class ConfirmPopupMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'error-popup',
            stateCode: '',
            zone: Layout.zone.WINDOW,
            type: Layout.type.WRAPPER
        })
        this.items = [
            new ConfirmTitleMenuItem(this),
            new ConfirmMessageMenuItem(this),
            new ConfirmCloseMenuItem(this),
            new ConfirmOKMenuItem(this)
        ]
    }

    /**
     * @override
     */
    isValid() {
        return !!StateManager.get().getConfirmStates().length
    }
}