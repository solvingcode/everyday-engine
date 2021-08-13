import Vector from '../../../../../utils/Vector.js'
import TransformUnitInstant from '../TransformUnitInstant.js'
import Size from '../../../../../pobject/Size.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import GUIMoveXComponent from '../../../../../component/internal/gui/move/GUIMoveXComponent.js'

export default class MoveXUnitInstant extends TransformUnitInstant {

    /**
     * @param {Vector} position
     */
    instantiate(position) {
        const size = new Size({width: 100, height: 30})
        const style = new Style()
        style.setColor('#FF0000')
        style.setBorderSize(4)
        const shape = PrimitiveShape.ARROW_RIGHT
        super.instantiate(GUIMoveXComponent, size, style, shape, this.getTransformPosition(position, size))
    }

    /**
     * @override
     */
    getTransformPosition(position, size){
        const movePosition = new Vector()
        movePosition.setX(position.getX())
        movePosition.setY(position.getY() - size.getHeight() / 2)
        return movePosition
    }
}