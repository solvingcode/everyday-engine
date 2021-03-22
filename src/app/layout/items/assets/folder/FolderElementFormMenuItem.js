import Layout from '../../../Layout.js'
import ListSelectElementMenuItem from '../../list/ListSelectElementMenuItem.js'

/**
 * @class {FolderElementFormMenuItem}
 */
export default class FolderElementFormMenuItem extends ListSelectElementMenuItem {
    constructor(parent, data) {
        super(parent, data, {name: 'folder', type: Layout.type.FOLDER_ELEMENT})
    }
}