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
        const world = World.get()
        const selectedGraphUnits = ScriptGraphSelector.get().getSelected(world)
        return selectedGraphUnits.map(graphUnit => {
            return graphUnit.getComponent(NodeComponent).getNode()
        }).filter(node => node)
    }

    /**
     * @override
     */
    getActions() {
        return []
    }
}