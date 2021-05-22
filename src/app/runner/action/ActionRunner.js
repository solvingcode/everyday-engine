import Runner from '../Runner.js'
import World from '../../world/World.js'
import StateManager from '../../state/StateManager.js'
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
import RotateAction from './edit/RotateAction.js'
import PanelCollapseAction from './panel/PanelCollapseAction.js'
import HideItemAction from './edit/HideItemAction.js'
import ShowItemAction from './edit/ShowItemAction.js'
import LockItemAction from './edit/LockItemAction.js'
import UnlockItemAction from './edit/UnlockItemAction.js'
import AddAssetAction from './assets/AddAssetAction.js'
import AddAssetSceneAction from './assets/AddAssetSceneAction.js'
import UnitSelector from '../../selector/UnitSelector.js'
import AddCameraAction from './camera/AddCameraAction.js'
import CompileAssetScriptAction from './assets/CompileAssetScriptAction.js'
import EditAssetScriptXmlAction from './assets/EditAssetScriptXmlAction.js'
import SelectTabAction from './content/SelectTabAction.js'
import CloseTabAction from './content/CloseTabAction.js'
import AddFolderAction from './assets/AddFolderAction.js'
import SelectFolderAction from './assets/SelectFolderAction.js'
import AddScriptAction from './assets/AddScriptAction.js'
import DeleteNodeAction from './script/DeleteNodeAction.js'
import DeleteEdgeAction from './script/DeleteEdgeAction.js'
import AddNodeAction from './script/AddNodeAction.js'
import AddEdgeAction from './script/AddEdgeAction.js'
import AddScriptCodeAction from './assets/AddScriptCodeAction.js'
import SelectAssetAction from './assets/SelectAssetAction.js'
import DeleteAssetAction from './assets/DeleteAssetAction.js'
import DeleteFolderAction from './assets/DeleteFolderAction.js'
import CloseErrorPopupAction from './window/CloseErrorPopupAction.js'
import DeleteSelectedNodeAction from './script/DeleteSelectedNodeAction.js'

/**
 * Action Runner class.
 * Manage all action runner related to the app state.
 * @todo Refactor all actions that need to just do a
 *       simple call to EntityManager
 */
class ActionRunner extends Runner {

    constructor() {
        super()
        this.unitSelector = UnitSelector.get()
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
            ROTATE: RotateAction,
            MOVE_UP: MoveUpAction,
            MOVE_DOWN: MoveDownAction,
            LOCK: LockAction,
            UNLOCK: UnlockAction,
            HIDE: HideAction,
            HIDE_ITEM: HideItemAction,
            SHOW_ITEM: ShowItemAction,
            LOCK_ITEM: LockItemAction,
            UNLOCK_ITEM: UnlockItemAction,
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
            ADD_ASSET: AddAssetAction,
            ADD_FOLDER: AddFolderAction,
            ADD_ASSET_SCENE: AddAssetSceneAction,
            COMPILE_ASSET_SCRIPT: CompileAssetScriptAction,
            EDIT_ASSET_SCRIPT_XML: EditAssetScriptXmlAction,
            NEW_PROJECT: NewProjectAction,
            EXPORT_PROJECT: ExportProjectAction,
            ZOOM_CAMERA: ZoomInOutCameraAction,
            PHYSICS_STATIC: PhysicsStaticAction,
            PHYSICS_NOT_STATIC: PhysicsNotStaticAction,
            FORM_UPDATE: FormUpdateAction,
            COLLAPSE_PANEL: PanelCollapseAction,
            ADD_CAMERA: AddCameraAction,
            SELECT_TAB: SelectTabAction,
            CLOSE_TAB: CloseTabAction,
            SELECT_FOLDER: SelectFolderAction,
            SELECT_ASSET: SelectAssetAction,
            DELETE_FOLDER: DeleteFolderAction,
            DELETE_ASSET: DeleteAssetAction,
            ADD_SCRIPT: AddScriptAction,
            ADD_CODE_SCRIPT: AddScriptCodeAction,
            DELETE_SCRIPT_NODE: DeleteNodeAction,
            DELETE_SELECTED_NODE: DeleteSelectedNodeAction,
            DELETE_SCRIPT_EDGE: DeleteEdgeAction,
            ADD_SCRIPT_NODE: AddNodeAction,
            ADD_SCRIPT_EDGE: AddEdgeAction,
            CLOSE_ERROR_POPUP: CloseErrorPopupAction
        }
        const selectedUnits = this.unitSelector.getSelected(World.get())
        for(const iTypeAction in typeActions){
            const typeAction = typeActions[iTypeAction]
            const type = `ACTION_${iTypeAction}`
            const action = typeAction
            if (action.shouldStart(type, stateManager)) {
                stateManager.progressNextState(type)
            }else if (action.shouldProgress(type, stateManager)) {
                this.runAction(action, mouse, selectedUnits) && stateManager.stopNextState(type)
            }else if (action.shouldStop(type, stateManager)) {
                this.stopState(action, mouse, selectedUnits) && stateManager.endNextState(type)
            }
        }
    }

    /**
     * Run action for the selected entities
     * @param {Action} action
     * @param {Mouse} mouse
     * @param {Unit[]} selectedUnits
     */
    runAction(action, mouse, selectedUnits) {
        return action.run(mouse, selectedUnits, this.unitSelector)
    }

    /**
     * Stop action
     * @param {Action} action
     * @param {Mouse} mouse
     * @param {Unit[]} selectedUnits
     */
    stopState(action, mouse, selectedUnits) {
        return action.stop(mouse, selectedUnits)
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