import Layout from '../../Layout.js'
import Folder from '../../../assets/Folder.js'
import FolderTreeMenuItem from './FolderTreeMenuItem.js'
import AssetsListFormMenuItem from './AssetsListFormMenuItem.js'
import MenuItem from '../../MenuItem.js'

export default class AssetsWrapperMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'assets-wrapper',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        })
        this.parent = parent
        const folder = new Folder('Root')
        folder.setId(null)
        this.items = [
            new FolderTreeMenuItem(this, {bind: folder, list: []}),
            new AssetsListFormMenuItem(this)
        ]
    }
}