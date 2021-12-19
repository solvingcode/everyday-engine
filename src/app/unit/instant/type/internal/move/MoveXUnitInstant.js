import Vector from '../../../../../utils/Vector.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import GUIMoveXComponent from '../../../../../component/internal/gui/move/GUIMoveXComponent.js'
import TransformXUnitInstant from '../transform/TransformXUnitInstant.js'

export default class MoveXUnitInstant extends TransformXUnitInstant {

    /**
     * @param {Vector} position
     * @param {Vector} parentScale
     */
    instantiate(position, parentScale) {
        const childScale = new Vector({x: 10, y: 1})
        const style = new Style()
        style.setColor('#FF0000')
        style.setBorderSize(4)
        const shape = PrimitiveShape.ARROW_RIGHT
        super.instantiate(GUIMoveXComponent, childScale, parentScale, style, shape, position)
    }
}