import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetEntity from '../../../entity/types/asset/AssetEntity.js'

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
            world.addEntity(position, AssetEntity, {
                name: asset.getName(),
                size: asset.getType().getData().size,
                textureId: asset.getId(),
                style: {
                    color: '',
                    fillColor: ''
                }
            })
        })
        return true
    }

}