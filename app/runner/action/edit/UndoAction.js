define(function (require) {

    const Action = require('../Action.js')
    const History = require('../../../core/History.js')
    const World = require('../../../world/World.js')
    const Storage = require('../../../core/Storage.js')

    class UndoAction extends Action {

        /**
         * Undo actions
         */
        static run() {
            const data = History.get().pop()
            data && World.get().getEntityManager().replace(data.fetch(Storage.type.ENTITY))
            return true
        }

    }

    return UndoAction

})