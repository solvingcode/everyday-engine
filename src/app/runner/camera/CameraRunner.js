import Runner from '../Runner.js'
import World from '../../world/World.js'
import CameraComponent from '../../component/internal/CameraComponent.js'
import CameraHelper from '../../utils/CameraHelper.js'

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
        if(cameraUnit){
            const cameraComponent = cameraUnit.getComponent(CameraComponent)
            const unitFollow = world.getUnitManager().findUnitById(cameraComponent.getUnitFollow())
            if(unitFollow){
                CameraHelper.follow(camera, unitFollow)
            }
        }
    }

}