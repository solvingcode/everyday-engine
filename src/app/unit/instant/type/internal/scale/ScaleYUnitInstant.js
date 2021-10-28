import Vector from '../../../../../utils/Vector.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TransformUnitInstant from '../TransformUnitInstant.js'
import GUIScaleYComponent from '../../../../../component/internal/gui/scale/GUIScaleYComponent.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class ScaleYUnitInstant extends TransformUnitInstant {

    /**
     * @param {Vector} position
     * @param {Vector} parentScale
     */
    instantiate(position, parentScale) {
        const childScale = new Vector({x: 3, y: 10})
        const scale = Vector.linearDivide(childScale, parentScale)
        const style = new Style()
        style.setColor('#0000FF')
        style.setBorderSize(4)
        const shape = PrimitiveShape.ARROW_RECT_DOWN
        super.instantiate(GUIScaleYComponent, scale, style, shape,
            this.getTransformPosition(position, TransformHelper.getSizeFromScale(scale)))
    }

    /**
     * @override
     */
    getTransformPosition(position, size){
        const movePosition = new Vector()
        movePosition.setX(position.getX() - size.getWidth() / 2)
        movePosition.setY(position.getY())
        return movePosition
    }

}