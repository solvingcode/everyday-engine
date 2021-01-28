define(function (require) {

    import Action from '../Action.js'
    import World from '../../../world/World.js'

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

    export default DetachCameraAction

})