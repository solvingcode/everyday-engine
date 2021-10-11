import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'

export default class DeleteFunctionMenuItem extends MenuItem {
    constructor(parent, func) {
        super({
            name: 'trash',
            title: 'Remove selected function',
            stateCode: 'CONFIRM_ACTION_DELETE_SCRIPT_FUNCTION',
            type: Layout.type.ICON_TEXT,
            zone: parent ? parent.zone : Layout.zone.WINDOW
        })
        this.parent = parent
        this.data = {func}
    }
}
