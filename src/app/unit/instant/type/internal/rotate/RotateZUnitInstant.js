import Vector from '../../../../../utils/Vector.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TransformUnitInstant from '../TransformUnitInstant.js'
import GUIRotateComponent from '../../../../../component/internal/gui/rotate/GUIRotateComponent.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class RotateZUnitInstant extends TransformUnitInstant {

    /**
     * @param {Vector} position
     * @param {Vector} parentScale
     */
    instantiate(position, parentScale) {
        const childScale = new Vector({x: 10, y: 10})
        const scale = Vector.linearDivide(childScale, parentScale)
        const style = new Style()
        style.setColor('#00FF00')
        style.setBorderSize(2)
        const shape = PrimitiveShape.CIRCLE
        super.instantiate(GUIRotateComponent, scale, style, shape,
            this.getTransformPosition(position,
                TransformHelper.getSizeFromScale(childScale),
                TransformHelper.getSizeFromScale(parentScale)))
    }

    /**
     * @override
     */
    getTransformPosition(position, childSize, parentSize){
        const movePosition = new Vector()
        movePosition.setX(position.getX() - childSize.getWidth() / 2 + parentSize.getWidth() / 2)
        movePosition.setY(position.getY() - childSize.getHeight() / 2 + parentSize.getHeight() / 2)
        return movePosition
    }

}