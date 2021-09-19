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
        const selectedFolder = assetsManager.getSelectedFolder() || assetsManager.getRootFolder()
        const folders = assetsManager.findFolders(selectedFolder.getId())
        const assets = assetsManager.findAssetsByFolderId(selectedFolder.getId())
        return [].concat(folders).concat(assets)
    }

    /**
     * @override
     */
    getList() {
        const assetsManager = World.get().getAssetsManager()
        return [].concat(assetsManager.getFolders()).concat(assetsManager.getAssets())
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

    /**
     * @override
     */
    isRightClick() {
        return true
    }

}