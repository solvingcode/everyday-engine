import Action from '../Action.js'
import World from '../../../world/World.js'
import TabManager from '../../../manager/TabManager.js'

export default class DeleteNodeAction extends Action {

    /**
     * @override
     */
    static run(mouse) {
        const script = World.get().getScriptManager().getSelected()
        const assetTab = TabManager.get().getSelectedContentData()
        if(script){
            const nodes = script.getSelectedNodes()
            if(nodes){
                nodes.forEach(node => script.removeNodeById(node.getId()))
                assetTab.generate(script)
            }
        }
        return true
    }

}