import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import EditFolderFormMenuItem from './folder/EditFolderFormMenuItem.js'
import EditAssetFormMenuItem from './file/EditAssetFormMenuItem.js'
import World from '../../../world/World.js'

export default class AssetMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'Asset',
            zone: Layout.zone.RIGHT
        })
        this.items = [
            new EditFolderFormMenuItem(this),
            new EditAssetFormMenuItem(this)
        ]
    }

    /**
     * @override
     */
    isValid() {
        const assetsManager = World.get().getAssetsManager()
        const rootFolder = assetsManager.getRootFolder()
        return !!assetsManager.getSelectedAsset() || assetsManager.getSelectedFolder() !== rootFolder
    }
}