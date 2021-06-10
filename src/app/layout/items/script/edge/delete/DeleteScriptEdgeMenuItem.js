import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'
import World from '../../../../../world/World.js'
import AssetScriptXml from '../../../../../asset/types/script/AssetScriptXml.js'
import AssetAnimationScriptXml from '../../../../../asset/types/animation/AssetAnimationScriptXml.js'

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
        const world = World.get()
        const asset = world.getScriptManager().getSelectedAsset(world.getTabManager())
        return super.isValid() && asset
            && (asset.getType() instanceof AssetScriptXml || asset.getType() instanceof AssetAnimationScriptXml)
    }
}
