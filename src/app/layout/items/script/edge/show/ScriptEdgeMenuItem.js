import World from '../../../../../world/World.js'
import ListMenuItem from '../../../list/ListMenuItem.js'
import ScriptEdgeElementMenuItem from '../list/ScriptEdgeElementMenuItem.js'
import ScriptGraphSelector from '../../../../../selector/ScriptGraphSelector.js'
import NodeComponent from '../../../../../component/internal/gui/node/NodeComponent.js'

export default class ScriptEdgeMenuItem extends ListMenuItem{

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
        return ScriptEdgeElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        const world = World.get()
        const script = world.getScriptManager().getSelected(World.get().getTabManager())
        const selectedGraphUnits = ScriptGraphSelector.get().getSelected(world)
        return selectedGraphUnits.reduce((list, graphUnit) => {
            const nodeId = graphUnit.getComponent(NodeComponent).getNodeId()
            const node = script.findNodeById(nodeId)
            return list.concat(node.getInputs())
        }, []).filter(input => input)
    }

    /**
     * @override
     */
    getActions(bindObject){
        return []
    }

}