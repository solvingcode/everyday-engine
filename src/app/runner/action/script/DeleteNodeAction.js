import Action from '../Action.js'
import World from '../../../world/World.js'

export default class DeleteNodeAction extends Action {

    /**
     * @override
     */
    static run(mouse) {
        const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
        const assetTab = World.get().getTabManager().getSelectedContentData()
        if(script){
            const nodes = script.getSelectedNodes()
            if(nodes){
                nodes.forEach(node => {
                    const connections = script.getInputs().filter(input => input.getSourceNodeId() === node.getId())
                    connections.forEach(connection => script.removeInputById(connection.getId()))
                    script.removeNodeById(node.getId())
                })
                assetTab.generate(script)
            }
        }
        return true
    }

}