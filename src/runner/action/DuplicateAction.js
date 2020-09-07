define(function (require) {

    const Action = require('./Action.js')
    const EntityManager = require('../../world/manager/EntityManager.js')

    class DuplicateAction extends Action {

        /**
         * Delete selected entities
         * @param {Array} selectedEntities
         */
        static run(selectedEntities, entitySelector) {
            const entityManager = EntityManager.get()
            entitySelector.unselectAll()
            selectedEntities.forEach(entity => entityManager.clone(entity).select())
        }

    }

    return DuplicateAction

})