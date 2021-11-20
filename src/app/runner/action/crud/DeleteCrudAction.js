import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'
import LayerGroup from '../../../preference/layerGroup/LayerGroup.js'

export default class DeleteCrudAction extends Action {

    static STATE = 'ACTION_DELETE_CRUD'

    /**
     * @override
     */
    static run() {
        const {bind} = StateManager.get().getNextProgressData(this.STATE)
        const world = World.get()
        if(bind instanceof LayerGroup){
            world.getPreference().getLayerGroup().delete(bind)
        }
        return true
    }

}