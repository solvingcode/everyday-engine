import Vector from '../../../../../utils/Vector.js'
import TransformUnitInstant from './TransformUnitInstant.js'

export default class TransformXUnitInstant extends TransformUnitInstant {

    /**
     * @override
     */
    getTransformPosition(position, childSize, parentSize){
        const movePosition = new Vector()
        movePosition.setX(position.getX() + parentSize.getWidth() / 2)
        movePosition.setY(position.getY() + parentSize.getHeight() / 2 - childSize.getHeight() / 2)
        return movePosition
    }

}