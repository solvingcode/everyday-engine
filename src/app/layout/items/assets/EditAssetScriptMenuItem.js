import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import AssetScriptXml from '../../../asset/types/AssetScriptXml.js'

export default class EditAssetScriptMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'edit',
            title: 'Edit',
            stateCode: 'ACTION_EDIT_ASSET_SCRIPT',
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
        return super.isValid() && selectedAsset && (selectedAsset.getType() instanceof AssetScriptXml)
    }
}
