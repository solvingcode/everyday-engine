import Action from '../Action.js'
import World from '../../../world/World.js'
import EmptyUnit from '../../../unit/type/EmptyUnit.js'
import MeshComponent from '../../../component/MeshComponent.js'
import TransformComponent from '../../../component/TransformComponent.js'
import Style from '../../../pobject/Style.js'
import Vector from '../../../utils/Vector.js'

export default class AddAssetSceneAction extends Action {

    static STATE = 'ACTION_ADD_ASSET_SCENE'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const position = world.getCamera().getPosition()
        const selectedAssets = world.getAssetsManager().getSelectedAssets()
        selectedAssets.forEach(asset => {
            const unitManager = world.getUnitManager()
            const unit = unitManager.createUnit(EmptyUnit)
            unit.setName(asset.getName())
            const meshComponent = unit.getComponent(MeshComponent)
            const transformComponent = unit.getComponent(TransformComponent)
            meshComponent.setSize(_.cloneDeep(asset.getType().getData().size))
            meshComponent.setAssetId(asset.getId())
            const style = new Style()
            style.setColor('')
            style.setFillColor('')
            meshComponent.setStyle(style)
            transformComponent.setPosition(new Vector(_.cloneDeep(position)))
        })
        return true
    }

}