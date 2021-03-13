import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'
import AddAssetMenuItem from './AddAssetMenuItem.js'
import AddFolderMenuItem from './AddFolderMenuItem.js'

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
            new AddFolderMenuItem(this)
        ]
    }
}