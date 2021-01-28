import Action from '../Action.js'
import World from '../../../world/World.js'
import Vector from '../../../utils/Vector.js'

/**
 * Move camera action
 */
class MoveCameraAction extends Action {

    static STATE = 'ACTION_MOVE_CAMERA'

    /**
     * Move the editor camera (drag middle mouse button)
     * @override
     * @param {Mouse} mouse
     */
    static run(mouse) {
        const camera = World.get().getCamera()
        if (camera) {
            const dragDistance = mouse.dragAndDrop()
            camera.update(Vector.add(camera.position, Vector.multiply(dragDistance, -1)))
        }
        return true
    }

}

export default MoveCameraAction