import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import AssetScript from '../../../../asset/types/script/AssetScript.js'

export default class EditAssetScriptMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'edit',
            title: 'Edit script',
            stateCode: 'ACTION_EDIT_ASSET_SCRIPT_XML',
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
        return super.isValid() && selectedAsset && (selectedAsset.getType() instanceof AssetScript)
    }
}
