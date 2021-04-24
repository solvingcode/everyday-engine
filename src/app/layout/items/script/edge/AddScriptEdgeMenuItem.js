import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class AddScriptEdgeMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'plus',
            title: 'Add new edge',
            stateCode: 'ACTION_ADD_SCRIPT_EDGE',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
    }
}
