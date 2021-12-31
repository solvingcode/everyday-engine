import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import World from '../../../world/World.js'
import AddScriptNodeInputListMenuItem from './edge/list/AddScriptNodeInputListMenuItem.js'
import ScriptFunctionsMenuItem from './function/ScriptFunctionsMenuItem.js'
import EditScriptFormMenuItem from './edit/EditScriptFormMenuItem.js'
import ScriptVariablesMenuItem from './variable/ScriptVariablesMenuItem.js'
import ScriptAnimationsMenuItem from './animation/ScriptAnimationsMenuItem.js'
import ScriptInputsMenuItem from './inputs/ScriptInputsMenuItem.js'
import ScriptOutputsMenuItem from './outputs/ScriptOutputsMenuItem.js'

export default class ScriptMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Script',
            zone: Layout.zone.RIGHT
        })
    }

    /**
     * @override
     */
    setupItems() {
        this.items = [
            new EditScriptFormMenuItem(this),
            new ScriptFunctionsMenuItem(this),
            new ScriptVariablesMenuItem(),
            new ScriptInputsMenuItem(),
            new ScriptOutputsMenuItem(),
            new ScriptAnimationsMenuItem(),
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