define(function (require) {

    const Action = require('../Action.js')
    const History = require('../../../core/History.js')
    const World = require('../../../world/World.js')
    const Storage = require('../../../core/Storage.js')

    class PushHistoryAction extends Action {

        /**
         * Undo actions
         */
        static run() {
            History.get().push(Storage.type.ENTITY, World.get().getEntityManager().entities)
            return true
        }

    }

    return PushHistoryAction

})