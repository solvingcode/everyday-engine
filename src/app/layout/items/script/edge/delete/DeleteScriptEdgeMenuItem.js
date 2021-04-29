import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'
import World from '../../../../../world/World.js'
import AssetScriptXml from '../../../../../asset/types/script/AssetScriptXml.js'

export default class DeleteScriptEdgeMenuItem extends MenuItem {
    constructor(parent, nodeInput) {
        super({
            name: 'times',
            title: 'Delete selected edge',
            stateCode: 'ACTION_DELETE_SCRIPT_EDGE',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {nodeInput}
    }

    /**
     * @override
     */
    isValid() {
        const asset = World.get().getScriptManager().getSelectedAsset()
        return super.isValid() && asset && asset.getType() instanceof AssetScriptXml
    }
}
