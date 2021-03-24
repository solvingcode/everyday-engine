import Action from '../Action.js'
import World from '../../../world/World.js'

export default class AddAssetSceneAction extends Action {

    static STATE = 'ACTION_ADD_ASSET_SCENE'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const position = world.getCamera().getPosition()
        const selectedAssets = world.getAssetsManager().getSelectedAssets()
        selectedAssets.forEach(asset => {
            world.getUnitManager().createUnitFromAsset(asset, position)
        })
        return true
    }

}