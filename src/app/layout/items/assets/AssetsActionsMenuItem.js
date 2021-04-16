import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'
import AddAssetMenuItem from './AddAssetMenuItem.js'
import AddFolderMenuItem from './folder/AddFolderMenuItem.js'
import AddAssetSceneMenuItem from './AddAssetSceneMenuItem.js'
import CompileAssetScriptMenuItem from './CompileAssetScriptMenuItem.js'
import EditAssetScriptMenuItem from './EditAssetScriptMenuItem.js'

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
            new EditAssetScriptMenuItem(this)
        ]
    }
}