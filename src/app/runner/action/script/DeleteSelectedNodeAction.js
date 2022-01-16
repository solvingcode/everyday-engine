import Action from '../Action.js'
import World from '../../../world/World.js'
import NodeComponent from '../../../component/internal/gui/node/NodeComponent.js'

export default class DeleteSelectedNodeAction extends Action {

    /**
     * @override
     */
    static run(mouse) {
        const world = World.get()
        const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
        const selectedGraphUnits = world.getGraphManager().getSelectedNodes()
        selectedGraphUnits.forEach(selectedGraphUnit => {
            const node = selectedGraphUnit.getComponent(NodeComponent).getNode()
            script.removeNodeById(node.getId())
        })
        return true
    }

}