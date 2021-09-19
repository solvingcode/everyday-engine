import OptionActionsMenuItem from './OptionActionsMenuItem.js'
import SceneLoadMenuItem from '../scene/SceneLoadMenuItem.js'
import SceneUnLoadMenuItem from '../scene/SceneUnLoadMenuItem.js'
import Scene from '../../../scene/Scene.js'
import Unit from '../../../unit/Unit.js'
import OptionActionsTitleMenuItem from './OptionActionsTitleMenuItem.js'
import DeleteMenuItem from '../action/DeleteMenuItem.js'
import DuplicateMenuItem from '../action/DuplicateMenuItem.js'
import MoveUpMenuItem from '../action/MoveUpMenuItem.js'
import MoveDownMenuItem from '../action/MoveDownMenuItem.js'
import OptionActionsButtonMenuItem from './OptionActionsButtonMenuItem.js'
import UITopMenuItem from '../topmenu/menus/UITopMenuItem.js'
import VisibilityTopMenuItem from '../topmenu/menus/VisibilityTopMenuItem.js'
import AlignViewMenuItem from '../edit/AlignViewMenuItem.js'
import AlignParentMenuItem from '../edit/AlignParentMenuItem.js'
import Asset from '../../../asset/Asset.js'
import DeleteAssetMenuItem from '../assets/file/edit/DeleteAssetMenuItem.js'
import AddAssetSceneMenuItem from '../assets/file/AddAssetSceneMenuItem.js'
import CompileAssetScriptMenuItem from '../assets/file/CompileAssetScriptMenuItem.js'
import AttachAssetScriptMenuItem from '../assets/file/AttachAssetScriptMenuItem.js'
import EditAssetScriptMenuItem from '../assets/file/EditAssetScriptMenuItem.js'
import EditAssetAnimationMenuItem from '../assets/file/EditAssetAnimationMenuItem.js'
import AddAssetToAnimationMenuItem from '../animation/AddAssetToAnimationMenuItem.js'
import ExportAssetMenuItem from '../assets/file/ExportAssetMenuItem.js'
import DeleteFolderMenuItem from '../assets/folder/DeleteFolderMenuItem.js'
import PlayAssetAudioMenuItem from '../assets/file/PlayAssetAudioMenuItem.js'
import StopAssetAudioMenuItem from '../assets/file/StopAssetAudioMenuItem.js'
import AttachAssetImageMenuItem from '../assets/file/AttachAssetImageMenuItem.js'
import AddFolderMenuItem from '../assets/folder/AddFolderMenuItem.js'
import Folder from '../../../asset/Folder.js'
import AssetsListFormMenuItem from '../assets/file/AssetsListFormMenuItem.js'
import AddAssetMenuItem from '../assets/file/AddAssetMenuItem.js'

export default class OptionsMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
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
        super(options, position, size)
    }
}