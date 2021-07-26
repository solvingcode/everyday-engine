import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import CameraComponent from '../../component/internal/CameraComponent.js'
import Vector from '../../utils/Vector.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import ObjectHelper from '../../utils/ObjectHelper.js'

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
            const deadZone = cameraComponent.getDeadZone()

            const unitFollowPosition = unitFollow.getComponent(TransformComponent).getPosition()
            const sizeCamera = meshComponent.getSize()
            const sizeUnitFollow = unitFollow.getComponent(MeshComponent).getSize()
            const centerCamera = new Vector({x: sizeCamera.getWidth() / 2, y: sizeCamera.getHeight() / 2})
            const centerUnitFollow = new Vector({x: sizeUnitFollow.getWidth() / 2, y: sizeUnitFollow.getHeight() / 2})
            const lastCameraPosition = transformComponent.getPosition()

            const newCameraPosition = new Vector(lastCameraPosition)

            //calculate tracking point
            const cameraPositionAttachedToUnit = Vector.add(Vector.subtract(unitFollowPosition, centerCamera), centerUnitFollow)
            const trackPoint = Vector.subtract(cameraPositionAttachedToUnit,
                new Vector({x: lastCameraPosition.getX(), y: lastCameraPosition.getY()}))

            //move camera
            if(Math.abs(trackPoint.getX()) >= deadZone.getWidth() / 2){
                const distanceX = (Math.abs(trackPoint.getX()) - deadZone.getWidth() / 2) * (Math.abs(trackPoint.getX()) / trackPoint.getX())
                newCameraPosition.setX(newCameraPosition.getX() + distanceX)
            }

            if(!ObjectHelper.isEqual(transformComponent.getPosition(), newCameraPosition) ||
                !ObjectHelper.isEqual(cameraComponent.getTrackPoint(), trackPoint)){
                transformComponent.getPosition().setX(newCameraPosition.getX())
                transformComponent.getPosition().setY(newCameraPosition.getY())
                cameraComponent.setTrackPoint(trackPoint)
                meshComponent.setGenerated(false)
            }
        }
    }

}