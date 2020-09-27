define(function (require) {

    const Action = require('./Action.js')
    const EntityManager = require('../../world/manager/EntityManager.js')
    const AttachEntity = require('../../world/entity/AttachEntity.js')

    class DeleteAction extends Action {

        /**
         * Delete selected entities
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities) {
            const entityManager = EntityManager.get()
            selectedEntities.forEach(entity => entityManager.delete(entity, AttachEntity))
            return true
        }

    }

    return DeleteAction

})