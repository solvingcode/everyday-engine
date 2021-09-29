import Runner from '../Runner.js'
import World from '../../world/World.js'
import StateManager from '../../state/StateManager.js'
import DeleteUnitAction from './unit/DeleteUnitAction.js'
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
import SelectElementAction from './edit/SelectElementAction.js'
import AttachCameraAction from './camera/AttachCameraAction.js'
import DetachCameraAction from './camera/DetachCameraAction.js'
import MoveCameraAction from './camera/MoveCameraAction.js'
import SaveProjectAction from './project/SaveProjectAction.js'
import LoadProjectAction from './project/LoadProjectAction.js'
import ExportProjectAction from './project/ExportProjectAction.js'
import NewProjectAction from './project/NewProjectAction.js'
import ZoomInOutCameraAction from './camera/ZoomInOutCameraAction.js'
import FormUpdateAction from './form/FormUpdateAction.js'
import ScaleAction from './edit/ScaleAction.js'
import RotateAction from './edit/RotateAction.js'
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
import AddClassScriptAction from './assets/AddClassScriptAction.js'
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
import AttachComponentAction from './unit/AttachComponentAction.js'
import AttachAssetScriptAction from './assets/AttachAssetScriptAction.js'
import AddAnimationAction from './animation/AddAnimationAction.js'
import EditAssetAnimationAction from './assets/EditAssetAnimationAction.js'
import AttachAssetAnimationAction from './animation/AttachAssetAnimationAction.js'
import DeleteKeyFrameAnimationAction from './animation/DeleteKeyFrameAnimationAction.js'
import PlayAnimationAction from './animation/PlayAnimationAction.js'
import StopAnimationAction from './animation/StopAnimationAction.js'
import Window from '../../core/Window.js'
import AddAnimationScriptAction from './assets/AddAnimationScriptAction.js'
import ExportAssetAction from './assets/ExportAssetAction.js'
import DeleteComponentAction from './unit/DeleteComponentAction.js'
import AddNodeInputAction from './script/AddNodeInputAction.js'
import SelectTimelineAction from './animation/SelectTimelineAction.js'
import MoveUnitAction from './unit/MoveUnitAction.js'
import AddLightPointAction from './light/AddLightPointAction.js'
import AddLightGlobalAction from './light/AddLightGlobalAction.js'
import PlayAssetAudioAction from './assets/PlayAssetAudioAction.js'
import StopAssetAudioAction from './assets/StopAssetAudioAction.js'
import SelectLayerAction from './layer/SelectLayerAction.js'
import LoadSceneAction from './scene/LoadSceneAction.js'
import OpenOptionAction from './option/OpenOptionAction.js'
import UnLoadSceneAction from './scene/UnLoadSceneAction.js'
import AddUIContainerAction from './ui/AddUIContainerAction.js'
import AddUIImageAction from './ui/AddUIImageAction.js'
import AlignViewAction from './edit/AlignViewAction.js'
import AddUITextAction from './ui/AddUITextAction.js'
import AttachAssetImageAction from './assets/AttachAssetImageAction.js'
import AddSceneAction from './scene/AddSceneAction.js'
import AddUIButtonAction from './ui/AddUIButtonAction.js'
import AttachLayerElementAction from './layer/AttachLayerElementAction.js'
import AlignParentAction from './edit/AlignParentAction.js'
import AddUIEmptyAction from './ui/AddUIEmptyAction.js'
import AddUISliderAction from './ui/AddUISliderAction.js'
import AddFunctionAction from './script/AddFunctionAction.js'
import CloseConfirmPopupAction from './window/CloseConfirmPopupAction.js'
import UnselectAssetAction from './assets/UnselectAssetAction.js'
import AttachFolderAction from './assets/AttachFolderAction.js'
import AttachAssetAction from './assets/AttachAssetAction.js'
import AttachEditorAction from './assets/AttachEditorAction.js'
import AttachComponentValueAction from './unit/AttachComponentValueAction.js'
import EditAssetAction from './assets/EditAssetAction.js'
import OpenPopupAction from './popup/OpenPopupAction.js'
import CompileScriptAction from './script/CompileScriptAction.js'
import ClosePopupAction from './popup/ClosePopupAction.js'
import CopySelectedNodeAction from './script/CopySelectedNodeAction.js'
import PasteScriptAction from './script/PasteScriptAction.js'
import DeleteAction from './edit/DeleteAction.js'
import CopyAction from './edit/CopyAction.js'
import PasteAction from './edit/PasteAction.js'
import CopyUnitAction from './unit/CopyUnitAction.js'
import PasteUnitAction from './unit/PasteUnitAction.js'
import MoveKeyAction from './edit/MoveKeyAction.js'
import CreateUnitInstantAction from './unit/CreateUnitInstantAction.js'
import LoadUnitInstantAction from './unit/LoadUnitInstantAction.js'
import PasteAssetAction from './assets/PasteAssetAction.js'
import AddMaskAction from './mask/AddMaskAction.js'
import DeleteMaskAction from './mask/DeleteMaskAction.js'
import AddGameInputAction from './input/AddGameInputAction.js'
import DeleteGameInputAction from './input/DeleteGameInputAction.js'

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
     */
    execute() {
        const mouse = Window.get().mouse
        const stateManager = StateManager.get()
        const typeActions = {
            DELETE: DeleteAction,
            COPY: CopyAction,
            PASTE: PasteAction,
            DELETE_UNIT: DeleteUnitAction,
            COPY_UNIT: CopyUnitAction,
            PASTE_UNIT: PasteUnitAction,
            PASTE_ASSET: PasteAssetAction,
            DUPLICATE: DuplicateAction,
            UNDO: UndoAction,
            MOVE: MoveAction,
            MOVE_KEY: MoveKeyAction,
            MOVE_UNIT: MoveUnitAction,
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
            SELECT_LIST_ELEMENT: SelectElementAction,
            ATTACH_CAMERA: AttachCameraAction,
            DETACH_CAMERA: DetachCameraAction,
            MOVE_CAMERA: MoveCameraAction,
            SAVE_PROJECT: SaveProjectAction,
            LOAD_PROJECT: LoadProjectAction,
            ADD_ASSET: AddAssetAction,
            ADD_FOLDER: AddFolderAction,
            ADD_MASK: AddMaskAction,
            ADD_GAME_INPUT: AddGameInputAction,
            ADD_ASSET_SCENE: AddAssetSceneAction,
            COMPILE_ASSET_SCRIPT: CompileAssetScriptAction,
            COMPILE_SCRIPT: CompileScriptAction,
            EDIT_ASSET_SCRIPT_XML: EditAssetScriptXmlAction,
            EDIT_ASSET: EditAssetAction,
            NEW_PROJECT: NewProjectAction,
            EXPORT_PROJECT: ExportProjectAction,
            ZOOM_CAMERA: ZoomInOutCameraAction,
            FORM_UPDATE: FormUpdateAction,
            ADD_CAMERA: AddCameraAction,
            ADD_LIGHT_POINT: AddLightPointAction,
            ADD_LIGHT_GLOBAL: AddLightGlobalAction,
            SELECT_TAB: SelectTabAction,
            CLOSE_TAB: CloseTabAction,
            SELECT_FOLDER: SelectFolderAction,
            SELECT_ASSET: SelectAssetAction,
            UNSELECT_ASSET: UnselectAssetAction,
            SELECT_LAYER_ELEMENT: SelectLayerAction,
            DELETE_FOLDER: DeleteFolderAction,
            DELETE_MASK: DeleteMaskAction,
            DELETE_GAME_INPUT: DeleteGameInputAction,
            DELETE_ASSET: DeleteAssetAction,
            ADD_SCRIPT: AddClassScriptAction,
            ADD_CODE_SCRIPT: AddScriptCodeAction,
            DELETE_SCRIPT_NODE: DeleteNodeAction,
            DELETE_SELECTED_NODE: DeleteSelectedNodeAction,
            COPY_SELECTED_NODE: CopySelectedNodeAction,
            PASTE_SCRIPT: PasteScriptAction,
            DELETE_SCRIPT_EDGE: DeleteEdgeAction,
            ADD_SCRIPT_NODE: AddNodeAction,
            ADD_SCRIPT_FUNCTION: AddFunctionAction,
            ADD_SCRIPT_EDGE: AddEdgeAction,
            ADD_SCRIPT_NODE_INPUT: AddNodeInputAction,
            CLOSE_ERROR_POPUP: CloseErrorPopupAction,
            CLOSE_CONFIRM_POPUP: CloseConfirmPopupAction,
            ATTACH_COMPONENT: AttachComponentAction,
            ATTACH_ASSET_SCRIPT: AttachAssetScriptAction,
            ATTACH_ASSET_IMAGE: AttachAssetImageAction,
            ADD_ANIMATION: AddAnimationAction,
            EDIT_ASSET_ANIMATION: EditAssetAnimationAction,
            ATTACH_ASSET_ANIMATION: AttachAssetAnimationAction,
            DELETE_ANIMATION_FRAME: DeleteKeyFrameAnimationAction,
            PLAY_ANIMATION: PlayAnimationAction,
            STOP_ANIMATION: StopAnimationAction,
            ADD_ANIMATION_SCRIPT: AddAnimationScriptAction,
            EXPORT_ASSET: ExportAssetAction,
            DELETE_COMPONENT: DeleteComponentAction,
            SELECT_LIST_TIMELINE: SelectTimelineAction,
            PLAY_ASSET_AUDIO: PlayAssetAudioAction,
            STOP_ASSET_AUDIO: StopAssetAudioAction,
            LOAD_SCENE: LoadSceneAction,
            UNLOAD_SCENE: UnLoadSceneAction,
            OPEN_OPTION: OpenOptionAction,
            CONTENT_POPUP: OpenPopupAction,
            ADD_UI_CONTAINER: AddUIContainerAction,
            ADD_UI_IMAGE: AddUIImageAction,
            ADD_UI_BUTTON: AddUIButtonAction,
            ADD_UI_TEXT: AddUITextAction,
            ALIGN_VIEW: AlignViewAction,
            ALIGN_PARENT: AlignParentAction,
            ADD_SCENE: AddSceneAction,
            ATTACH_LAYER_ELEMENT: AttachLayerElementAction,
            ADD_UI_EMPTY: AddUIEmptyAction,
            ADD_UI_SLIDER: AddUISliderAction,
            ATTACH_FOLDER: AttachFolderAction,
            ATTACH_ASSET: AttachAssetAction,
            ATTACH_EDITOR: AttachEditorAction,
            ATTACH_COMPONENT_VALUE: AttachComponentValueAction,
            CLOSE_CONTENT_POPUP: ClosePopupAction,
            CREATE_UNIT_INSTANT: CreateUnitInstantAction,
            LOAD_UNIT_INSTANT: LoadUnitInstantAction
        }
        const selectedUnits = this.unitSelector.getSelected(World.get())
        for (const iTypeAction in typeActions) {
            const typeAction = typeActions[iTypeAction]
            const type = `ACTION_${iTypeAction}`
            const action = typeAction
            if (action.shouldStart(type, stateManager)) {
                stateManager.progressNextState(type)
            } else if (action.shouldStop(type, stateManager)) {
                this.stopState(action, mouse, selectedUnits) && stateManager.endNextState(type)
            } else if (action.shouldProgress(type, stateManager)) {
                try {
                    this.runAction(action, mouse, selectedUnits) && stateManager.stopNextState(type)
                } catch (e) {
                    stateManager.stopNextState(type)
                    throw e
                }
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