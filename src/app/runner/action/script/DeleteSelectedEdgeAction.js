import Action from '../Action.js'
import World from '../../../world/World.js'
import NodeInputComponent from '../../../component/internal/gui/node/NodeInputComponent.js'

export default class DeleteSelectedEdgeAction extends Action {

    /**
     * @override
     */
    static run(mouse) {
        const world = World.get()
        const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
        const selectedGraphUnits = world.getGraphManager().getSelectedEdges()
        selectedGraphUnits.forEach(selectedGraphUnit => {
            const nodeInput = selectedGraphUnit.getComponent(NodeInputComponent).getNodeInput()
            script.removeInput(nodeInput)
            script.setUpdated(true)
        })
        return true
    }

}