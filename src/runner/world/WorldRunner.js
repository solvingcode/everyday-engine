define(function (require) {

    const Runner = require('../Runner.js')
    const StateManager = require('../../state/StateManager.js')
    const {MouseButton} = require('../../core/Mouse.js')
    const MoveCameraAction = require('../action/camera/MoveCameraAction.js')

    class WorldRunner extends Runner {

        /**
         * @type {WorldRunner}
         */
        static instance = null

        /**
         * Execute all world actions (move camera, ...)
         * @param {Mouse} mouse
         */
        execute(mouse) {
            const stateManager = StateManager.get()
            if (!stateManager.isRunning()) {
                if (mouse.isButtonPressed(MouseButton.MIDDLE)) {
                    stateManager.startState(MoveCameraAction.STATE, 1)
                }
            }
        }

        static get() {
            if (!WorldRunner.instance) {
                WorldRunner.instance = new WorldRunner()
            }
            return WorldRunner.instance
        }
    }

    return WorldRunner
})