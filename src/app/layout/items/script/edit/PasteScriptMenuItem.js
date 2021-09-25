import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class PasteScriptMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'paste',
            title: 'Paste',
            stateCode: 'ACTION_PASTE_SCRIPT',
            type: Layout.type.ICON_TEXT,
            zone: Layout.zone.WINDOW
        })
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid()
    }
}
