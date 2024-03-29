import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import AssetScript from '../../../../asset/types/script/AssetScript.js'

export default class CompileAssetScriptMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'code',
            title: 'Compile asset',
            stateCode: 'ACTION_COMPILE_ASSET_SCRIPT',
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
