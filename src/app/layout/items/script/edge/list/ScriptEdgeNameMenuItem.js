import Layout from '../../../../Layout.js'
import MenuItem from '../../../../MenuItem.js'
import World from '../../../../../world/World.js'

export default class ScriptEdgeNameMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {NodeInput} nodeInput
     */
    constructor(parent, nodeInput) {
        const functionRegistry = World.get().getFunctionRegistry()
        const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
        const sourceNode = script.findNodeById(nodeInput.getSourceNodeId())
        const targetNode = script.findNodeById(nodeInput.getNodeId())
        const targetInput = targetNode.getTargetInput(functionRegistry, nodeInput)
        const title = `${sourceNode.getName()} -> (${targetInput ? targetInput.getAttrName() : ''}) ${targetNode.getName()}`
        super({
            name: 'link',
            title,
            stateCode: '',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {nodeInput}
    }
}