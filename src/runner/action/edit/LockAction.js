define(function (require) {

    const Action = require('../Action.js')
    const World = require('../../../world/World.js')
    const AttachEntity = require('../../../entity/types/joint/AttachEntity.js')

    class LockAction extends Action {

        /**
         * @override
         */
        static run(mouse, selectedEntities) {
            const entityManager = World.get().getEntityManager()
            selectedEntities.forEach(entity => 
                !(entity instanceof AttachEntity) && entityManager.lock(entity))
            return true
        }

    }

    return LockAction

})