import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import TabManager from '../../../manager/TabManager.js'

export default class AddNodeAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_ADD_SCRIPT_NODE'

    /**
     * @override
     */
    static run() {
        const {formData} = StateManager.get().getNextProgressData(this.STATE)
        const script = World.get().getScriptManager().getSelected()
        const functionRegistry = World.get().getFunctionRegistry()
        const assetTab = TabManager.get().getSelectedContentData()
        ScriptHelper.createNode(functionRegistry, script, formData.type, formData.value)
        assetTab.generate(script)
        return true
    }

}