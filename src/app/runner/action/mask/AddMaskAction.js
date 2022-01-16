import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'

export default class AddMaskAction extends Action {

    static STATE = 'ACTION_ADD_MASK'

    /**
     * @override
     */
    static run() {
        const {formData} = StateManager.get().getNextProgressData(this.STATE)
        const maskGroup = World.get().getPreference().getMaskGroup()
        maskGroup.addMask(formData.getName())
        return true
    }

}