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
import AddAssetToAnimationMenuItem from '../layout/items/animation/AddAssetToAnimationMenuItem.js'
import ExportAssetMenuItem from '../layout/items/assets/file/ExportAssetMenuItem.js'
import PlayAssetAudioMenuItem from '../layout/items/assets/file/PlayAssetAudioMenuItem.js'
import StopAssetAudioMenuItem from '../layout/items/assets/file/StopAssetAudioMenuItem.js'
import AttachAssetImageMenuItem from '../layout/items/assets/file/AttachAssetImageMenuItem.js'
import Folder from '../asset/Folder.js'
import AddFolderMenuItem from '../layout/items/assets/folder/AddFolderMenuItem.js'
import DeleteFolderMenuItem from '../layout/items/assets/folder/DeleteFolderMenuItem.js'
import AssetsListFormMenuItem from '../layout/items/assets/file/AssetsListFormMenuItem.js'
import AddAssetMenuItem from '../layout/items/assets/file/AddAssetMenuItem.js'
import UIHelper from './UIHelper.js'
import AddScriptFunctionPopupButtonMenuItem
    from '../layout/items/popup/script/AddScriptFunctionPopupButtonMenuItem.js'
import AddScriptNodePopupButtonMenuItem from '../layout/items/popup/script/AddScriptNodePopupButtonMenuItem.js'

export default class OptionHelper {

    /**
     * @param {*} bindObject
     * @return {MenuItem[]}
     */
    static getList(bindObject){
        const options = []
        if(bindObject instanceof Scene){
            options.push(...[
                new SceneLoadMenuItem(bindObject),
                new SceneUnLoadMenuItem(bindObject)
            ])
        }
        if(bindObject instanceof Unit){
            options.push(...[
                new OptionActionsTitleMenuItem('Edit'),
                new DeleteMenuItem(),
                new DuplicateMenuItem(),
                new MoveUpMenuItem(),
                new MoveDownMenuItem(),
                new OptionActionsTitleMenuItem('Unit'),
                new OptionActionsButtonMenuItem('UI', UITopMenuItem, null, true),
                new OptionActionsButtonMenuItem('Visibility', VisibilityTopMenuItem, null, true),
                new AlignViewMenuItem(),
                new AlignParentMenuItem()
            ])
        }
        if(bindObject instanceof Asset){
            options.push(...[
                new DeleteAssetMenuItem(),
                new AddAssetSceneMenuItem(),
                new CompileAssetScriptMenuItem(),
                new AttachAssetScriptMenuItem(),
                new EditAssetScriptMenuItem(),
                new EditAssetAnimationMenuItem(),
                new AddAssetToAnimationMenuItem(),
                new ExportAssetMenuItem(),
                new PlayAssetAudioMenuItem(),
                new StopAssetAudioMenuItem(),
                new AttachAssetImageMenuItem()
            ])
        }
        if(bindObject instanceof Folder){
            options.push(...[
                new AddFolderMenuItem(),
                new DeleteFolderMenuItem(),
            ])
        }
        if(bindObject && bindObject.bind instanceof AssetsListFormMenuItem){
            options.push(...[
                new AddFolderMenuItem(),
                new AddAssetMenuItem(),
            ])
        }
        if(bindObject === UIHelper.UI.SCRIPT){
            options.push(...[
                new OptionActionsTitleMenuItem('Script'),
                new AddScriptFunctionPopupButtonMenuItem(),
                new AddScriptNodePopupButtonMenuItem(),
                new CompileAssetScriptMenuItem(),
            ])
        }
        return options
    }

}