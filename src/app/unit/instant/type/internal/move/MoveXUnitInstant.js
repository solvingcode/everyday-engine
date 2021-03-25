import Vector from '../../../../../utils/Vector.js'
import TransformUnitInstant from '../TransformUnitInstant.js'
import Size from '../../../../../pobject/Size.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'

export default class MoveXUnitInstant extends TransformUnitInstant {

    /**
     * @param {Class} moveComponentClass
     * @param {Vector} position
     */
    instantiate(moveComponentClass, position) {
        const size = new Size({width: 100, height: 30})
        const style = new Style()
        style.setColor('#FF0000')
        style.setBorderSize(4)
        const shape = PrimitiveShape.ARROW_RIGHT
        const movePosition = new Vector()
        movePosition.setX(position.getX())
        movePosition.setY(position.getY() - size.getHeight() / 2)
        super.instantiate(moveComponentClass, size, style, shape, movePosition)
    }

}