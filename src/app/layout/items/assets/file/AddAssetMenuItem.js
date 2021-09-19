import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

/**
 * @class {AddAssetMenuItem}
 */
export default class AddAssetMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'plus',
            title: 'Add Asset',
            stateCode: 'ACTION_ADD_ASSET',
            type: Layout.type.ICON_TEXT,
            zone: parent ? parent.zone : Layout.zone.WINDOW
        })
        this.parent = parent
    }
}
