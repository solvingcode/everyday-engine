import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'
export default class AddAssetToAnimationMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'photo-video',
            title: 'Add asset to animation',
            stateCode: 'ACTION_ATTACH_ASSET_ANIMATION',
            type: Layout.type.ICON,
            zone: Layout.zone.TOP
        })
    }

    /**
     * @override
     */
    isValid() {
        const assetsManager = World.get().getAssetsManager()
        const selectedAsset = assetsManager.getSelectedAsset()
        return super.isValid() && selectedAsset && assetsManager.isAssetImage(selectedAsset)
    }
}