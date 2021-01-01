define(function (require) {

    const Action = require('../Action.js')
    const World = require('../../../world/World.js')

    class MoveUpAction extends Action {

        /**
         * @override
         */
        static run(mouse, selectedEntities) {
            const entityManager = World.get().getEntityManager()
            selectedEntities.forEach(entity => entityManager.moveUp((entity)))
            return true
        }

    }

    return MoveUpAction

})