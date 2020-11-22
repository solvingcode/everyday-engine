define(function (require) {

    const Action = require('../Action.js')
    const World = require('../../../world/World.js')

    /**
     * Attach camera action
     */
    class AttachCameraAction extends Action {

        /**
         * Attach selected entity to the camera
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities) {
            const camera = World.get().getCamera()
            if(selectedEntities){
                camera.attach(selectedEntities[0])
            }
            return true
        }

    }

    return AttachCameraAction

})