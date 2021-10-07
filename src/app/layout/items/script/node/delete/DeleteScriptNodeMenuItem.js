import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'

export default class DeleteScriptNodeMenuItem extends MenuItem {
    constructor(parent, node) {
        super({
            name: 'times',
            title: 'Delete node',
            stateCode: 'CONFIRM_ACTION_DELETE_SCRIPT_NODE',
            type: Layout.type.ICON_TEXT,
            zone: parent ? parent.zone : Layout.zone.WINDOW
        })
        this.parent = parent
        this.data = {node}
    }
}
