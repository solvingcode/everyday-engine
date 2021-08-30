import World from '../../../../../world/World.js'
import NodeHelper from '../../../../../utils/NodeHelper.js'
import ScriptGraphSelector from '../../../../../selector/ScriptGraphSelector.js'
import NodeComponent from '../../../../../component/internal/gui/node/NodeComponent.js'
import ListMenuItem from '../../../list/ListMenuItem.js'
import AddScriptNodeInputElementMenuItem from './AddScriptNodeInputElementMenuItem.js'

export default class AddScriptNodeInputListMenuItem extends ListMenuItem {

    /**
     * @param {MenuItem} parent
     */
    constructor(parent) {
        super({
            name: 'Default values',
            zone: parent.zone
        })
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return AddScriptNodeInputElementMenuItem
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
        const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
        const selectedGraphUnits = ScriptGraphSelector.get().getSelected(world)
        const selectedGraphUnit = selectedGraphUnits[0]
        const nodeId = selectedGraphUnit.getComponent(NodeComponent).getNodeId()
        const node = script.findNodeById(nodeId)
        return NodeHelper.getSourceNode(node, world).getInputs().filter(input => !node.getInputNodeAttached(input.getAttrName()))
    }

    /**
     * @override
     */
    isValid() {
        const selectedGraphUnits = ScriptGraphSelector.get().getSelected(World.get())
        return super.isValid() && !!selectedGraphUnits.length
    }

}