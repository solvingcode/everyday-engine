import World from '../../../../../world/World.js'
import ListMenuItem from '../../../list/ListMenuItem.js'
import ScriptEdgeElementMenuItem from '../list/ScriptEdgeElementMenuItem.js'
import ScriptGraphSelector from '../../../../../selector/ScriptGraphSelector.js'
import NodeComponent from '../../../../../component/internal/gui/node/NodeComponent.js'
import DeleteScriptEdgeMenuItem from '../delete/DeleteScriptEdgeMenuItem.js'

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
        const script = world.getScriptManager().getFunctionSelected(World.get().getTabManager())
        if(script){
            const selectedGraphUnits = ScriptGraphSelector.get().getSelected(world)
            return selectedGraphUnits.reduce((list, graphUnit) => {
                const node = graphUnit.getComponent(NodeComponent).getNode()
                return list.concat(node.getInputs())
            }, []).filter(input => input)
        }
    }

    /**
     * @override
     */
    getActions(bindObject){
        return [
            new DeleteScriptEdgeMenuItem(this, bindObject)
        ]
    }

}