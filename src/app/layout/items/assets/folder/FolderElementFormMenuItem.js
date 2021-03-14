import Layout from '../../../Layout.js'
import ListElementFormMenuItem from '../../form/ListElementFormMenuItem.js'

/**
 * @class {FolderElementFormMenuItem}
 */
export default class FolderElementFormMenuItem extends ListElementFormMenuItem {
    constructor(parent, data) {
        super(parent, data, {name: 'folder', type: Layout.type.FOLDER_ELEMENT})
    }
}