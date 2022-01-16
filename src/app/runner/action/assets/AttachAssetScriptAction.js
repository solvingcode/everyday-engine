import Action from '../Action.js'
import World from '../../../world/World.js'
import UnitSelector from '../../../selector/UnitSelector.js'
import AssetHelper from '../../../utils/AssetHelper.js'

export default class AttachAssetScriptAction extends Action {

    static STATE = 'ACTION_ATTACH_ASSET_SCRIPT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAsset = world.getAssetsManager().getSelectedAsset()
        const selectedUnit = UnitSelector.get().getFirstSelected(world)
        AssetHelper.attachAssetScriptToUnit(selectedUnit, selectedAsset, world)
        return true
    }

}