define(function (require) {

    const Action = require('../Action.js')

    /**
     * Physics Static action
     */
    class PhysicsNotStaticAction extends Action {

        /**
         * Make the entity not  static (move)
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities) {
            selectedEntities.map(entity => entity.setFixed(false))
            return true
        }

    }

    return PhysicsNotStaticAction

})