import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

/**
 * @class {AddFolderMenuItem}
 */
export default class AddFolderMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'folder-plus',
            title: 'Add Folder',
            stateCode: 'ACTION_ADD_FOLDER',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
    }
}
