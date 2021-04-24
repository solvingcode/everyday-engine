import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class DeleteScriptEdgeMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'trash-alt',
            title: 'Delete selected edge',
            stateCode: 'ACTION_DELETE_SCRIPT_EDGE',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
    }
}
