import Layout from '../../../Layout.js'
import FolderListMenuItem from './FolderListMenuItem.js'
import ListElementMenuItem from '../../list/ListElementMenuItem.js'
import FolderTitleMenuItem from './FolderTitleMenuItem.js'

/**
 * @class {FolderElementMenuItem}
 */
export default class FolderElementMenuItem extends ListElementMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            stateCode: '',
            name: 'folder',
            type: Layout.type.FOLDER_ELEMENT
        })
    }

    /**
     * @override
     */
    setData(data) {
        super.setData(data)
        this.items = [
            new FolderTitleMenuItem(this, data.bind),
            new FolderListMenuItem(this, this.parent.props, data.bind.getId())
        ]
    }

    /**
     * @override
     */
    isSelected() {
        return this.getDataBind().isSelected()
    }

}