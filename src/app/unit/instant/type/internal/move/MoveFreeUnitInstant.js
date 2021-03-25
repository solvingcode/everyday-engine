import Vector from '../../../../../utils/Vector.js'
import TransformUnitInstant from '../TransformUnitInstant.js'
import Size from '../../../../../pobject/Size.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'

export default class MoveFreeUnitInstant extends TransformUnitInstant {

    /**
     * @param {Class} moveComponentClass
     * @param {Vector} position
     */
    instantiate(moveComponentClass, position) {
        const size = new Size({width: 100, height: 100})
        const style = new Style()
        style.setColor('#CCCCCC')
        style.setBorderSize(2)
        const shape = PrimitiveShape.CIRCLE
        const movePosition = new Vector()
        movePosition.setX(position.getX() - size.getWidth() / 2)
        movePosition.setY(position.getY() - size.getHeight() / 2)
        super.instantiate(moveComponentClass, size, style, shape, movePosition)
    }

}