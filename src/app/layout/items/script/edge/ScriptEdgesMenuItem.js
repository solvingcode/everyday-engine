import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import ScriptEdgeListMenuItem from './ScriptEdgeListMenuItem.js'
import ScriptEdgeActionsMenuItem from './ScriptEdgeActionsMenuItem.js'

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
            new ScriptEdgeActionsMenuItem(this),
            new ScriptEdgeListMenuItem(this)
        ]
    }
}