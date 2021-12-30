import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'
import LayerGroup from '../../../preference/layerGroup/LayerGroup.js'
import VariableScript from '../../../flow/VariableScript.js'
import AssetHelper from '../../../utils/AssetHelper.js'
import Storage from '../../../core/Storage.js'
import AnimationScript from '../../../flow/AnimationScript.js'
import AnimatorScript from '../../../flow/AnimatorScript.js'

export default class DeleteCrudAction extends Action {

    static STATE = 'ACTION_DELETE_CRUD'

    /**
     * @override
     */
    static run() {
        const {bind} = StateManager.get().getNextProgressData(this.STATE)
        const world = World.get()
        if (bind instanceof LayerGroup) {
            world.getPreference().getLayerGroup().delete(bind)
        } else if (bind instanceof VariableScript) {
            const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
            if (script) {
                script.deleteVariable(bind)
                const assetTab = World.get().getTabManager().getSelectedContentData()
                AssetHelper.regenerate(assetTab, script, Storage.get())
            }
        } else if (bind instanceof AnimationScript) {
            const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
            if (script instanceof AnimatorScript) {
                script.deleteAnimation(bind)
                const assetTab = World.get().getTabManager().getSelectedContentData()
                AssetHelper.regenerate(assetTab, script, Storage.get())
            }
        }
        return true
    }

}