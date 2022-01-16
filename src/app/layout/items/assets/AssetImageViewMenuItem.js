import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class AssetImageViewMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Asset} asset
     */
    constructor(parent, asset) {
        super({
            name: `${asset.getId()}`,
            title: '',
            stateCode: '',
            type: Layout.type.ASSET_VIEW,
            zone: parent.zone
        })
    }
}