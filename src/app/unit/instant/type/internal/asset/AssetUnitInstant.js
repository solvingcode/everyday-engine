import MeshUnitInstant from '../../../MeshUnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class AssetUnitInstant extends MeshUnitInstant {

    /**
     * @param {Vector} position
     * @param {Asset} asset
     * @param {string|null} name
     */
    instantiate(position, asset, name = null) {
        this.setName(!name ? asset.getName() : name)
        const meshComponent = this.getComponent(MeshComponent)
        const transformComponent = this.getComponent(TransformComponent)
        if(asset){
            transformComponent.setScale(TransformHelper.getScaleFromSize(asset.getType().getData().size))
            meshComponent.setAssetId(asset.getId())
        }
        meshComponent.setMaterial('default')
        transformComponent.setPosition(position)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(20)
    }
}