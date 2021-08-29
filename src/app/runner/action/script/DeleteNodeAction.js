import Action from '../Action.js'
import World from '../../../world/World.js'

export default class DeleteNodeAction extends Action {

    /**
     * @override
     */
    static run(mouse) {
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        if(script){
            const nodes = script.getSelectedNodes()
            if(nodes){
                nodes.forEach(node => {
                    const connections = script.getInputs().filter(input => input.getSourceNodeId() === node.getId())
                    connections.forEach(connection => script.removeInputById(connection.getId()))
                    script.removeNodeById(node.getId())
                })
                script.setUpdated(true)
            }
        }
        return true
    }

}