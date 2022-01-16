import Vector from '../../../../../utils/Vector.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TransformYUnitInstant from '../transform/TransformYUnitInstant.js'
import GUIScaleYComponent from '../../../../../component/internal/gui/scale/GUIScaleYComponent.js'

export default class ScaleYUnitInstant extends TransformYUnitInstant {

    /**
     * @param {Vector} position
     * @param {Vector} parentScale
     */
    instantiate(position, parentScale) {
        const shape = PrimitiveShape.ARROW_RECT_DOWN
        super.instantiate(GUIScaleYComponent, parentScale, shape, position)
    }

    /**
     * @override
     */
    getChildScale() {
        return new Vector({x: 1, y: 10})
    }

    /**
     * @override
     */
    getBorderSize() {
        return 3
    }

    /**
     * @override
     */
    getColor() {
        return '#0000FF'
    }

}