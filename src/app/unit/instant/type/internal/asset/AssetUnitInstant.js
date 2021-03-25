import UnitInstant from '../../../UnitInstant.js'
import TransformComponent from '../../../../../component/TransformComponent.js'
import MeshComponent from '../../../../../component/MeshComponent.js'
import GUIPropertyComponent from '../../../../../component/gui/property/GUIPropertyComponent.js'

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
        this.getComponent(GUIPropertyComponent).setRank(20)
    }

}