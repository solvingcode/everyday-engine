import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import AddScriptEdgeMenuItem from './add/AddScriptEdgeMenuItem.js'

export default class ScriptEdgesMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'script-nodes',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        })
        this.parent = parent
        this.items = [
            new AddScriptEdgeMenuItem(this)
        ]
    }
}