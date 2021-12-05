import Vector from '../../../../../utils/Vector.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'
import TransformUnitInstant from './TransformUnitInstant.js'

export default class TransformFreeUnitInstant extends TransformUnitInstant {

    /**
     * @param {Class} moveComponentClass
     * @param {Vector} childScale
     * @param {Vector} parentScale
     * @param {Style} style
     * @param {string} shape
     * @param {Vector} localPosition
     */
    instantiate(moveComponentClass, childScale, parentScale, style, shape, localPosition) {
        const scale = Vector.linearDivide(childScale, parentScale)
        super.instantiate(moveComponentClass, scale, style, shape,
            this.getTransformPosition(localPosition,
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