import Action from '../Action.js'
import World from '../../../world/World.js'

export default class UnselectAssetAction extends Action {

    static STATE = 'ACTION_UNSELECT_ASSET'

    /**
     * @override
     */
    static run() {
        const assetsManager = World.get().getAssetsManager()
        assetsManager.getAssets().forEach(element => element.unselect())
        return true
    }

}