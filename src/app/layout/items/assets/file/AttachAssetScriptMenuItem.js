import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import AssetScript from '../../../../asset/types/script/AssetScript.js'
import UnitSelector from '../../../../selector/UnitSelector.js'

export default class AttachAssetScriptMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'plug',
            title: 'Plug into selected unit',
            stateCode: 'ACTION_ATTACH_ASSET_SCRIPT',
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
        const selectedUnit = UnitSelector.get().getFirstSelected(World.get())
        return super.isValid() && selectedAsset && (selectedAsset.getType() instanceof AssetScript) && selectedUnit
    }
}
