import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import Folder from '../../../asset/Folder.js'

export default class SelectAssetAction extends Action {

    static STATE = 'ACTION_SELECT_ASSET'

    /**
     * @override
     */
    static run() {
        const assetsManager = World.get().getAssetsManager()
        const {bind} = StateManager.get().getNextProgressData(this.STATE)
        if (bind instanceof Folder) {
            assetsManager.getFolders().forEach(element => element.unselect())
        } else {
            assetsManager.getAssets().forEach(element => element.unselect())
        }
        bind.select()
        return true
    }

}