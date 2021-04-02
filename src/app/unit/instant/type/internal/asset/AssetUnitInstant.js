import UnitInstant from '../../../UnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'

export default class AssetUnitInstant extends UnitInstant {

    /**
     * @param {Vector} position
     * @param {Asset} asset
     */
    instantiate(position, asset) {
        this.setName(asset.getName())
        const meshComponent = this.getComponent(MeshComponent)
        const transformComponent = this.getComponent(TransformComponent)
        meshComponent.setSize(_.cloneDeep(asset.getType().getData().size))
        meshComponent.setAssetId(asset.getId())
        transformComponent.setPosition(position)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(20)
    }
}