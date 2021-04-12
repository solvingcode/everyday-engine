import ANodeData from '../../project/data/ANodeData.js'
import NodeInput from '../../pobject/NodeInput.js'

/**
 * @abstract
 */
export default class ANode extends ANodeData {

    /**
     * @param {number} sourceId
     */
    constructor(sourceId) {
        super()
        this.sourceId = sourceId
    }

    /**
     * @param {ANode} sourceNode
     * @param {number|null} targetId
     */
    attach(sourceNode, targetId){
        const inputNode = this.getInputNodeAttached(targetId)
        if(!inputNode){
            const newInputNode = new NodeInput()
            newInputNode.setSourceNodeId(sourceNode.getId())
            newInputNode.setTargetId(targetId)
            this.inputs.push(newInputNode)
        }else{
            inputNode.sourceNode = sourceNode
        }
    }

    /**
     * @param {number} targetId
     * @return {NodeInput}
     */
    getInputNodeAttached(targetId){
        return this.inputs.find(input => input.getTargetId() === targetId)
    }

    /**
     * @param {AFunction|AEvent} source
     */
    setSource(source){
        this.sourceId = source.getId()
    }

}