import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'

export default class DeleteScriptEdgeMenuItem extends MenuItem {
    constructor(parent, nodeInput) {
        super({
            name: 'times',
            title: 'Delete selected edge',
            stateCode: 'CONFIRM_ACTION_DELETE_SCRIPT_EDGE',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.data = {nodeInput}
    }
}
