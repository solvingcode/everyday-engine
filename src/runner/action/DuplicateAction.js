define(function (require) {

    const Action = require('./Action.js')
    const EntityManager = require('../../world/manager/EntityManager.js')

    /**
     * Duplicate Action
     * Allow to duplicate (clone) an entity
     */
    class DuplicateAction extends Action {

        /**
         * Duplicate selected entities
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities, entitySelector) {
            const entityManager = EntityManager.get()
            entitySelector.unselectAll()
            entityManager.cloneEntities(selectedEntities)
                .forEach(entity => entity.select())
            return true
        }

    }

    return DuplicateAction

})