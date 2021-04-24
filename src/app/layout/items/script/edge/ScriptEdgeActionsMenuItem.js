import Layout from '../../../Layout.js'
import MenuItem from '../../../MenuItem.js'
import AddScriptEdgeMenuItem from './AddScriptEdgeMenuItem.js'
import DeleteScriptEdgeMenuItem from './DeleteScriptEdgeMenuItem.js'

export default class ScriptEdgeActionsMenuItem  extends MenuItem {
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.PANEL_ACTION,
            zone: parent.zone
        })
        this.parent = parent
        this.items = [
            new AddScriptEdgeMenuItem(this),
            new DeleteScriptEdgeMenuItem(this)
        ]
    }
}