import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetHelper from '../../../utils/AssetHelper.js'

export default class DeleteAssetAction extends Action {

    static STATE = 'ACTION_DELETE_ASSET'

    /**
     * @override
     */
    static run() {
        const assetManager = World.get().getAssetsManager()
        const selectedAsset = assetManager.getSelectedAsset()
        AssetHelper.deleteAsset(selectedAsset)
        return true
    }

}