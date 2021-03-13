import ListFormMenuItem from '../form/ListFormMenuItem.js'
import World from '../../../world/World.js'

/**
 * @class {AssetsListFormMenuItem}
 */
export default class AssetsListFormMenuItem extends ListFormMenuItem {

    constructor(parent, props) {
        super(props)
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