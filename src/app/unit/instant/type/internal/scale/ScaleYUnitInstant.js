import Vector from '../../../../../utils/Vector.js'
import Size from '../../../../../pobject/Size.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TransformUnitInstant from '../TransformUnitInstant.js'
import GUIScaleYComponent from '../../../../../component/internal/gui/scale/GUIScaleYComponent.js'

export default class ScaleYUnitInstant extends TransformUnitInstant {

    /**
     * @param {Vector} position
     */
    instantiate(position) {
        const size = new Size({width: 30, height: 100})
        const style = new Style()
        style.setColor('#0000FF')
        style.setBorderSize(4)
        const shape = PrimitiveShape.ARROW_RECT_DOWN
        const movePosition = new Vector()
        movePosition.setX(position.getX() - size.getWidth() / 2)
        movePosition.setY(position.getY())
        super.instantiate(GUIScaleYComponent, size, style, shape, movePosition)
    }

}