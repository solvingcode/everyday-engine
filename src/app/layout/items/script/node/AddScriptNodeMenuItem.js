import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class AddScriptNodeMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'plus',
            title: 'Add new node',
            stateCode: 'ACTION_ADD_SCRIPT_NODE',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
    }
}
