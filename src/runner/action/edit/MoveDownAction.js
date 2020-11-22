define(function (require) {

    const Action = require('../Action.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')

    class MoveDownAction extends Action {

        /**
         * Move selected entities down
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities) {
            const entityManager = EntityManager.get()
            selectedEntities.forEach(entity => entityManager.moveDown((entity)))
            return true
        }

    }

    return MoveDownAction

})