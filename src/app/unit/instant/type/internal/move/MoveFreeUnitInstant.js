import Vector from '../../../../../utils/Vector.js'
import TransformUnitInstant from '../TransformUnitInstant.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import GUIMoveFreeComponent from '../../../../../component/internal/gui/move/GUIMoveFreeComponent.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class MoveFreeUnitInstant extends TransformUnitInstant {

    /**
     * @param {Vector} position
     * @param {Vector} parentScale
     */
    instantiate(position, parentScale) {
        const childScale = new Vector({x: 10, y: 10})
        const scale = Vector.linearDivide(childScale, parentScale)
        const style = new Style()
        style.setColor('#CCCCCC')
        style.setBorderSize(2)
        const shape = PrimitiveShape.CIRCLE
        super.instantiate(GUIMoveFreeComponent, scale, style, shape,
            this.getTransformPosition(position, TransformHelper.getSizeFromScale(childScale)))
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