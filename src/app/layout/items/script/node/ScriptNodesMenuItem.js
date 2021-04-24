import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import ScriptNodeActionsMenuItem from './ScriptNodeActionsMenuItem.js'
import ScriptNodeListMenuItem from './ScriptNodeListMenuItem.js'

export default class ScriptNodesMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'script-nodes',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        })
        this.parent = parent
        this.items = [
            new ScriptNodeActionsMenuItem(this),
            new ScriptNodeListMenuItem(this)
        ]
    }
}