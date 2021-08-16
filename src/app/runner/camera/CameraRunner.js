import Runner from '../Runner.js'
import World from '../../world/World.js'
import CameraHelper from '../../utils/CameraHelper.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import MeshComponent from '../../component/internal/MeshComponent.js'

export default class CameraRunner extends Runner {

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * @override
     */
    execute() {
        const world = World.get()
        const camera = world.getCamera()
        const cameraUnit = camera.getUnit(world.getUnitManager())
        if (cameraUnit) {
            const meshComponent = cameraUnit.getComponent(MeshComponent)
            const transformComponent = cameraUnit.getComponent(TransformComponent)
            const scale = world.getResolution().getWidth() / meshComponent.getSize().getWidth()
            if (camera.getScale() !== scale) {
                camera.setScale(scale)
                world.regenerateAll()
            }
            CameraHelper.follow(camera, transformComponent.getPosition())
        }
    }

}