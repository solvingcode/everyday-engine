import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import ScriptNodeMenuItem from './node/show/ScriptNodeMenuItem.js'
import ScriptEdgeMenuItem from './edge/show/ScriptEdgeMenuItem.js'

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
            new ScriptNodeMenuItem(this),
            new ScriptEdgeMenuItem(this)
        ]
    }
}