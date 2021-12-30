import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import LayerGroup from '../../../preference/layerGroup/LayerGroup.js'
import VariableScript from '../../../flow/VariableScript.js'
import AssetHelper from '../../../utils/AssetHelper.js'
import Storage from '../../../core/Storage.js'
import AnimationScript from '../../../flow/AnimationScript.js'
import AnimatorScript from '../../../flow/AnimatorScript.js'

export default class AddCrudAction extends Action {

    static STATE = 'ACTION_ADD_CRUD'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const {formData} = StateManager.get().getNextProgressData(this.STATE)
        if (formData instanceof LayerGroup) {
            const layerGroupPref = world.getPreference().getLayerGroup()
            layerGroupPref.addLayer(formData.getName(), formData.getRank())
        } else if (formData instanceof VariableScript) {
            const script = world.getScriptManager().getSelected(World.get().getTabManager())
            if (script) {
                script.getVariables().push(_.cloneDeep(formData))
                const assetTab = World.get().getTabManager().getSelectedContentData()
                AssetHelper.regenerate(assetTab, script, Storage.get())
            }
        } else if (formData instanceof AnimationScript) {
            const script = world.getScriptManager().getSelected(World.get().getTabManager())
            if (script instanceof AnimatorScript) {
                const animation = world.getAnimationManager().findById(parseInt(formData.getAnimation()))
                script.addAnimation(animation)
                const assetTab = World.get().getTabManager().getSelectedContentData()
                AssetHelper.regenerate(assetTab, script, Storage.get())
            }
        }
        return true
    }

}