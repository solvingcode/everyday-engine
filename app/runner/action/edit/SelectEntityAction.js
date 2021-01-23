define(function (require) {

    const Action = require('../Action.js')
    const StateManager = require('../../../state/StateManager.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const World = require('../../../world/World.js')

    /**
     * @class {SelectEntityAction}
     * Select the entity provided in the AppState
     */
    class SelectEntityAction extends Action {

        /**
         * @const
         * @type {string}
         */
        static STATE = 'ACTION_SELECT_ENTITY'

        /**
         * @override
         */
        static run() {
            EntitySelector.get().unselectAll(World.get())
            const {bind} = StateManager.get().getNextProgressData(this.STATE)
            bind.select()
            return true
        }

    }

    return SelectEntityAction

})