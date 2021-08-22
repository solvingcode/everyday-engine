import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetHelper from '../../../utils/AssetHelper.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'

export default class DeleteAssetAction extends Action {

    static STATE = 'ACTION_DELETE_ASSET'

    /**
     * @override
     */
    static run() {
        const assetManager = World.get().getAssetsManager()
        const unitManager = World.get().getUnitManager()
        const selectedAsset = assetManager.getSelectedAsset()
        const attachedUnits = unitManager.getUnits()
            .filter(unit => {
                const meshComponent = unit.getComponent(MeshComponent)
                return meshComponent && meshComponent.getAssetId() === selectedAsset.getId()
            })
        AssetHelper.deleteAsset(selectedAsset)
        attachedUnits.forEach(unit => unitManager.deleteUnit(unit))
        return true
    }

}