import TransformComponent from '../component/internal/TransformComponent.js'
import Vector from './Vector.js'
import World from '../world/World.js'

export default class CameraHelper {

    /**
     * @param {Camera} camera
     * @param {Unit} unit
     */
    static follow(camera, unit){
        const unitPosition = unit.getComponent(TransformComponent).getPosition()
        const resolution = World.get().getResolution()
        const resolutionScaled = camera.fromCameraScale(new Vector({x: resolution.getWidth() / 2, y: resolution.getHeight() / 2}))
        const newCameraPosition = Vector
            .subtract(unitPosition, resolutionScaled)
        camera.getPosition().setX(newCameraPosition.getX())
        camera.getPosition().setY(newCameraPosition.getY())
    }

}
