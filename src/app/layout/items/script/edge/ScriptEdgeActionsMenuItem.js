import Layout from '../../../Layout.js'
import MenuItem from '../../../MenuItem.js'
import AddScriptEdgeMenuItem from './AddScriptEdgeMenuItem.js'

export default class ScriptEdgeActionsMenuItem  extends MenuItem {
    constructor(parent) {
        super({
            name: 'Add new edge',
            stateCode: '',
            type: Layout.type.PANEL,
            zone: parent.zone
        })
        this.parent = parent
        this.items = [
            new AddScriptEdgeMenuItem(this)
        ]
    }
}