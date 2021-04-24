import Layout from '../../../Layout.js'
import MenuItem from '../../../MenuItem.js'
import AddScriptNodeMenuItem from './AddScriptNodeMenuItem.js'
import DeleteScriptNodeMenuItem from './DeleteScriptNodeMenuItem.js'

export default class ScriptNodeActionsMenuItem  extends MenuItem {
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.PANEL_ACTION,
            zone: parent.zone
        })
        this.parent = parent
        this.items = [
            new AddScriptNodeMenuItem(this),
            new DeleteScriptNodeMenuItem(this)
        ]
    }
}