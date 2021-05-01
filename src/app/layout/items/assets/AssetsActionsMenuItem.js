import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'
import AddAssetMenuItem from './file/AddAssetMenuItem.js'
import AddFolderMenuItem from './folder/AddFolderMenuItem.js'
import AddAssetSceneMenuItem from './file/AddAssetSceneMenuItem.js'
import CompileAssetScriptMenuItem from './file/CompileAssetScriptMenuItem.js'
import EditAssetScriptMenuItem from './file/EditAssetScriptMenuItem.js'
import DeleteAssetScriptMenuItem from './file/DeleteAssetScriptMenuItem.js'
import DeleteFolderMenuItem from './folder/DeleteFolderMenuItem.js'

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
            new EditAssetScriptMenuItem(this),
            new DeleteAssetScriptMenuItem(this),
            new DeleteFolderMenuItem(this)
        ]
    }
}