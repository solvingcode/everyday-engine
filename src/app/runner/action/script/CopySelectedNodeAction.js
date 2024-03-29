import Action from '../Action.js'
import World from '../../../world/World.js'
import ScriptGraphSelector from '../../../selector/ScriptGraphSelector.js'
import NodeComponent from '../../../component/internal/gui/node/NodeComponent.js'
import Project from '../../../project/Project.js'
import * as StorageConstant from '../../../constant/StorageConstant.js'
import ConstantNode from '../../../flow/node/ConstantNode.js'
import SelfNode from '../../../flow/node/SelfNode.js'

export default class CopySelectedNodeAction extends Action {

    /**
     * @override
     */
    static run(mouse) {
        const world = World.get()
        const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
        const selectedGraphUnits = ScriptGraphSelector.get().getSelected(world)
        const nodes = []
        selectedGraphUnits.forEach(selectedGraphUnit => {
            const node = selectedGraphUnit.getComponent(NodeComponent).getNode()
            node.getInputs().forEach(input => {
                const sourceNode = script.findNodeById(input.getSourceNodeId())
                if (sourceNode instanceof ConstantNode ||
                    sourceNode instanceof SelfNode) {
                    nodes.push(sourceNode)
                }
            })
            nodes.push(node)
        })
        Project.get().saveClipboard(StorageConstant.type.NODES, nodes)
        return true
    }

}