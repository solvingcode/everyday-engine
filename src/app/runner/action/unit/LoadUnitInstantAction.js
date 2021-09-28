import Action from '../Action.js'
import World from '../../../world/World.js'
import StorageHelper from '../../../utils/StorageHelper.js'

export default class LoadUnitInstantAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_LOAD_UNIT_INSTANT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAssets = world.getAssetsManager().getSelectedAssets()
        selectedAssets.forEach(asset => {
            StorageHelper.loadAssetUnit(asset)
        })
        return true
    }

}