import Vector from '../../../../../utils/Vector.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TransformYUnitInstant from '../transform/TransformYUnitInstant.js'
import GUIMoveYComponent from '../../../../../component/internal/gui/move/GUIMoveYComponent.js'

export default class MoveYUnitInstant extends TransformYUnitInstant {

    /**
     * @param {Vector} position
     * @param {Vector} parentScale
     */
    instantiate(position, parentScale) {
        const childScale = new Vector({x: 3, y: 10})
        const style = new Style()
        style.setColor('#0000FF')
        style.setBorderSize(4)
        const shape = PrimitiveShape.ARROW_DOWN
        super.instantiate(GUIMoveYComponent, childScale, parentScale, style, shape, position)
    }

}