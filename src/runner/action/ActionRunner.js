define(function (require) {

    const Runner = require('../Runner.js')
    const AppState = require('../../core/AppState.js')
    const EntitySelector = require('../../world/manager/EntitySelector.js')
    const DeleteAction = require('./DeleteAction.js')
    const DuplicateAction = require('./DuplicateAction.js')
    const UndoAction = require('./UndoAction.js')
    const MoveAction = require('./MoveAction.js')
    const MoveUpAction = require('./MoveUpAction.js')
    const MoveDownAction = require('./MoveDownAction.js')
    const LockAction = require('./LockAction.js')
    const UnlockAction = require('./UnlockAction.js')
    const HideAction = require('./HideAction.js')
    const ShowAction = require('./ShowAction.js')
    const StyleColorAction = require('./StyleColorAction.js')
    const SelectEntityAction = require('./SelectEntityAction.js')
    const PushHistoryAction = require('./PushHistoryAction.js')

    /**
     * Action Runner class.
     * Manage all action runner related to the app state.
     * @todo Refactor all actions that need to just do a 
     *       simple call to EntityManager
     */
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
                DUPLICATE: DuplicateAction,
                UNDO: UndoAction,
                MOVE: MoveAction,
                MOVE_UP: MoveUpAction,
                MOVE_DOWN: MoveDownAction,
                LOCK: LockAction,
                UNLOCK: UnlockAction,
                HIDE: HideAction,
                SHOW: ShowAction,
                STYLE_COLOR: StyleColorAction,
                SELECT_ENTITY: SelectEntityAction,
                HISTORY_PUSH: PushHistoryAction
            }
            const selectedEntities = this.entitySelector.getSelected()
            Object.entries(typeActions).forEach(typeAction => {
                const type = typeAction[0]
                const action = typeAction[1]
                if (appState.hasState(`ACTION_${type}_START`)) {
                    this.runAction(action, mouse, selectedEntities) && appState.setUniqStateByGroup('ACTION', `${type}_STOP`)
                } else if (appState.hasState(`ACTION_${type}_STOP`)) {
                    this.stopAction(action, mouse, selectedEntities) && appState.removeState(`ACTION_${type}_STOP`)
                }
            })
        }

        /**
         * Run action for the selected entities
         * @param {Action} action 
         * @param {Mouse} mouse 
         * @param {Array} selectedEntities 
         */
        runAction(action, mouse, selectedEntities) {
            return action.run(mouse, selectedEntities, this.entitySelector)
        }

        /**
         * Stop action
         * @param {Action} action
         */
        stopAction(action, mouse, selectedEntities) {
            return action.stop(mouse, selectedEntities)
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