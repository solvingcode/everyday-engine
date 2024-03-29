import ListMenuItem from '../../list/ListMenuItem.js'
import World from '../../../../world/World.js'
import AssetElementFormMenuItem from './AssetElementFormMenuItem.js'
import Layout from '../../../Layout.js'

/**
 * @class {AssetsListMenuItem}
 */
export default class AssetsListMenuItem extends ListMenuItem {

    constructor(parent, props) {
        super({
            zone: parent.zone,
            stateCode: 'ACTION_UNSELECT_ASSET',
            skipStateCodes: ['ACTION_SELECT_ASSET'],
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
    getActions(bindObject){
        return []
    }

    /**
     * @override
     */
    isRightClick() {
        return true
    }

    /**
     * @override
     */
    isSection() {
        return true
    }

    /**
     * @override
     */
    isValid() {
        const assetsManager = World.get().getAssetsManager()
        return !!assetsManager.getRootFolder()
    }

}