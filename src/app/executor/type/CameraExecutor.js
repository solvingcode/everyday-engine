import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import CameraComponent from '../../component/internal/CameraComponent.js'
import Vector from '../../utils/Vector.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import Maths from '../../utils/Maths.js'
import TransformHelper from '../../utils/TransformHelper.js'

export default class CameraExecutor extends ComponentExecutor {

    constructor() {
        super([TransformComponent, CameraComponent])
    }

    /**
     * @todo: need some refactoring
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const cameraComponent = unit.getComponent(CameraComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        const meshComponent = unit.getComponent(MeshComponent)
        const unitFollow = world.getUnitManager().findUnitById(cameraComponent.getUnitFollow())
        if (unitFollow) {
            const maxSmoothing = 0.01
            const minSmoothing = 0.1
            const minSmoothInput = 1
            const maxSmoothInput = 10

            const deadZone = cameraComponent.getDeadZone()
            const smoothing = cameraComponent.getSmoothing()
            const delayTime = cameraComponent.getDelayTime()
            const delaySmoothing = cameraComponent.getDelaySmoothing()
            const lastLookDistance = cameraComponent.getLookDistance()
            const lastUnitFollowPosition = cameraComponent.getLastUnitFollowPosition()

            const unitFollowPosition = unitFollow.getComponent(TransformComponent).getPosition()
            const sizeCamera = TransformHelper.getSizeFromScale(transformComponent.getScale())
            const sizeUnitFollow = unitFollow.getComponent(MeshComponent).getSize()
            const centerCamera = new Vector({x: sizeCamera.getWidth() / 2, y: sizeCamera.getHeight() / 2})
            const centerUnitFollow = new Vector({x: sizeUnitFollow.getWidth() / 2, y: sizeUnitFollow.getHeight() / 2})
            const lastCameraPosition = transformComponent.getLocalPosition()

            const newCameraPosition = new Vector(lastCameraPosition)

            //calculate tracking point
            const maxDelay = 200
            const cameraPositionAttachedToUnit = Vector.add(Vector.subtract(unitFollowPosition, centerCamera), centerUnitFollow)
            const trackPoint = Vector.subtract(cameraPositionAttachedToUnit,
                new Vector({x: lastCameraPosition.getX(), y: lastCameraPosition.getY()}))
            const moveUnitDistance = Vector.subtract(unitFollowPosition, lastUnitFollowPosition)
            const newDelaySmoothing = new Vector({
                x: Maths.fromInterval(
                    [maxSmoothing, minSmoothing], [minSmoothInput, maxSmoothInput],
                    maxSmoothInput - delaySmoothing.getX()),
                y: Maths.fromInterval(
                    [maxSmoothing, minSmoothing], [minSmoothInput, maxSmoothInput],
                    maxSmoothInput - delaySmoothing.getY())
            })
            let maxLookDistance = Vector.linearMultiply(moveUnitDistance, Vector.multiply(delayTime, maxDelay))
            let lookDistance = Vector.add(lastLookDistance, maxLookDistance)
            if(lookDistance > maxLookDistance){
                lookDistance = maxLookDistance
            }
            const smoothLookDistance = Vector.linearMultiply(lookDistance, newDelaySmoothing)
            lookDistance = Vector.subtract(lookDistance, smoothLookDistance)
            const trackPointDelayed = Vector.add(trackPoint, smoothLookDistance)

            //move camera
            if (Math.abs(trackPointDelayed.getX()) >= deadZone.getWidth() / 2) {
                const distanceX = (Math.abs(trackPointDelayed.getX()) - deadZone.getWidth() / 2) * (Math.abs(trackPointDelayed.getX()) / trackPointDelayed.getX())
                const distanceXSmoothing = distanceX * Maths.fromInterval(
                    [maxSmoothing, minSmoothing], [minSmoothInput, maxSmoothInput], maxSmoothInput - smoothing.getX())
                newCameraPosition.setX(newCameraPosition.getX() + distanceXSmoothing)
            }
            if (Math.abs(trackPointDelayed.getY()) >= deadZone.getHeight() / 2) {
                const distanceY = (Math.abs(trackPointDelayed.getY()) - deadZone.getHeight() / 2) * (Math.abs(trackPointDelayed.getY()) / trackPointDelayed.getY())
                const distanceYSmoothing = distanceY * Maths.fromInterval(
                    [maxSmoothing, minSmoothing], [minSmoothInput, maxSmoothInput], maxSmoothInput - smoothing.getY())
                newCameraPosition.setY(newCameraPosition.getY() + distanceYSmoothing)
            }

            if ((!_.isEqual(transformComponent.getLocalPosition(), newCameraPosition) ||
                !_.isEqual(cameraComponent.getTrackPoint(), trackPointDelayed)) && meshComponent) {
                transformComponent.setLocalPosition(newCameraPosition)
                cameraComponent.setTrackPoint(trackPointDelayed)
                cameraComponent.setLastUnitFollowPosition(unitFollowPosition)
                cameraComponent.setLookDistance(lookDistance)
                meshComponent.setGenerated(false)
            }
        }
    }

}