define(function (require) {

    const Action = require('../Action.js')
    const World = require('../../../world/World.js')

    class MoveDownAction extends Action {

        /**
         * @override
         */
        static run(mouse, selectedEntities) {
            const entityManager = World.get().getEntityManager()
            selectedEntities.forEach(entity => entityManager.moveDown((entity)))
            return true
        }

    }

    return MoveDownAction

})