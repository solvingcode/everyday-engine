import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class DeleteScriptNodeMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'trash-alt',
            title: 'Delete selected node',
            stateCode: 'ACTION_DELETE_SCRIPT_NODE',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
    }
}
