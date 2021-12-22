import World from '../../../../../world/World.js'
import NodeHelper from '../../../../../utils/NodeHelper.js'
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
        }, parent)
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
    getActions(bindObject) {
        return []
    }

    /**
     * @override
     */
    getFormObject() {
        const world = World.get()
        const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
        if (script) {
            const selectedGraphUnits = world.getGraphManager().getSelectedNodes()
            const selectedGraphUnit = selectedGraphUnits[0]
            if (selectedGraphUnit) {
                const nodeComponent = selectedGraphUnit.getComponent(NodeComponent)
                if (nodeComponent) {
                    const node = selectedGraphUnit.getComponent(NodeComponent).getNode()
                    return NodeHelper.getSourceNode(node, world).getInputs().filter(input => !node.getInputNodeAttached(input.getAttrName()))
                }
            }
        }
    }

    /**
     * @override
     */
    isValid() {
        const selectedGraphUnits = World.get().getGraphManager().getSelectedNodes()
        return super.isValid() && !!selectedGraphUnits.length
    }

}