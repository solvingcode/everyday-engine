import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'

export default class SelectFolderAction extends Action {

    static STATE = 'ACTION_SELECT_FOLDER'

    /**
     * @override
     */
    static run() {
        const {bind} = StateManager.get().getNextProgressData(this.STATE)
        World.get().getAssetsManager().getFolders().forEach(element => element.unselect())
        World.get().getAssetsManager().getAssets().forEach(element => element.unselect())
        bind.select()
        return true
    }

}