import Action from '../Action.js'
import World from '../../../world/World.js'
import ScriptGraphSelector from '../../../selector/ScriptGraphSelector.js'
import NodeComponent from '../../../component/internal/gui/node/NodeComponent.js'
import NodeScriptXmlGenerator from '../../../generator/script/node/NodeScriptXmlGenerator.js'
import ClipboardManager from '../../../manager/ClipboardManager.js'
import EdgeScriptXmlGenerator from '../../../generator/script/node/EdgeScriptXmlGenerator.js'

export default class CopySelectedNodeAction extends Action {

    /**
     * @override
     */
    static run(mouse) {
        const world = World.get()
        const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
        const selectedGraphUnits = ScriptGraphSelector.get().getSelected(world)
        const xmlStrings = []
        const nodes = []
        const edges = []
        selectedGraphUnits.forEach(selectedGraphUnit => {
            const nodeId = selectedGraphUnit.getComponent(NodeComponent).getNodeId()
            const node = script.findNodeById(nodeId)
            node.getInputs().forEach(input => {
                const sourceNode = script.findNodeById(input.getSourceNodeId())
                if (sourceNode) {
                    edges.push({input, node})
                    nodes.push(sourceNode)
                }
            })
            nodes.push(node)
        })
        _.uniq(nodes).forEach(node => xmlStrings.push(NodeScriptXmlGenerator.get().generate(node)))
        _.uniq(edges).forEach(({input, node}) => xmlStrings.push(EdgeScriptXmlGenerator.get().generate({input, node})))
        ClipboardManager.get().setContent(`<flow>${_.uniq(xmlStrings).join()}</flow>`)
        return true
    }

}