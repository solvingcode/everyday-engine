import Layout from '../../../Layout.js'
import AssetsListFormMenuItem from './AssetsListFormMenuItem.js'
import MenuItem from '../../../MenuItem.js'
import FolderTreeMenuItem from '../folder/FolderTreeMenuItem.js'

export default class AssetsWrapperMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'assets-wrapper',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        })
        this.parent = parent
        this.items = [
            new FolderTreeMenuItem(this),
            new AssetsListFormMenuItem(this)
        ]
    }
}