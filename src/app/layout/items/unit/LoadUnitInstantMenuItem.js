import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import AssetUnit from '../../../asset/types/unit/AssetUnit.js'

export default class LoadUnitInstantMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'Load Instant',
            stateCode: 'ACTION_LOAD_UNIT_INSTANT',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }

    /**
     * @override
     */
    isValid() {
        const selectedAsset = World.get().getAssetsManager().getSelectedAsset()
        return super.isValid() && selectedAsset && (selectedAsset.getType() instanceof AssetUnit)
    }
}