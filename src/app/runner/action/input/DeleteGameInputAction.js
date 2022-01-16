import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'

export default class DeleteGameInputAction extends Action {

    static STATE = 'ACTION_DELETE_GAME_INPUT'

    /**
     * @override
     */
    static run() {
        const {bind: input} = StateManager.get().getNextProgressData(this.STATE)
        World.get().getPreference().getGameInput().delete(input)
        return true
    }

}