import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'

export default class DeleteEdgeAction extends Action {

    static STATE = 'ACTION_DELETE_SCRIPT_EDGE'

    /**
     * @override
     */
    static run(mouse) {
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        const {nodeInput} = StateManager.get().getNextProgressData(this.STATE)
        if (script && nodeInput) {
            script.removeInputById(nodeInput.getId())
            script.setUpdated(true)
        }
        return true
    }

}