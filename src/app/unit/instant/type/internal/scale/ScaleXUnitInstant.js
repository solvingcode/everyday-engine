import Vector from '../../../../../utils/Vector.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TransformXUnitInstant from '../transform/TransformXUnitInstant.js'
import GUIScaleXComponent from '../../../../../component/internal/gui/scale/GUIScaleXComponent.js'

export default class ScaleXUnitInstant extends TransformXUnitInstant {

    /**
     * @param {Vector} position
     * @param {Vector} parentScale
     */
    instantiate(position, parentScale) {
        const shape = PrimitiveShape.ARROW_RECT_RIGHT
        super.instantiate(GUIScaleXComponent, parentScale, shape, position)
    }

    /**
     * @override
     */
    getChildScale() {
        return new Vector({x: 10, y: 1})
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
        return '#FF0000'
    }

}