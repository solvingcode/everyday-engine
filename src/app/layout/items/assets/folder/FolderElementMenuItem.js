import Layout from '../../../Layout.js'
import FolderListMenuItem from './FolderListMenuItem.js'
import ListElementMenuItem from '../../list/ListElementMenuItem.js'

/**
 * @class {FolderElementMenuItem}
 */
export default class FolderElementMenuItem extends ListElementMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            name: '',
            stateCode: 'ACTION_SELECT_FOLDER',
            dragStateCode: 'ACTION_ATTACH_FOLDER',
            type: Layout.type.LIST_ELEMENT
        })
    }
    /**
     * @override
     */
    setData(data) {
        super.setData(data)
        this.items = [
            new FolderListMenuItem(this, this.parent.props, data.bind.getId())
        ]
    }

    /**
     * @override
     */
    getIcon() {
        return 'folder'
    }

    /**
     * @override
     */
    isSelected() {
        return this.getDataBind().isSelected()
    }

    /**
     * @override
     */
    isButton() {
        return true
    }

    /**
     * @override
     */
    isRightClick() {
        return true
    }

    /**
     * @override
     */
    isCollapsable() {
        return true
    }

    /**
     * @override
     */
    isDraggable() {
        return true
    }


}