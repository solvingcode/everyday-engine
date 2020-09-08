define(function (require) {

    const Action = require('./Action.js')
    const History = require('../../core/History.js')

    class UndoAction extends Action {

        /**
         * Undo actions
         */
        static run() {
            const history = History.get()
            history.pop()
            return true
        }

    }

    return UndoAction

})