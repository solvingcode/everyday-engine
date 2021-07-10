import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import ScriptEdgeMenuItem from './edge/show/ScriptEdgeMenuItem.js'
import ScriptNodeVarsListMenuItem from './node/list/ScriptNodeVarsListMenuItem.js'

export default class ScriptShowMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'script-nodes',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        })
        this.parent = parent
        this.items = [
            new ScriptEdgeMenuItem(this),
            new ScriptNodeVarsListMenuItem(this)
        ]
    }
}