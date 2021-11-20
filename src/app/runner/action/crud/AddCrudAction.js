import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import LayerGroup from '../../../preference/layerGroup/LayerGroup.js'

export default class AddCrudAction extends Action {

    static STATE = 'ACTION_ADD_CRUD'

    /**
     * @override
     */
    static run() {
        const {formData} = StateManager.get().getNextProgressData(this.STATE)
        if (formData instanceof LayerGroup) {
            const layerGroupPref = World.get().getPreference().getLayerGroup()
            layerGroupPref.addLayer(formData.getName(), formData.getRank())
        }
        return true
    }

}