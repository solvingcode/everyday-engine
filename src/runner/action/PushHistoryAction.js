define(function (require) {

    const Action = require('./Action.js')
    const History = require('../../core/History.js')
    const EntityManager = require('../../world/manager/EntityManager.js')
    const Storage = require('../../core/Storage.js')

    class PushHistoryAction extends Action {

        /**
         * Undo actions
         */
        static run() {
            History.get().push(Storage.type.ENTITY, EntityManager.get().entities)
            return true
        }

    }

    return PushHistoryAction

})