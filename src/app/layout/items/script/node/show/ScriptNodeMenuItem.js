import ScriptNodeElementMenuItem from '../list/ScriptNodeElementMenuItem.js'
import World from '../../../../../world/World.js'
import ScriptGraphSelector from '../../../../../selector/ScriptGraphSelector.js'
import NodeComponent from '../../../../../component/internal/gui/node/NodeComponent.js'
import ListMenuItem from '../../../list/ListMenuItem.js'

export default class ScriptNodeMenuItem extends ListMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Object} props
     */
    constructor(parent, props = {}) {
        super({
            name: '',
            zone: parent.zone,
            ...props
        })
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return ScriptNodeElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
        const selectedGraphUnits = ScriptGraphSelector.get().getSelected(null)
        return selectedGraphUnits.map(graphUnit => {
            const nodeId = graphUnit.getComponent(NodeComponent).getNodeId()
            return script.findNodeById(nodeId)
        }).filter(node => node)
    }

    /**
     * @override
     */
    getActions() {
        return []
    }
}