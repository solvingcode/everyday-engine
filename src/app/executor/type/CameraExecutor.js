import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import CameraComponent from '../../component/internal/CameraComponent.js'
import Vector from '../../utils/Vector.js'
import MeshComponent from '../../component/internal/MeshComponent.js'

export default class CameraExecutor extends ComponentExecutor {

    constructor() {
        super([TransformComponent, MeshComponent, CameraComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const cameraComponent = unit.getComponent(CameraComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        const meshComponent = unit.getComponent(MeshComponent)
        const unitFollow = world.getUnitManager().findUnitById(cameraComponent.getUnitFollow())
        if(unitFollow){
            const unitFollowPosition = unitFollow.getComponent(TransformComponent).getPosition()
            const sizeCamera = meshComponent.getSize()
            const newCameraPosition = Vector
                .subtract(unitFollowPosition, new Vector({x: sizeCamera.getWidth() / 2, y: sizeCamera.getHeight() / 2}))
            transformComponent.getPosition().setX(newCameraPosition.getX())
            transformComponent.getPosition().setY(newCameraPosition.getY())
        }
    }

}