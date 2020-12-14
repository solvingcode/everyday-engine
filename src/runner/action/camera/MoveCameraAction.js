define(function (require) {

    const Action = require('../Action.js')
    const World = require('../../../world/World.js')
    const Vector = require('../../../utils/Vector.js')

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
            if(camera){
                const dragDistance = mouse.dragAndDrop()
                camera.update(Vector.add(camera.position, Vector.multiply(dragDistance, -1)))
            }
            return true
        }

    }

    return MoveCameraAction

})