import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import FolderListMenuItem from './FolderListMenuItem.js'

export default class FolderTreeMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'tree',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        })
        this.parent = parent
        this.items = [
            new FolderListMenuItem(this)
        ]
    }

    /**
     * @override
     */
    isSection() {
        return true
    }
}