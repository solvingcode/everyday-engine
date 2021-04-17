import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import AssetScriptXml from '../../../../asset/types/AssetScriptXml.js'

export default class CompileAssetScriptMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'code',
            title: 'Compile',
            stateCode: 'ACTION_COMPILE_ASSET_SCRIPT',
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
