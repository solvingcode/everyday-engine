import Action from '../Action.js'
import World from '../../../world/World.js'
import UnitSelector from '../../../selector/UnitSelector.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'

export default class AttachAssetImageAction extends Action {

    static STATE = 'ACTION_ATTACH_IMAGE_SCRIPT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAsset = world.getAssetsManager().getSelectedAsset()
        const selectedUnit = UnitSelector.get().getFirstSelected(world)
        const meshComponent = selectedUnit.getComponent(MeshComponent)
        meshComponent.setAssetId(selectedAsset.getId())
        meshComponent.setGenerated(false)
        return true
    }

}