define(function (require) {

    const Action = require('../Action.js')
    const World = require('../../../world/World.js')

    class DeleteAction extends Action {

        /**
         * @override
         */
        static run(mouse, selectedEntities) {
            const entityManager = World.get().getEntityManager()
            selectedEntities.forEach(entity => entityManager.delete(entity))
            return true
        }

    }

    return DeleteAction

})