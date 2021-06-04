import ColliderLoader from '../../ColliderLoader.js'
import UnitHelper from '../../../../utils/UnitHelper.js'

export default class MatterRectColliderLoader extends ColliderLoader {

    /**
     * @override
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @return {Matter.Body}
     */
    static load(unit, colliderComponent) {
        const colliderPosition = UnitHelper.toColliderCenterPosition(unit, colliderComponent)
        const colliderSize = UnitHelper.getColliderSize(unit, colliderComponent)
        return Matter.Bodies.rectangle(
            colliderPosition.x,
            colliderPosition.y,
            colliderSize.getWidth(),
            colliderSize.getHeight()
        )
    }

}