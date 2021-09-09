import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'

export default class DeleteAssetScriptMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'trash',
            title: 'Delete asset',
            stateCode: 'CONFIRM_ACTION_DELETE_ASSET',
            type: Layout.type.ICON,
            zone: parent.zone
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
