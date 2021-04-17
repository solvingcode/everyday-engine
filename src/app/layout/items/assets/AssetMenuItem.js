import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import EditFolderFormMenuItem from './folder/EditFolderFormMenuItem.js'

export default class AssetMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Asset',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new EditFolderFormMenuItem(this)
        ]
    }
}