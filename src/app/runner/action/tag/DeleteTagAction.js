import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'

export default class DeleteTagAction extends Action {

    static STATE = 'ACTION_DELETE_TAG'

    /**
     * @override
     */
    static run() {
        const {bind: tag} = StateManager.get().getNextProgressData(this.STATE)
        World.get().getPreference().getTag().delete(tag)
        return true
    }

}