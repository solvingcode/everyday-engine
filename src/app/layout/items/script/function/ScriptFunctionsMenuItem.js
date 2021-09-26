import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import ScriptFunctionListMenuItem from './list/ScriptFunctionListMenuItem.js'
import EditScriptFunctionFormMenuItem from './edit/EditScriptFunctionFormMenuItem.js'

export default class ScriptFunctionsMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'script-nodes',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        })
        this.parent = parent
        this.items = [
            new ScriptFunctionListMenuItem(this),
            new EditScriptFunctionFormMenuItem(this)
        ]
    }
}