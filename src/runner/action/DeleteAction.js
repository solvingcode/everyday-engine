define(function (require) {

    const Action = require('./Action.js')
    const EntityManager = require('../../world/manager/EntityManager.js')

    class DeleteAction extends Action {

        /**
         * @override
         */
        static run(mouse, selectedEntities) {
            const entityManager = EntityManager.get()
            selectedEntities.forEach(entity => entityManager.delete(entity))
            return true
        }

    }

    return DeleteAction

})