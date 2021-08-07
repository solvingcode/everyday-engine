import Layout from '../../Layout.js'
import ListSelectElementActionsMenuItem from '../list/ListSelectElementActionsMenuItem.js'

export default class SceneElementMenuItem extends ListSelectElementActionsMenuItem {
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
        return 'layer-group'
    }
}