import Scene from '../scene/Scene.js'
import SceneLoadMenuItem from '../layout/items/scene/SceneLoadMenuItem.js'
import SceneUnLoadMenuItem from '../layout/items/scene/SceneUnLoadMenuItem.js'
import Unit from '../unit/Unit.js'
import OptionActionsTitleMenuItem from '../layout/items/option/OptionActionsTitleMenuItem.js'
import DeleteMenuItem from '../layout/items/action/DeleteMenuItem.js'
import DuplicateMenuItem from '../layout/items/action/DuplicateMenuItem.js'
import MoveUpMenuItem from '../layout/items/action/MoveUpMenuItem.js'
import MoveDownMenuItem from '../layout/items/action/MoveDownMenuItem.js'
import OptionActionsButtonMenuItem from '../layout/items/option/OptionActionsButtonMenuItem.js'
import UITopMenuItem from '../layout/items/topmenu/menus/UITopMenuItem.js'
import VisibilityTopMenuItem from '../layout/items/topmenu/menus/VisibilityTopMenuItem.js'
import AlignViewMenuItem from '../layout/items/edit/AlignViewMenuItem.js'
import AlignParentMenuItem from '../layout/items/edit/AlignParentMenuItem.js'
import Asset from '../asset/Asset.js'
import DeleteAssetMenuItem from '../layout/items/assets/file/edit/DeleteAssetMenuItem.js'
import AddAssetSceneMenuItem from '../layout/items/assets/file/AddAssetSceneMenuItem.js'
import CompileAssetScriptMenuItem from '../layout/items/assets/file/CompileAssetScriptMenuItem.js'
import AttachAssetScriptMenuItem from '../layout/items/assets/file/AttachAssetScriptMenuItem.js'
import EditAssetScriptMenuItem from '../layout/items/assets/file/EditAssetScriptMenuItem.js'
import EditAssetAnimationMenuItem from '../layout/items/assets/file/EditAssetAnimationMenuItem.js'
import ExportAssetMenuItem from '../layout/items/assets/file/ExportAssetMenuItem.js'
import PlayAssetAudioMenuItem from '../layout/items/assets/file/PlayAssetAudioMenuItem.js'
import StopAssetAudioMenuItem from '../layout/items/assets/file/StopAssetAudioMenuItem.js'
import AttachAssetImageMenuItem from '../layout/items/assets/file/AttachAssetImageMenuItem.js'
import Folder from '../asset/Folder.js'
import AddFolderMenuItem from '../layout/items/assets/folder/AddFolderMenuItem.js'
import DeleteFolderMenuItem from '../layout/items/assets/folder/DeleteFolderMenuItem.js'
import AssetsListMenuItem from '../layout/items/assets/file/AssetsListMenuItem.js'
import AddAssetMenuItem from '../layout/items/assets/file/AddAssetMenuItem.js'
import UIHelper from './UIHelper.js'
import AddScriptFunctionPopupButtonMenuItem
    from '../layout/items/popup/script/AddScriptFunctionPopupButtonMenuItem.js'
import AddScriptNodePopupButtonMenuItem from '../layout/items/popup/script/AddScriptNodePopupButtonMenuItem.js'
import CompileScriptMenuItem from '../layout/items/assets/file/CompileScriptMenuItem.js'
import DeleteSelectedNodeMenuItem from '../layout/items/script/node/delete/DeleteSelectedNodeMenuItem.js'
import CopySelectedNodeMenuItem from '../layout/items/script/node/edit/CopySelectedNodeMenuItem.js'
import PasteScriptMenuItem from '../layout/items/script/edit/PasteScriptMenuItem.js'
import CopyMenuItem from '../layout/items/action/CopyMenuItem.js'
import PasteMenuItem from '../layout/items/action/PasteMenuItem.js'
import AddSceneMenuItem from '../layout/items/scene/AddSceneMenuItem.js'
import CameraMenuItem from '../layout/items/unit/CameraMenuItem.js'
import LightPointMenuItem from '../layout/items/unit/LightPointMenuItem.js'
import LightGlobalMenuItem from '../layout/items/unit/LightGlobalMenuItem.js'
import CreateUnitInstantMenuItem from '../layout/items/unit/CreateUnitInstantMenuItem.js'
import LoadUnitInstantMenuItem from '../layout/items/unit/LoadUnitInstantMenuItem.js'
import MaskGroup from '../preference/maskgroup/MaskGroup.js'
import EditMaskPopupButtonMenuItem from '../layout/items/mask/edit/EditMaskPopupButtonMenuItem.js'
import DeleteMaskMenuItem from '../layout/items/mask/delete/DeleteMaskMenuItem.js'
import GameInput from '../preference/gameInput/GameInput.js'
import EditGameInputPopupButtonMenuItem from '../layout/items/input/edit/EditGameInputPopupButtonMenuItem.js'
import DeleteGameInputMenuItem from '../layout/items/input/delete/DeleteGameInputMenuItem.js'
import TileGridMenuItem from '../layout/items/unit/TileGridMenuItem.js'
import TileMapMenuItem from '../layout/items/unit/TileMapMenuItem.js'
import VariableNode from '../flow/node/variable/VariableNode.js'
import DeleteScriptNodeMenuItem from '../layout/items/script/node/delete/DeleteScriptNodeMenuItem.js'
import AScriptFunction from '../flow/AScriptFunction.js'
import DeleteFunctionMenuItem from '../layout/items/script/function/delete/DeleteFunctionMenuItem.js'
import LayerGroup from '../preference/layerGroup/LayerGroup.js'
import EditCrudPopupButtonMenuItem from '../layout/items/crud/edit/EditCrudPopupButtonMenuItem.js'
import DeleteCrudMenuItem from '../layout/items/crud/delete/DeleteCrudMenuItem.js'
import VariableScript from '../flow/VariableScript.js'

