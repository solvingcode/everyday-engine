import Layout from '../../../../Layout.js'
import ListSelectElementActionsMenuItem from '../../../list/ListSelectElementActionsMenuItem.js'
import World from '../../../../../world/World.js'

export default class ScriptEdgeElementMenuItem extends ListSelectElementActionsMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            name: '',
            type: Layout.type.LIST_ELEMENT
        })
    }

    /**
     * @override
     */
    getName() {
        const nodeInput = this.getDataBind()
        const functionRegistry = World.get().getFunctionRegistry()
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        const sourceNode = script.findNodeById(nodeInput.getSourceNodeId())
        if (sourceNode) {
            const targetNode = script.findNodeById(nodeInput.getNodeId())
            if(targetNode){
                const targetInput = targetNode.getTargetInput(functionRegistry, nodeInput)
                return `${sourceNode.getName()} (${nodeInput.getSourceName()}) -> (${targetInput ? targetInput.getAttrName() : ''}) ${targetNode.getName()}`
            }
        }
        return ''
    }

    /**
     * @override
     */
    getIcon() {
        return 'link'
    }

    /**
     * @override
     */
    isButton() {
        return true
    }
}