define(function (require) {

    const Action = require('./Action.js')
    const AppState = require('../../core/AppState.js')
    const EntitySelector = require('../../world/manager/EntitySelector.js')

    /**
     * SelectEntityAction class
     * Select the entity provided in the AppState 
     */
    class SelectEntityAction extends Action {

        /**
         * Select an entity
         */
        static run() {
            EntitySelector.get().unselectAll()
            AppState.get().getData('entity').select()
            return true
        }

    }

    return SelectEntityAction

})