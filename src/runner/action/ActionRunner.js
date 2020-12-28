define(function (require) {

    const Runner = require('../Runner.js')
    const StateManager = require('../../state/StateManager.js')
    const EntitySelector = require('../../world/manager/EntitySelector.js')
    const DeleteAction = require('./edit/DeleteAction.js')
    const DuplicateAction = require('./edit/DuplicateAction.js')
    const UndoAction = require('./edit/UndoAction.js')
    const MoveAction = require('./edit/MoveAction.js')
    const MoveUpAction = require('./edit/MoveUpAction.js')
    const MoveDownAction = require('./edit/MoveDownAction.js')
    const LockAction = require('./edit/LockAction.js')
    const UnlockAction = require('./edit/UnlockAction.js')
    const HideAction = require('./edit/HideAction.js')
    const ShowAction = require('./edit/ShowAction.js')
    const RotateUpAction = require('./edit/RotateUpAction.js')
    const StyleColorAction = require('./edit/StyleColorAction.js')
    const SelectEntityAction = require('./edit/SelectEntityAction.js')
    const PushHistoryAction = require('./history/PushHistoryAction.js')
    const AttachCameraAction = require('./camera/AttachCameraAction.js')
    const DetachCameraAction = require('./camera/DetachCameraAction.js')
    const MoveCameraAction = require('./camera/MoveCameraAction.js')
    const SaveProjectAction = require('./project/SaveProjectAction.js')
    const ZoomInOutCameraAction = require('./camera/ZoomInOutCameraAction.js')
    const PhysicsStaticAction = require('./physics/PhysicsStaticAction.js')
    const PhysicsNotStaticAction = require('./physics/PhysicsNotStaticAction.js')
    const FormUpdateAction = require('./form/FormUpdateAction.js')

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
            const stateManager = StateManager.get()
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
                ROTATE_UP: RotateUpAction,
                STYLE_COLOR: StyleColorAction,
                SELECT_ENTITY: SelectEntityAction,
                ATTACH_CAMERA: AttachCameraAction,
                DETACH_CAMERA: DetachCameraAction,
                MOVE_CAMERA: MoveCameraAction,
                SAVE_PROJECT: SaveProjectAction,
                ZOOM_CAMERA: ZoomInOutCameraAction,
                PHYSICS_STATIC: PhysicsStaticAction,
                PHYSICS_NOT_STATIC: PhysicsNotStaticAction,
                FORM_UPDATE: FormUpdateAction,

                //must be the last action
                HISTORY_PUSH: PushHistoryAction
            }
            const selectedEntities = this.entitySelector.getSelected()
            Object.entries(typeActions).forEach(typeAction => {
                const type = `ACTION_${typeAction[0]}`
                const action = typeAction[1]
                if (action.shouldStart(type, stateManager)) {
                    stateManager.progressNextState(type)
                }
                if (action.shouldProgress(type, stateManager)) {
                    this.runAction(action, mouse, selectedEntities) && stateManager.stopNextState(type)
                }
                if (action.shouldStop(type, stateManager)) {
                    this.stopState(action, mouse, selectedEntities) && stateManager.endNextState(type)
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
         * @param {Mouse} mouse
         * @param {Entity[]} selectedEntities
         */
        stopState(action, mouse, selectedEntities) {
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