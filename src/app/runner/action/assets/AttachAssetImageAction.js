import Action from '../Action.js'
import World from '../../../world/World.js'
import UnitSelector from '../../../selector/UnitSelector.js'
import AssetHelper from '../../../utils/AssetHelper.js'

export default class AttachAssetImageAction extends Action {

    static STATE = 'ACTION_ATTACH_IMAGE_SCRIPT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAsset = world.getAssetsManager().getSelectedAsset()
        const selectedUnit = UnitSelector.get().getFirstSelected(world)
        AssetHelper.attachAssetImageToUnit(selectedUnit, selectedAsset)
        return true
    }

}