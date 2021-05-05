import Action from '../Action.js'
import World from '../../../world/World.js'

export default class DeleteEdgeAction extends Action {

    /**
     * @override
     */
    static run(mouse) {
        const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
        const assetTab = World.get().getTabManager().getSelectedContentData()
        if(script){
            const edges = script.getSelectedEdges()
            if(edges){
                edges.forEach(edge => script.removeInputById(edge.getId()))
                assetTab.generate(script)
            }
        }
        return true
    }

}