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
            type: Layout.type.ICON_TEXT,
            zone: parent ? parent.zone : Layout.zone.WINDOW
        })
        this.parent = parent
    }
}
