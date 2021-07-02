import ColliderLoader from '../../ColliderLoader.js'
import UnitHelper from '../../../../utils/UnitHelper.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'

export default class MatterRectColliderLoader extends ColliderLoader {

    /**
     * @override
     * @param {Unit} unit
     * @param {ColliderComponent} colliderComponent
     * @return {Matter.Body}
     */
    static load(unit, colliderComponent) {
        const transformComponent = unit.getComponent(TransformComponent)
        const colliderPosition = UnitHelper.toColliderCenterPosition(unit, colliderComponent,
            transformComponent.getPosition(), colliderComponent.getRotation())
        const colliderSize = UnitHelper.getColliderSize(unit, colliderComponent)
        return Matter.Bodies.rectangle(
            colliderPosition.x,
            colliderPosition.y,
            colliderSize.getWidth(),
            colliderSize.getHeight()
        )
    }

}