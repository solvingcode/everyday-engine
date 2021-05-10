import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import AddScriptNodeMenuItem from './add/AddScriptNodeMenuItem.js'

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
            new AddScriptNodeMenuItem(this)
        ]
    }
}