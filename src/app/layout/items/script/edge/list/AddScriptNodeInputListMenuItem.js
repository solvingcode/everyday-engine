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
    setupItems() {
        super.setupItems()
        const world = World.get()
        const node = this.getNode()
        if (node) {
            const sourceNode = NodeHelper.getSourceNode(node, world)
            const inputs = sourceNode ? sourceNode.getInputs() : []
            this.data.formObject = inputs.map(input => ({input, node}))
        }
        this.data.node = node
    }

    /**
     * @return {ANode}
     */
    getNode() {
        const world = World.get()
        const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
        if (script) {
            const selectedGraphUnits = world.getGraphManager().getSelectedNodes()
            const selectedGraphUnit = selectedGraphUnits[0]
            if (selectedGraphUnit) {
                const nodeComponent = selectedGraphUnit.getComponent(NodeComponent)
                if (nodeComponent) {
                    return selectedGraphUnit.getComponent(NodeComponent).getNode()
                }
            }
        }
    }

    /**
     * @override
     */
    doUpdate() {
        if (this.data.node !== this.getNode()) {
            this.setupItems()
        }
        return super.doUpdate()
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.formObject
    }

    /**
     * @override
     */
    isValid() {
        const selectedGraphUnits = World.get().getGraphManager().getSelectedNodes()
        return super.isValid() && !!selectedGraphUnits.length
    }

}