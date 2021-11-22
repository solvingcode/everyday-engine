import World from '../../../world/World.js'

export default class NodeDataTypeGenerator {

    /**
     * @param {ANode[]} nodes
     */
    static generate(nodes){
        const world = World.get()
        const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
        _.uniq(nodes).forEach(node => script.addNode(node))
    }

}