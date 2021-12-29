import Vector from '../../../../../utils/Vector.js'
import {PrimitiveShape} from '../../../../Unit.js'
import GUIMoveFreeComponent from '../../../../../component/internal/gui/move/GUIMoveFreeComponent.js'
import TransformFreeUnitInstant from '../transform/TransformFreeUnitInstant.js'

export default class MoveFreeUnitInstant extends TransformFreeUnitInstant {

    /**
     * @param {Vector} position
     * @param {Vector} parentScale
     */
    instantiate(position, parentScale) {
        const shape = PrimitiveShape.CIRCLE
        super.instantiate(GUIMoveFreeComponent, parentScale, shape, position)
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