import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'
import Storage from '../../../core/Storage.js'

export default class AddAssetAction extends Action {

    static STATE = 'ACTION_ADD_ASSET'

    /**
     * @override
     */
    static run() {
        const {files} = StateManager.get().getNextProgressData(this.STATE)
        Array.from(files).forEach(fileData => World.get().getAssetsManager().setAssetByBlob(fileData, Storage.get()))
        return true
    }

}