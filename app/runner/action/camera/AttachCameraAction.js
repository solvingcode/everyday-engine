define(function (require) {

    import Action from '../Action.js'
    import World from '../../../world/World.js'

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

    export default AttachCameraAction

})