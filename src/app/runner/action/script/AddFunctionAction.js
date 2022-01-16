import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import AssetHelper from '../../../utils/AssetHelper.js'
import Storage from '../../../core/Storage.js'

export default class AddFunctionAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_ADD_SCRIPT_FUNCTION'

    /**
     * @override
     */
    static run() {
        const {formData} = StateManager.get().getNextProgressData(this.STATE)
        const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
        const assetTab = World.get().getTabManager().getSelectedContentData()
        ScriptHelper.createFunction(script, formData.name)
        AssetHelper.regenerate(assetTab, script, Storage.get())
        return true
    }

}