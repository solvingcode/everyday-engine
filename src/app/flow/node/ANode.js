import ANodeData from '../../project/data/ANodeData.js'
import NodeInput from '../../pobject/NodeInput.js'
import Vector from '../../utils/Vector.js'
import SystemError from '../../exception/type/SystemError.js'

/**
 * @abstract
 */
export default class ANode extends ANodeData {

    /**
     * @type {boolean}
     */
    selected

    /**
     * @type {Vector}
     */
    position

    /**
     * @param {string} sourceName
     */
    constructor(sourceName) {
        super()
        this.sourceName = sourceName
        this.position = new Vector()
    }

    /**
     * @param {ANode} sourceNode
     * @param {string|null} targetName
     */
    attach(sourceNode, targetName){
        const inputNode = this.getInputNodeAttached(targetName)
        if(!inputNode){
            const newInputNode = new NodeInput()
            newInputNode.setSourceNodeId(sourceNode.getId())
            newInputNode.setTargetName(targetName)
            newInputNode.setNodeId(this.getId())
            this.inputs.push(newInputNode)
        }else{
            inputNode.sourceNode = sourceNode
        }
    }

    /**
     * @param {string} targetName
     * @return {NodeInput}
     */
    getInputNodeAttached(targetName){
        return this.inputs.find(input => input.getTargetName() === targetName)
    }

    /**
     * @param {FunctionRegistry} functionRegistry
     * @param {NodeInput} nodeInput
     * @return {DynamicAttribute}
     */
    getTargetInput(functionRegistry, nodeInput){
        const functionInstance = functionRegistry.getInstance(this.getSourceName())
        return functionInstance ? functionInstance.findInputByName(nodeInput.getTargetName()) : null
    }

    /**
     * @return {string}
     */
    getName(){
        return this.sourceName
    }

    /**
     * @abstract
     * @return {string}
     */
    getType(){
        throw new SystemError(`${this.constructor.name}.getType must be implemented`)
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

    /**
     * @param {Vector} position
     */
    setPosition(position){
        this.position = position
    }

    /**
     * @return {Vector}
     */
    getPosition(){
        return this.position
    }

}

export const NODE_TYPES = {
    EVENT: 'event',
    FUNCTION: 'function',
    CONSTANT: 'constant',
    CONDITION: 'condition',
    UNIT: 'unit',
    KEY_CODE: 'key_code',
    VAR_STRING: 'var_string',
    VAR_NUMBER: 'var_number',
    VAR_TOGGLE: 'var_toggle',
    VAR_BOOLEAN: 'var_bool',
    VAR_COMPONENT: 'var_component',
    VAR_MASK_GROUP: 'var_mask_group',
    ANIMATION: 'animation',
    COMPONENT: 'component',
    REFERENCE: 'reference',
    SELF: 'self'
}