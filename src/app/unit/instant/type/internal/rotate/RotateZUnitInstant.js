import Vector from '../../../../../utils/Vector.js'
import Size from '../../../../../pobject/Size.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TransformUnitInstant from '../TransformUnitInstant.js'
import GUIRotateComponent from '../../../../../component/internal/gui/rotate/GUIRotateComponent.js'

export default class RotateZUnitInstant extends TransformUnitInstant {

    /**
     * @param {Vector} position
     */
    instantiate(position) {
        const size = new Size({width: 100, height: 100})
        const style = new Style()
        style.setColor('#00FF00')
        style.setBorderSize(2)
        const shape = PrimitiveShape.CIRCLE
        const movePosition = new Vector()
        movePosition.setX(position.getX() - size.getWidth() / 2)
        movePosition.setY(position.getY() - size.getHeight() / 2)
        super.instantiate(GUIRotateComponent, size, style, shape, movePosition)
    }

}