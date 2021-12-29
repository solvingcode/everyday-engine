import Vector from '../../../../../utils/Vector.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TransformFreeUnitInstant from '../transform/TransformFreeUnitInstant.js'
import GUIScaleFreeComponent from '../../../../../component/internal/gui/scale/GUIScaleFreeComponent.js'

export default class ScaleFreeUnitInstant extends TransformFreeUnitInstant {

    /**
     * @param {Vector} position
     * @param {Vector} parentScale
     */
    instantiate(position, parentScale) {
        const shape = PrimitiveShape.CIRCLE
        super.instantiate(GUIScaleFreeComponent, parentScale, shape, position)
    }

    /**
     * @override
     */
    getChildScale() {
        return new Vector({x: 10, y: 10})
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
        return '#CCCCCC'
    }

}