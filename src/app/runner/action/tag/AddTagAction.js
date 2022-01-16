import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'

export default class AddTagAction extends Action {

    static STATE = 'ACTION_ADD_TAG'

    /**
     * @override
     */
    static run() {
        const {formData} = StateManager.get().getNextProgressData(this.STATE)
        const tag = World.get().getPreference().getTag()
        tag.addTag(formData.getName())
        return true
    }

}