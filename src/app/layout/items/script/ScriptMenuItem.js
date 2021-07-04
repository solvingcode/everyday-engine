import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import World from '../../../world/World.js'
import ScriptNodesMenuItem from './node/ScriptNodesMenuItem.js'
import ScriptEdgesMenuItem from './edge/ScriptEdgesMenuItem.js'
import ScriptShowMenuItem from './ScriptShowMenuItem.js'
import AddScriptNodeInputListMenuItem from './edge/list/AddScriptNodeInputListMenuItem.js'

export default class ScriptMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Script',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new ScriptNodesMenuItem(this),
            new ScriptEdgesMenuItem(this),
            new ScriptShowMenuItem(this),
            new AddScriptNodeInputListMenuItem(this)
        ]
    }

    /**
     * @override
     */
    isValid() {
        const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
        return super.isValid() && script
    }
}