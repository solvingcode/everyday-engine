import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import AssetAnimationXml from '../../../../asset/types/animation/AssetAnimationXml.js'

export default class EditAssetAnimationMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'edit',
            title: 'Edit animation',
            stateCode: 'ACTION_EDIT_ASSET_ANIMATION',
            type: Layout.type.ICON_TEXT,
            zone: parent ? parent.zone : Layout.zone.WINDOW
        })
        this.parent = parent
    }

    /**
     * @override
     */
    isValid() {
        const selectedAsset = World.get().getAssetsManager().getSelectedAsset()
        return super.isValid() && selectedAsset && (selectedAsset.getType() instanceof AssetAnimationXml)
    }
}
