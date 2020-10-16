define(function (require) {

    const Action = require('../Action.js')

    /**
     * Physics Static action
     */
    class PhysicsStaticAction extends Action {

        /**
         * Make the entity static (not move)
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities) {
            selectedEntities.map(entity => entity.setStatic(true))
            return true
        }

    }

    return PhysicsStaticAction

})