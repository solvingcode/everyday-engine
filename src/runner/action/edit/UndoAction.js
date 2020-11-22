define(function (require) {

    const Action = require('../Action.js')
    const History = require('../../../core/History.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')
    const Storage = require('../../../core/Storage.js')

    class UndoAction extends Action {

        /**
         * Undo actions
         */
        static run() {
            const data = History.get().pop()
            data && EntityManager.get().replace(data.fetch(Storage.type.ENTITY))
            return true
        }

    }

    return UndoAction

})