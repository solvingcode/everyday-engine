import Action from '../Action.js'
import World from '../../../world/World.js'
import ScriptGraphSelector from '../../../selector/ScriptGraphSelector.js'
import NodeComponent from '../../../component/internal/gui/node/NodeComponent.js'

export default class DeleteSelectedNodeAction extends Action {

    /**
     * @override
     */
    static run(mouse) {
        const world = World.get()
        const script = world.getScriptManager().getSelected(world.getTabManager())
        const selectedGraphUnits = ScriptGraphSelector.get().getSelected(world)
        selectedGraphUnits.forEach(selectedGraphUnit => {
            const nodeId = selectedGraphUnit.getComponent(NodeComponent).getNodeId()
            script.removeNodeById(nodeId)
        })
        return true
    }

}