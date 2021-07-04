import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'
import ClientError from '../../../exception/type/ClientError.js'

export default class AddEdgeAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_ADD_SCRIPT_EDGE'

    /**
     * @override
     */
    static run() {
        const {formData} = StateManager.get().getNextProgressData(this.STATE)
        const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
        const assetTab = World.get().getTabManager().getSelectedContentData()
        const nodeTarget = script.findNodeById(parseInt(formData.getTargetId()))
        const nodeSource = script.findNodeById(parseInt(formData.getSourceId()))
        if(nodeTarget && nodeSource){
            nodeTarget.attach(nodeSource, formData.getConnection())
            assetTab.generate(script)
        }else{
            throw new ClientError(`Cannot add the connection (target or source node are invalids)`)
        }
        return true
    }

}