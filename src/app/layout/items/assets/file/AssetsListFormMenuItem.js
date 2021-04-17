import ListMenuItem from '../../list/ListMenuItem.js'
import World from '../../../../world/World.js'
import AssetElementFormMenuItem from './AssetElementFormMenuItem.js'
import Layout from '../../../Layout.js'

/**
 * @class {AssetsListFormMenuItem}
 */
export default class AssetsListFormMenuItem extends ListMenuItem {

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
        const assetsManager = World.get().getAssetsManager()
        const folder = assetsManager.getSelectedFolder() || assetsManager.getRootFolder()
        return World.get().getAssetsManager().findAssetsByFolderId(folder.getId())
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}