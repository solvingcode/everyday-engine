import Layout from '../../Layout.js'
import ListSelectElementMenuItem from '../list/ListSelectElementMenuItem.js'

/**
 * @class {AssetElementFormMenuItem}
 */
export default class AssetElementFormMenuItem extends ListSelectElementMenuItem {
    constructor(parent, data) {
        super(parent, data, {type: Layout.type.ASSET_ELEMENT})
    }
}