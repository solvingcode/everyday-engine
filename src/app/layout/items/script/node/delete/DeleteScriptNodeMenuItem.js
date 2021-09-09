import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'

export default class DeleteScriptNodeMenuItem extends MenuItem {
    constructor(parent, node) {
        super({
            name: 'times',
            title: 'Delete selected node',
            stateCode: 'CONFIRM_ACTION_DELETE_SCRIPT_NODE',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {node}
    }
}
