import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import RectUnitInstant from './RectUnitInstant.js'

export default class RectFillUnitInstant extends RectUnitInstant {

    /**
     * @param {Vector} localPosition
     * @param {Vector} localScale
     * @param {Style} style
     */
    instantiate(localPosition, localScale, style = new Style()) {
        const meshComponent = this.getComponent(MeshComponent)
        meshComponent.setShape(PrimitiveShape.RECT_FILL)
    }

    /**
     * @override
     */
    setup() {
    }

}