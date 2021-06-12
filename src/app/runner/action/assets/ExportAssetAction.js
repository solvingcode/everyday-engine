import Action from '../Action.js'
import World from '../../../world/World.js'

export default class ExportAssetAction extends Action {

    static STATE = 'ACTION_EXPORT_ASSET'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAsset = world.getAssetsManager().getSelectedAsset()
        selectedAsset.export()
        return true
    }

}