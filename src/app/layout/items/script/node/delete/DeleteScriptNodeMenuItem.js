import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'
import World from '../../../../../world/World.js'
import AssetScriptXml from '../../../../../asset/types/script/AssetScriptXml.js'

export default class DeleteScriptNodeMenuItem extends MenuItem {
    constructor(parent, node) {
        super({
            name: 'times',
            title: 'Delete selected node',
            stateCode: 'ACTION_DELETE_SCRIPT_NODE',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {node}
    }

    /**
     * @override
     */
    isValid() {
        const asset = World.get().getScriptManager().getSelectedAsset()
        return super.isValid() && asset && asset.getType() instanceof AssetScriptXml
    }
}
