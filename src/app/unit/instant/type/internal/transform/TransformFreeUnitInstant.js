import Vector from '../../../../../utils/Vector.js'
import TransformUnitInstant from './TransformUnitInstant.js'

export default class TransformFreeUnitInstant extends TransformUnitInstant {

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