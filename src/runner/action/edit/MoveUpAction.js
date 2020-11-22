define(function (require) {

    const Action = require('../Action.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')

    class MoveUpAction extends Action {

        /**
         * Move selected entities up
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities) {
            const entityManager = EntityManager.get()
            selectedEntities.forEach(entity => entityManager.moveUp((entity)))
            return true
        }

    }

    return MoveUpAction

})