import DataIdGenerator from './DataIdGenerator.js'
import Maths from '../../../utils/Maths.js'

export default class NodeDataIdGenerator extends DataIdGenerator{

    /**
     * @override
     * @param {ANode[]} nodes
     */
    static generate(nodes){
        const newIds = []
        nodes.forEach(node => {
            newIds[node.getId()] = Maths.generateId()
        })
        nodes.forEach(node => {
            node.setId(newIds[node.getId()])
            node.getInputs().forEach(nodeInput => {
                nodeInput.setNodeId(newIds[nodeInput.getNodeId()])
                nodeInput.setSourceNodeId(newIds[nodeInput.getSourceNodeId()])
            })
        })
    }

}