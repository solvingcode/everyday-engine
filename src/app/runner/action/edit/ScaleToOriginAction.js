import Action from '../Action.js'
import World from '../../../world/World.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import TransformHelper from '../../../utils/TransformHelper.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'
import Vector from '../../../utils/Vector.js'
import UnitHelper from '../../../utils/UnitHelper.js'

export default class ScaleToOriginAction extends Action {

    static STATE = 'ACTION_SCALE_ORIGIN'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedUnits = world.getUnitManager().getAllSelected()
        selectedUnits.forEach(selectedUnit => {
            const parentScale = UnitHelper.getParentScale(world, selectedUnit)
            const transformComponent = selectedUnit.getComponent(TransformComponent)
            const meshComponent = selectedUnit.getComponent(MeshComponent)
            if (transformComponent && meshComponent) {
                const asset = world.getAssetsManager().findAssetById(meshComponent.getAssetId())
                if (asset) {
                    const originScale = Vector.linearDivide(
                        TransformHelper.getScaleFromSize(asset.getType().getData().size), parentScale)
                    transformComponent.setLocalScale(originScale)
                    meshComponent.setGenerated(false)
                }
            }
        })
        return true
    }

}