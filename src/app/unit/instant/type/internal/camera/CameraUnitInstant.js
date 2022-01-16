import MeshUnitInstant from '../../../MeshUnitInstant.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import CameraComponent from '../../../../../component/internal/CameraComponent.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class CameraUnitInstant extends MeshUnitInstant {

    /**
     * @override
     * @param {Vector} position
     * @param {Size} size
     */
    instantiate(position, size) {
        this.setName('Camera')
        const style = new Style()
        style.setColor('#AAAAAA')
        style.setBorderSize(1)
        this.createComponent(CameraComponent)
        const meshComponent = this.getComponent(MeshComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const styleComponent = this.getComponent(StyleComponent)
        styleComponent.setStyle(style)
        transformComponent.setLocalPosition(position)
        transformComponent.setLocalScale(TransformHelper.getScaleFromSize(size))
        meshComponent.setShape(PrimitiveShape.CAMERA)
    }

    /**
     * @override
     */
    setup() {
    }

    /**
     * @override
     */
    getRank(world) {
        return 100040
    }

}