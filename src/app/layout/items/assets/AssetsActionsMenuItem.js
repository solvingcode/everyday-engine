import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'
import AddAssetMenuItem from './file/AddAssetMenuItem.js'
import AddFolderMenuItem from './folder/AddFolderMenuItem.js'
import AddAssetSceneMenuItem from './file/AddAssetSceneMenuItem.js'
import CompileAssetScriptMenuItem from './file/CompileAssetScriptMenuItem.js'
import EditAssetScriptMenuItem from './file/EditAssetScriptMenuItem.js'
import DeleteAssetMenuItem from './file/edit/DeleteAssetMenuItem.js'
import DeleteFolderMenuItem from './folder/DeleteFolderMenuItem.js'
import AttachAssetScriptMenuItem from './file/AttachAssetScriptMenuItem.js'
import EditAssetAnimationMenuItem from './file/EditAssetAnimationMenuItem.js'
import ExportAssetMenuItem from './file/ExportAssetMenuItem.js'
import PlayAssetAudioMenuItem from './file/PlayAssetAudioMenuItem.js'
import StopAssetAudioMenuItem from './file/StopAssetAudioMenuItem.js'
import AttachAssetImageMenuItem from './file/AttachAssetImageMenuItem.js'

export default class AssetsActionsMenuItem  extends MenuItem {
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.PANEL_ACTION,
            zone: parent.zone
        })
        this.parent = parent
        this.items = [
            new AddAssetMenuItem(this),
            new AddFolderMenuItem(this),
            new AddAssetSceneMenuItem(this),
            new CompileAssetScriptMenuItem(this),
            new AttachAssetScriptMenuItem(this),
            new EditAssetScriptMenuItem(this),
            new EditAssetAnimationMenuItem(this),
            new ExportAssetMenuItem(this),
            new DeleteAssetMenuItem(this),
            new DeleteFolderMenuItem(this),
            new PlayAssetAudioMenuItem(this),
            new StopAssetAudioMenuItem(this),
            new AttachAssetImageMenuItem(this)
        ]
    }
}