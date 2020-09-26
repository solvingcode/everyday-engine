define(function (require) {

    const Action = require('./Action.js')
    const EntityManager = require('../../world/manager/EntityManager.js')
    const AttachEntity = require('../../world/entity/AttachEntity.js')

    class ShowAction extends Action {

        /**
         * Hide selected entities
         * @param {Array} selectedEntities
         */
        static run(mouse, selectedEntities) {
            const entityManager = EntityManager.get()
            selectedEntities.forEach(entity => 
                !(entity instanceof AttachEntity) && entityManager.show(entity))
            return true
        }

    }

    return ShowAction

})