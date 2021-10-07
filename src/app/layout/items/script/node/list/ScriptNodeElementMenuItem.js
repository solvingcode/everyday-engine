import Layout from '../../../../Layout.js'
import ListSelectElementActionsMenuItem from '../../../list/ListSelectElementActionsMenuItem.js'

export default class ScriptNodeElementMenuItem extends ListSelectElementActionsMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            name: '',
            type: Layout.type.LIST_ELEMENT
        })
    }

    /**
     * @override
     */
    getIcon() {
        return 'sitemap'
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

}