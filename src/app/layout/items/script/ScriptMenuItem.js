import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import World from '../../../world/World.js'
import ScriptShowMenuItem from './ScriptShowMenuItem.js'
import AddScriptNodeInputListMenuItem from './edge/list/AddScriptNodeInputListMenuItem.js'
import ScriptFunctionsMenuItem from './function/ScriptFunctionsMenuItem.js'
import EditScriptFormMenuItem from './edit/EditScriptFormMenuItem.js'
import ScriptVariablesMenuItem from './variable/ScriptVariablesMenuItem.js'

export default class ScriptMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Script',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new EditScriptFormMenuItem(this),
            new ScriptFunctionsMenuItem(this),
            new ScriptVariablesMenuItem(),
            new ScriptShowMenuItem(this),
            new AddScriptNodeInputListMenuItem(this)
        ]
    }

    /**
     * @override
     */
    isValid() {
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        return super.isValid() && script
    }
}