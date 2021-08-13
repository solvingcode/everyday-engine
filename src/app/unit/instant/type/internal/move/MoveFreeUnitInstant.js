import Vector from '../../../../../utils/Vector.js'
import TransformUnitInstant from '../TransformUnitInstant.js'
import Size from '../../../../../pobject/Size.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import GUIMoveFreeComponent from '../../../../../component/internal/gui/move/GUIMoveFreeComponent.js'

export default class MoveFreeUnitInstant extends TransformUnitInstant {

    /**
     * @param {Vector} position
     */
    instantiate(position) {
        const size = new Size({width: 100, height: 100})
        const style = new Style()
        style.setColor('#CCCCCC')
        style.setBorderSize(2)
        const shape = PrimitiveShape.CIRCLE
        super.instantiate(GUIMoveFreeComponent, size, style, shape, this.getTransformPosition(position, size))
    }

    /**
     * @override
     */
    getTransformPosition(position, size){
        const movePosition = new Vector()
        movePosition.setX(position.getX() - size.getWidth() / 2)
        movePosition.setY(position.getY() - size.getHeight() / 2)
        return movePosition
    }

}