import Runner from '../Runner.js'
import World from '../../world/World.js'
import StateManager from '../../state/StateManager.js'
import EntitySelector from '../../world/manager/EntitySelector.js'
import DeleteAction from './edit/DeleteAction.js'
import DuplicateAction from './edit/DuplicateAction.js'
import UndoAction from './edit/UndoAction.js'
import MoveAction from './edit/MoveAction.js'
import MoveUpAction from './edit/MoveUpAction.js'
import MoveDownAction from './edit/MoveDownAction.js'
import LockAction from './edit/LockAction.js'
import UnlockAction from './edit/UnlockAction.js'
import HideAction from './edit/HideAction.js'
import ShowAction from './edit/ShowAction.js'
import RotateUpAction from './edit/RotateUpAction.js'
import StyleColorAction from './edit/StyleColorAction.js'
import SelectEntityAction from './edit/SelectEntityAction.js'
import SelectElementAction from './edit/SelectElementAction.js'
import PushHistoryAction from './history/PushHistoryAction.js'
import AttachCameraAction from './camera/AttachCameraAction.js'
import DetachCameraAction from './camera/DetachCameraAction.js'
import MoveCameraAction from './camera/MoveCameraAction.js'
import SaveProjectAction from './project/SaveProjectAction.js'
import LoadProjectAction from './project/LoadProjectAction.js'
import ExportProjectAction from './project/ExportProjectAction.js'
import NewProjectAction from './project/NewProjectAction.js'
import ZoomInOutCameraAction from './camera/ZoomInOutCameraAction.js'
import PhysicsStaticAction from './physics/PhysicsStaticAction.js'
import PhysicsNotStaticAction from './physics/PhysicsNotStaticAction.js'
import FormUpdateAction from './form/FormUpdateAction.js'
import ScaleAction from './edit/ScaleAction.js'

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
     * @override
     */
    isHandle(window) {
        return true
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
            SCALE: ScaleAction,
            MOVE_UP: MoveUpAction,
            MOVE_DOWN: MoveDownAction,
            LOCK: LockAction,
            UNLOCK: UnlockAction,
            HIDE: HideAction,
            SHOW: ShowAction,
            ROTATE_UP: RotateUpAction,
            STYLE_COLOR: StyleColorAction,
            SELECT_ENTITY: SelectEntityAction,
            SELECT_LIST_ELEMENT: SelectElementAction,
            ATTACH_CAMERA: AttachCameraAction,
            DETACH_CAMERA: DetachCameraAction,
            MOVE_CAMERA: MoveCameraAction,
            SAVE_PROJECT: SaveProjectAction,
            LOAD_PROJECT: LoadProjectAction,
            NEW_PROJECT: NewProjectAction,
            EXPORT_PROJECT: ExportProjectAction,
            ZOOM_CAMERA: ZoomInOutCameraAction,
            PHYSICS_STATIC: PhysicsStaticAction,
            PHYSICS_NOT_STATIC: PhysicsNotStaticAction,
            FORM_UPDATE: FormUpdateAction,

            //must be the last action
            HISTORY_PUSH: PushHistoryAction
        }
        const selectedEntities = this.entitySelector.getSelected(World.get())
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

export default ActionRunner