export default class OptionHelper {

    /**
     * @param {*} bindObject
     * @return {MenuItem[]}
     */
    static getList(bindObject) {
        const options = []
        if (bindObject instanceof Scene) {
            options.push(...[
                new SceneLoadMenuItem(bindObject),
                new SceneUnLoadMenuItem(bindObject)
            ])
        }
        if (bindObject instanceof Unit) {
            options.push(...[
                new OptionActionsTitleMenuItem('Edit'),
                new CopyMenuItem(),
                new PasteMenuItem(),
                new DeleteMenuItem(),
                new DuplicateMenuItem(),
                new MoveUpMenuItem(),
                new MoveDownMenuItem(),
                new TileMapMenuItem(),
                new OptionActionsTitleMenuItem('Unit'),
                new OptionActionsButtonMenuItem('UI', UITopMenuItem, null, true),
                new OptionActionsButtonMenuItem('Visibility', VisibilityTopMenuItem, null, true),
                new AlignViewMenuItem(),
                new AlignParentMenuItem(),
                new CreateUnitInstantMenuItem()
            ])
        }
        if (bindObject instanceof Asset) {
            options.push(...[
                new EditCrudPopupButtonMenuItem(bindObject),
                new DeleteAssetMenuItem(),
                new AddAssetSceneMenuItem(),
                new CompileAssetScriptMenuItem(),
                new AttachAssetScriptMenuItem(),
                new EditAssetScriptMenuItem(),
                new EditAssetAnimationMenuItem(),
                new ExportAssetMenuItem(),
                new PlayAssetAudioMenuItem(),
                new StopAssetAudioMenuItem(),
                new AttachAssetImageMenuItem(),
                new LoadUnitInstantMenuItem()
            ])
        }
        if (bindObject instanceof Folder) {
            options.push(...[
                new EditCrudPopupButtonMenuItem(bindObject),
                new AddFolderMenuItem(),
                new DeleteFolderMenuItem()
            ])
        }
        if (bindObject instanceof MaskGroup) {
            options.push(...[
                new EditMaskPopupButtonMenuItem(bindObject),
                new DeleteMaskMenuItem(null, bindObject)
            ])
        }
        if (bindObject instanceof LayerGroup ||
            bindObject instanceof VariableScript) {
            options.push(...[
                new EditCrudPopupButtonMenuItem(bindObject),
                new DeleteCrudMenuItem(null, bindObject)
            ])
        }
        if (bindObject instanceof GameInput) {
            options.push(...[
                new EditGameInputPopupButtonMenuItem(bindObject),
                new DeleteGameInputMenuItem(null, bindObject)
            ])
        }
        if (bindObject && bindObject.bind instanceof AssetsListMenuItem) {
            options.push(...[
                new AddFolderMenuItem(),
                new AddAssetMenuItem()
            ])
        }
        if (bindObject === UIHelper.UI.SCENE) {
            options.push(...[
                new OptionActionsTitleMenuItem('Edit'),
                new PasteMenuItem(),
                new OptionActionsTitleMenuItem('Unit'),
                new AddSceneMenuItem(),
                new CameraMenuItem(),
                new LightPointMenuItem(),
                new LightGlobalMenuItem(),
                new TileGridMenuItem(),
                new TileMapMenuItem(),
                new OptionActionsButtonMenuItem('UI', UITopMenuItem, null, true)
            ])
        }
        if (bindObject === UIHelper.UI.SCRIPT) {
            options.push(...[
                new OptionActionsTitleMenuItem('Script'),
                new AddScriptFunctionPopupButtonMenuItem(),
                new CompileScriptMenuItem(),
                new PasteScriptMenuItem(),
                new OptionActionsTitleMenuItem('Node'),
                new AddScriptNodePopupButtonMenuItem(),
                new DeleteSelectedNodeMenuItem(),
                new CopySelectedNodeMenuItem()
            ])
        }
        if (bindObject instanceof VariableNode) {
            options.push(...[
                new OptionActionsTitleMenuItem('Node'),
                new DeleteScriptNodeMenuItem(null, bindObject)
            ])
        }
        if (bindObject instanceof AScriptFunction) {
            options.push(...[
                new EditCrudPopupButtonMenuItem(bindObject),
                new DeleteFunctionMenuItem(null, bindObject)
            ])
        }
        return options
    }

}