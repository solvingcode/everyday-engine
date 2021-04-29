import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import AssetImage from '../../../../asset/types/image/AssetImage.js'

export default class AddAssetSceneMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'layer-group',
            title: 'Add selected Asset to the Scene',
            stateCode: 'ACTION_ADD_ASSET_SCENE',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
    }

    /**
     * @override
     */
    isValid() {
        const selectedAsset = World.get().getAssetsManager().getSelectedAsset()
        return super.isValid() && selectedAsset && (selectedAsset.getType() instanceof AssetImage)
    }
}
