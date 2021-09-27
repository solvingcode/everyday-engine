import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import ClipboardManager from '../../../manager/ClipboardManager.js'

export default class PasteMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Paste (Ctrl+V)',
            stateCode: 'ACTION_PASTE',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }

    /**
     * @override
     */
    isEnabled() {
        return !!ClipboardManager.get().getContent()
    }
}