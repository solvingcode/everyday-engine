import Vector from '../../../../../utils/Vector.js'
import TransformUnitInstant from './TransformUnitInstant.js'

export default class TransformYUnitInstant extends TransformUnitInstant {

    /**
     * @override
     */
    getTransformPosition(position, childSize, parentSize){
        const movePosition = new Vector()
        movePosition.setX(position.getX() + parentSize.getWidth() / 2 - childSize.getWidth() / 2)
        movePosition.setY(position.getY() + parentSize.getHeight() / 2)
        return movePosition
    }

}