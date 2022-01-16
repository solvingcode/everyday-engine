import Layout from '../../../Layout.js'
import ListSelectElementActionsMenuItem from '../../list/ListSelectElementActionsMenuItem.js'

export default class CrudElementMenuItem extends ListSelectElementActionsMenuItem {
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
        return 'bars'
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
    getName() {
        return this.getDataBind().getName()
    }
}