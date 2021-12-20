import MeshUnitInstant from '../../../MeshUnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPendingComponent from '../../../../../component/internal/gui/GUIPendingComponent.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'

export default class CircleUnitInstant extends MeshUnitInstant {

    /**
     * @param {Vector} localPosition
     * @param {Vector} localScale
     * @param {Style} style
     */
    instantiate(localPosition, localScale, style = new Style()) {
        this.createComponent(GUIPendingComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        const styleComponent = this.getComponent(StyleComponent)
        transformComponent.setLocalPosition(localPosition)
        transformComponent.setLocalScale(localScale)
        meshComponent.setShape(PrimitiveShape.CIRCLE)
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
    update() {
    }
}