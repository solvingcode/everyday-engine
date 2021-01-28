define(function (require) {

    import Action from '../Action.js'

    /**
     * Rotate Action
     * Rotate an entity (clockwise direction)
     */
    class RotateUpAction extends Action {

        /**
         * @override
         * @param {Mouse} mouse
         * @param {Entity[]} selectedEntities
         */
        static run(mouse, selectedEntities) {
            selectedEntities.forEach(entity => {
                entity.setRotationDegree(
                    (entity.getRotationDegree() + 2) % 360
                )
            })
            return true
        }

    }

    export default RotateUpAction

})