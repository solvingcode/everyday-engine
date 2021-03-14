import ListFormMenuItem from '../form/ListFormMenuItem.js'
import World from '../../../world/World.js'
import AssetElementFormMenuItem from './AssetElementFormMenuItem.js'
import Layout from '../../Layout.js'

/**
 * @class {AssetsListFormMenuItem}
 */
export default class AssetsListFormMenuItem extends ListFormMenuItem {

    constructor(parent, props) {
        super({
            zone: parent.zone,
            type: Layout.type.ASSETS,
            ...props
        })
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return AssetElementFormMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getAssetsManager().findAssetsByFolderId(null)
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}