define(function (require) {

    const Action = require('./Action.js')
    const World = require('../../world/World.js')

    /**
     * Detach camera action
     */
    class DetachCameraAction extends Action {

        /**
         * Detach the camera
         */
        static run() {
            World.get().getCamera().detach()
            return true
        }

    }

    return DetachCameraAction

})