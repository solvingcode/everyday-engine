import MeshUnitInstant from '../../../MeshUnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPendingComponent from '../../../../../component/internal/gui/GUIPendingComponent.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class CircleUnitInstant extends MeshUnitInstant {

    /**
     * @param {Vector} position
     * @param {Size} size
     * @param {Style} style
     */
    instantiate(position, size, style= new Style()) {
        this.createComponent(GUIPendingComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        transformComponent.setPosition(position)
        transformComponent.setScale(TransformHelper.getScaleFromSize(size))
        meshComponent.setShape(PrimitiveShape.CIRCLE)
        meshComponent.setStyle(style)
    }

    /**
     * @override
     */
    setup() {
    }

}