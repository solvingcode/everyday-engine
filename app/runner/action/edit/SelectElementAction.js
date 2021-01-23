define(function (require) {

    const Action = require('../Action.js')
    const StateManager = require('../../../state/StateManager.js')

    /**
     * @class {SelectElementAction}
     */
    class SelectElementAction extends Action {

        /**
         * @const
         * @type {string}
         */
        static STATE = 'ACTION_SELECT_LIST_ELEMENT'

        /**
         * @override
         */
        static run() {
            const {bind, list} = StateManager.get().getNextProgressData(this.STATE)
            list.forEach(element => element.unselect())
            bind.select()
            return true
        }

    }

    return SelectElementAction

})