import Vector from '../../../../../utils/Vector.js'
import TransformUnitInstant from '../TransformUnitInstant.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import GUIMoveXComponent from '../../../../../component/internal/gui/move/GUIMoveXComponent.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class MoveXUnitInstant extends TransformUnitInstant {

    /**
     * @param {Vector} position
     * @param {Vector} parentScale
     */
    instantiate(position, parentScale) {
        const childScale = new Vector({x: 10, y: 3})
        const scale = Vector.linearDivide(childScale, parentScale)
        const style = new Style()
        style.setColor('#FF0000')
        style.setBorderSize(4)
        const shape = PrimitiveShape.ARROW_RIGHT
        super.instantiate(GUIMoveXComponent, scale, style, shape,
            this.getTransformPosition(position, TransformHelper.getSizeFromScale(scale)))
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