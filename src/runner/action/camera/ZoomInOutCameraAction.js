define(function (require) {

    const Action = require('../Action.js')
    const World = require('../../../world/World.js')
    const Vector = require('../../../utils/Vector.js')
    const StateManager = require('../../../state/StateManager.js')

    /**
     * Move camera action
     */
    class ZoomInOutCameraAction extends Action {

        static STATE = 'ACTION_ZOOM_CAMERA'

        /**
         * Zoom in/out the editor camera (move mouse wheel)
         * @override
         * @param {Mouse} mouse
         */
        static run(mouse) {
            const camera = World.get().getCamera()
            const {deltaY} = StateManager.get().getNextProgressData(this.STATE)
            if (camera) {
                const zoom = deltaY * -0.01
                camera.update(Vector.add(
                    camera.position,
                    {x: 0, y: 0, z: Math.round(zoom * 100 ) / 100}
                ))
            }
            return true
        }

    }

    return ZoomInOutCameraAction

})