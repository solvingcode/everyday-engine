import ANodeData from '../../project/data/ANodeData.js'
import NodeInput from '../../pobject/NodeInput.js'
import NodeHelper from '../../utils/NodeHelper.js'

/**
 * @abstract
 */
export default class ANode extends ANodeData {

    /**
     * @type {boolean}
     */
    selected

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
            newInputNode.setNodeId(this.getId())
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
     * @param {FunctionRegistry} functionRegistry
     * @param {NodeInput} nodeInput
     * @return {DynamicAttribute}
     */
    getTargetInput(functionRegistry, nodeInput){
        return functionRegistry.getInstanceById(this.getSourceId())
            .findInputById(nodeInput.getTargetId())
    }

    /**
     * @param {AFunction|AEvent} source
     */
    setSource(source){
        this.sourceId = source.getId()
    }

    /**
     * @return {string}
     */
    getName(){
        return NodeHelper.getNodeName(this)
    }

    /**
     * @return {string}
     */
    getType(){
        return NodeHelper.getNodeType(this)
    }

    /**
     * @param {boolean} selected
     */
    setSelected(selected){
        this.selected = selected
    }

    select(){
        this.setSelected(true)
    }

    unselect(){
        this.setSelected(false)
    }

    /**
     * @return {boolean}
     */
    isSelected(){
        return this.selected
    }

}

export const NODE_TYPES = {
    EVENT: 'event',
    FUNCTION: 'function',
    CONSTANT: 'constant',
    CONDITION: 'condition',
    UNIT: 'unit'
}