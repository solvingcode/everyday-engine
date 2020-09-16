define(function (require) {

    const Action = require('./Action.js')
    const EntityManager = require('../../world/manager/EntityManager.js')

    /**
     * Duplicate Action
     * Allow to duplicate (clone) an entity
     */
    class DuplicateAction extends Action {

        /**
         * Delete selected entities
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities, entitySelector) {
            const entityManager = EntityManager.get()
            entitySelector.unselectAll()
            selectedEntities.forEach(entity => {
                const cloneEntity = entityManager.clone(entity)
                cloneEntity && cloneEntity.select()
            })
            return true
        }

    }

    return DuplicateAction

})