import ColliderLoader from '../../ColliderLoader.js'
import UnitHelper from '../../../../utils/UnitHelper.js'
import Vector from '../../../../utils/Vector.js'

export default class MatterRectColliderLoader extends ColliderLoader {

    /**
     * @override
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @return {Matter.Body}
     */
    static load(unit, colliderComponent) {
        const rigidBodyPosition = UnitHelper.toCenterPosition(unit)
        const colliderPosition = colliderComponent.getPosition()
        const colliderSize = colliderComponent.getSize()
        const position = Vector.add(rigidBodyPosition, colliderPosition)
        return Matter.Bodies.rectangle(
            position.x,
            position.y,
            colliderSize.getWidth(),
            colliderSize.getHeight()
        )
    }

}