import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'
import TabManager from '../../../manager/TabManager.js'

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
        const script = World.get().getScriptManager().getSelected()
        const assetTab = TabManager.get().getSelectedContentData()
        const nodeTarget = script.findNodeById(parseInt(formData.getTargetId()))
        const nodeSource = script.findNodeById(parseInt(formData.getSourceId()))
        nodeTarget.attach(nodeSource, parseInt(formData.getConnection()))
        assetTab.generate(script)
        return true
    }

}