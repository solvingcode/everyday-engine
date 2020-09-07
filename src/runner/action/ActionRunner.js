define(function (require) {

    const Runner = require('../Runner.js')
    const AppState = require('../../core/AppState.js')
    const EntitySelector = require('../../world/manager/EntitySelector.js')
    const DeleteAction = require('./DeleteAction.js')
    const DuplicateAction = require('./DuplicateAction.js')

    class ActionRunner extends Runner {

        constructor() {
            super()
            this.entitySelector = EntitySelector.get()
        }

        /**
         * Execute start/stop action
         * @param {Mouse} mouse 
         */
        execute(mouse) {
            const appState = AppState.get()
            const typeActions = {
                DELETE: DeleteAction,
                DUPLICATE: DuplicateAction
            }
            const selectedEntities = this.entitySelector.getSelected()
            Object.entries(typeActions).forEach(typeAction => {
                const type = typeAction[0]
                const action = typeAction[1]
                if (appState.hasState(`ACTION_${type}`)) {
                    appState.removeState(`ACTION_${type}`)
                    this.runAction(action, selectedEntities)
                }
            })
        }

        /**
         * Run action for the selected entities
         * @param {Action} action 
         * @param {Array} selectedEntities 
         */
        runAction(action, selectedEntities) {
            action.run(selectedEntities, this.entitySelector)
        }

        static get() {
            if (!ActionRunner.instance) {
                ActionRunner.instance = new ActionRunner()
            }
            return ActionRunner.instance
        }
    }

    ActionRunner.instance = null

    return ActionRunner
})