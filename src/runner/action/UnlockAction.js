define(function (require) {

    const Action = require('./Action.js')
    const EntityManager = require('../../world/manager/EntityManager.js')

    class UnlockAction extends Action {

        /**
         * Unlock selected entities for modification
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities) {
            const entityManager = EntityManager.get()
            selectedEntities.forEach(entity => entityManager.unlock(entity))
            return true
        }

    }

    return UnlockAction

})