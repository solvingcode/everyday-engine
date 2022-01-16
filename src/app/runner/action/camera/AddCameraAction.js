import Action from '../Action.js'
import World from '../../../world/World.js'
import Vector from '../../../utils/Vector.js'
import CameraUnitInstant from '../../../unit/instant/type/internal/camera/CameraUnitInstant.js'

export default class AddCameraAction extends Action {

    static STATE = 'ACTION_ADD_CAMERA'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        world.createUnitInstant(CameraUnitInstant, new Vector(), world.getResolution())
        return true
    }

}