import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import UnitSelector from '../../../../selector/UnitSelector.js'
import AssetImage from '../../../../asset/types/image/AssetImage.js'
import MeshComponent from '../../../../component/internal/MeshComponent.js'

export default class AttachAssetImageMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'plug',
            title: 'Attach image to the selected Unit',
            stateCode: 'ACTION_ATTACH_ASSET_IMAGE',
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
        return super.isValid() && selectedAsset &&
            (selectedAsset.getType() instanceof AssetImage) && selectedUnit &&
            selectedUnit.getComponent(MeshComponent)
    }
}
