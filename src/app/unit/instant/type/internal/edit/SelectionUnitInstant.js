import MeshUnitInstant from '../../../MeshUnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import GUIPendingComponent from '../../../../../component/internal/gui/GUIPendingComponent.js'
import Style from '../../../../../pobject/Style.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'

export default class SelectionUnitInstant extends MeshUnitInstant {

    /**
     * @param {Vector} position
     * @param {Size} size
     */
    instantiate(position, size) {
        this.createComponent(GUIPendingComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const styleComponent = this.getComponent(StyleComponent)
        const meshComponent = this.getComponent(MeshComponent)
        meshComponent.setShape(PrimitiveShape.RECT_STROKE)
        transformComponent.setLocalPosition(position)
        transformComponent.setLocalScale(TransformHelper.getScaleFromSize(size))
        const style = new Style()
        style.setColor('#FFFFFF')
        style.setBorderSize(1)
        styleComponent.setStyle(style)
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
        return 100060
    }

}