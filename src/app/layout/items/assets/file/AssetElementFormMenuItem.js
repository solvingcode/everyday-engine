import Layout from '../../../Layout.js'
import ListSelectElementActionsMenuItem from '../../list/ListSelectElementActionsMenuItem.js'

/**
 * @class {AssetElementFormMenuItem}
 */
export default class AssetElementFormMenuItem extends ListSelectElementActionsMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            stateCode: 'ACTION_SELECT_ASSET',
            type: Layout.type.ASSET_ELEMENT
        })
    }

    /**
     * @override
     */
    isRightClick() {
        return true
    }
}