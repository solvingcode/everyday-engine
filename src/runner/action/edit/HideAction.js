define(function (require) {

    const Action = require('../Action.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')
    const AttachEntity = require('../../../entity/types/AttachEntity.js')

    class HideAction extends Action {

        /**
         * Hide selected entities
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities) {
            const entityManager = EntityManager.get()
            selectedEntities.forEach(entity => 
                !(entity instanceof AttachEntity) && entityManager.hide(entity))
            return true
        }

    }

    return HideAction

})