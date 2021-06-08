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
        const world = World.get()
        const assetsManager = world.getAssetsManager()
        const tabManager = world.getTabManager()
        const selectedAsset = assetsManager.getSelectedAsset()
        const animation = world.getAnimationManager().getSelected(tabManager)
        return super.isValid() &&
            selectedAsset && assetsManager.isAssetImage(selectedAsset) &&
            animation && !!animation.getSelectedTimeline()
    }
}