import Layout from '../../Layout.js'
import ListElementFormMenuItem from '../form/ListElementFormMenuItem.js'

/**
 * @class {AssetElementFormMenuItem}
 */
export default class AssetElementFormMenuItem extends ListElementFormMenuItem {
    constructor(parent, data) {
        super(parent, data, {type: Layout.type.ASSET_ELEMENT})
    }
}