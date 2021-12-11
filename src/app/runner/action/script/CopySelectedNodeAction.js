import Action from '../Action.js'
import World from '../../../world/World.js'
import ScriptGraphSelector from '../../../selector/ScriptGraphSelector.js'
import NodeComponent from '../../../component/internal/gui/node/NodeComponent.js'
import Project from '../../../project/Project.js'
import * as StorageConstant from '../../../constant/StorageConstant.js'

export default class CopySelectedNodeAction extends Action {

    /**
     * @override
     */
    static run(mouse) {
        const world = World.get()
        const selectedGraphUnits = ScriptGraphSelector.get().getSelected(world)
        const nodes = []
        selectedGraphUnits.forEach(selectedGraphUnit => {
            const node = selectedGraphUnit.getComponent(NodeComponent).getNode()
            nodes.push(node)
        })
        Project.get().saveClipboard(StorageConstant.type.NODES, nodes)
        return true
    }

}