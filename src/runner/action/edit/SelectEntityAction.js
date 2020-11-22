define(function (require) {

    const Action = require('../Action.js')
    const StateManager = require('../../../state/StateManager.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')

    /**
     * SelectEntityAction class
     * Select the entity provided in the AppState
     */
    class SelectEntityAction extends Action {

        /**
         * @const
         * @type {string}
         */
        static STATE = 'ACTION_SELECT_ENTITY'

        /**
         * Select an entity
         */
        static run() {
            EntitySelector.get().unselectAll()
            const {entity} = StateManager.get().getNextProgressData(this.STATE)
            entity.select()
            return true
        }

    }

    return SelectEntityAction

})