import Layout from '../../Layout.js'
import ListElementActionsMenuItem from '../list/ListElementActionsMenuItem.js'

export default class OptionActionsElementMenuItem extends ListElementActionsMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            name: '',
            stateCode: '',
            type: Layout.type.LIST_ELEMENT,
            zone: parent.zone
        })
    }

    /**
     * @override
     */
    getIcon() {
        return 'layer-group'
    }

    /**
     * @override
     */
    getName() {
        return ''
    }
}