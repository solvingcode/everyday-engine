import MeshUnitInstant from '../../../MeshUnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'
import {PrimitiveShape} from '../../../../Unit.js'

export default class AssetUnitInstant extends MeshUnitInstant {

    /**
     * @param {Vector} localPosition
     * @param {Asset} asset
     * @param {string|null} name
     */
    instantiate(localPosition, asset, name = null) {
        this.setName(!name ? asset.getName() : name)
        const meshComponent = this.getComponent(MeshComponent)
        const transformComponent = this.getComponent(TransformComponent)
        if(asset){
            transformComponent.setLocalScale(TransformHelper.getScaleFromSize(asset.getType().getData().size))
            meshComponent.setAssetId(asset.getId())
        }
        meshComponent.setMaterial('default')
        meshComponent.setShape(PrimitiveShape.RECT_FILL)
        transformComponent.setLocalPosition(localPosition)
    }

    /**
     * @override
     */
    setup() {
    }
}