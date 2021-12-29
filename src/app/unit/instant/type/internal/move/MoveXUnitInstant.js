import Vector from '../../../../../utils/Vector.js'
import {PrimitiveShape} from '../../../../Unit.js'
import GUIMoveXComponent from '../../../../../component/internal/gui/move/GUIMoveXComponent.js'
import TransformXUnitInstant from '../transform/TransformXUnitInstant.js'

export default class MoveXUnitInstant extends TransformXUnitInstant {

    /**
     * @param {Vector} position
     * @param {Vector} parentScale
     */
    instantiate(position, parentScale) {
        const shape = PrimitiveShape.ARROW_RIGHT
        super.instantiate(GUIMoveXComponent, parentScale, shape, position)
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