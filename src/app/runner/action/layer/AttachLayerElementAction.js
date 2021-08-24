import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import Unit from '../../../unit/Unit.js'

export default class AttachLayerElementAction extends Action {

    static STATE = 'ACTION_ATTACH_LAYER_ELEMENT'

    /**
     * @override
     */
    static run() {
        const {start: startData, end: endData} = StateManager.get().getNextProgressData(this.STATE)
        if(endData instanceof Unit && startData instanceof Unit && endData !== startData){
            startData.setUnitParentId(endData.getId())
        }
        return true
    }

}