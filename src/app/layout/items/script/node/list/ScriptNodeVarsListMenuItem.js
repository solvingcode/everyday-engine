import World from '../../../../../world/World.js'
import ListMenuItem from '../../../list/ListMenuItem.js'
import VariableNode from '../../../../../flow/node/variable/VariableNode.js'
import ScriptNodeElementMenuItem from './ScriptNodeElementMenuItem.js'

export default class ScriptNodeVarsListMenuItem extends ListMenuItem {

    /**
     * @param {MenuItem} parent
     */
    constructor(parent) {
        super({
            name: 'Variables',
            zone: parent.zone
        })
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return ScriptNodeElementMenuItem
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

    /**
     * @override
     */
    getFormObject() {
        const world = World.get()
        const script = world.getScriptManager().getSelected(world.getTabManager())
        return script.getNodes().filter(node => node instanceof VariableNode)
    }

}