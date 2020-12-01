define(function (require) {

    const Action = require('../Action.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')
    const AttachEntity = require('../../../entity/types/AttachEntity.js')

    class LockAction extends Action {

        /**
         * Lock selected entities for modification
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities) {
            const entityManager = EntityManager.get()
            selectedEntities.forEach(entity => 
                !(entity instanceof AttachEntity) && entityManager.lock(entity))
            return true
        }

    }

    return LockAction

})