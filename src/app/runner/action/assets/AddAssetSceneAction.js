import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetUnitInstant from '../../../unit/instant/type/internal/asset/AssetUnitInstant.js'
import Vector from '../../../utils/Vector.js'

export default class AddAssetSceneAction extends Action {

    static STATE = 'ACTION_ADD_ASSET_SCENE'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAssets = world.getAssetsManager().getSelectedAssets()
        selectedAssets.forEach(asset => {
            world.getUnitManager().createUnitInstant(AssetUnitInstant, new Vector(), asset)
        })
        return true
    }

}