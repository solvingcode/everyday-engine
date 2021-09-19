import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'
import World from '../../../../../world/World.js'

export default class DeleteAssetMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'trash',
            title: 'Delete asset',
            stateCode: 'CONFIRM_ACTION_DELETE_ASSET',
            type: Layout.type.ICON_TEXT,
            zone: parent ? parent.zone : Layout.zone.WINDOW
        })
        this.parent = parent
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && World.get().getAssetsManager().getSelectedAsset()
    }
}
