import ANodeData from '../../project/data/ANodeData.js'
import NodeInput from '../../pobject/NodeInput.js'
import Vector from '../../utils/Vector.js'
import SystemError from '../../exception/type/SystemError.js'
import {CONSTANTS} from '../../operation/StackRegister.js'

/**
 * @abstract
 */
export default class ANode extends ANodeData {

    /**
     * @type {boolean}
     */
    selected

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
     * @param {string|null} sourceName
     */
    attach(sourceNode, targetName, sourceName){
        const inputNode = this.getInputNodeAttached(targetName)
        if(!inputNode){
            const newInputNode = new NodeInput()
            newInputNode.setSourceNodeId(sourceNode.getId())
            newInputNode.setTargetName(targetName)
            newInputNode.setNodeId(this.getId())
            newInputNode.setSourceName(sourceName)
            this.inputs.push(newInputNode)
        }else{
            inputNode.sourceNode = sourceNode
        }
    }

    /**
     * @param {ANode} sourceNode
     * @param {string} targetName
     */
    attachResultOutput(sourceNode, targetName){
        this.attach(sourceNode, targetName, CONSTANTS.RESULT)
    }

    /**
     * @param {ANode} sourceNode
     */
    attachManagedOutput(sourceNode){
        this.attach(sourceNode, null, CONSTANTS.RESULT)
    }

    /**
     * @param {ANode} sourceNode
     */
    attachPrevNode(sourceNode){
        this.attach(sourceNode, null, null)
    }

    /**
     * @param {NodeInput} nodeInput
     */
    isResultToInputConnection(nodeInput){
        return nodeInput.getTargetName() && nodeInput.getSourceName() === CONSTANTS.RESULT
    }

    /**
     * @param {NodeInput} nodeInput
     */
    isOrderConnection(nodeInput){
        return !nodeInput.getTargetName() && !nodeInput.getSourceName()
    }

    /**
     * @param {NodeInput} nodeInput
     */
    isResultToBaseConnection(nodeInput){
        return !nodeInput.getTargetName() && nodeInput.getSourceName() === CONSTANTS.RESULT
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

}

export const NODE_TYPES = {
    EVENT: 'event',
    FUNCTION: 'function',
    CONSTANT: 'constant',
    CONDITION: 'condition',
    LOOP: 'loop',
    UNIT: 'unit',
    KEY_CODE: 'key_code',
    VAR_STRING: 'var_string',
    VAR_NUMBER: 'var_number',
    VAR_TOGGLE: 'var_toggle',
    VAR_BOOLEAN: 'var_bool',
    VAR_COMPONENT: 'var_component',
    VAR_MASK_GROUP: 'var_mask_group',
    VAR_AUDIO: 'var_audio',
    VAR_IMAGE: 'var_image',
    VAR_ARRAY: 'var_array',
    VAR_UNIT_INSTANT: 'var_unit_instant',
    VAR_SCENE: 'var_scene',
    VAR_UNIT: 'var_unit',
    GET_VAR: 'GET_VAR',
    ANIMATION: 'animation',
    COMPONENT: 'component',
    REFERENCE: 'reference',
    SELF: 'self',
    AUDIO: 'audio',
    INPUT: 'input',
    OUTPUT: 'output',
    THEN: 'then'
}

export const NODE_TYPE_NAMES = [
    {
        value: NODE_TYPES.INPUT,
        label: 'Input'
    },
    {
        value: NODE_TYPES.OUTPUT,
        label: 'Output'
    },
    {
        value: NODE_TYPES.SELF,
        label: 'Self'
    },
    {
        value: NODE_TYPES.EVENT,
        label: 'Event'
    },
    {
        value: NODE_TYPES.ANIMATION,
        label: 'Animation'
    },
    {
        value: NODE_TYPES.COMPONENT,
        label: 'Component'
    },
    {
        value: NODE_TYPES.FUNCTION,
        label: 'Function'
    },
    {
        value: NODE_TYPES.LOOP,
        label: 'Loop'
    },
    {
        value: NODE_TYPES.THEN,
        label: 'Then'
    },
    {
        value: NODE_TYPES.CONDITION,
        label: 'Condition'
    },
    {
        value: NODE_TYPES.KEY_CODE,
        label: 'Key Code'
    },
    {
        value: NODE_TYPES.VAR_UNIT,
        label: 'Variable (Unit)'
    },
    {
        value: NODE_TYPES.VAR_NUMBER,
        label: 'Variable (Number)'
    },
    {
        value: NODE_TYPES.VAR_STRING,
        label: 'Variable (string)'
    },
    {
        value: NODE_TYPES.VAR_BOOLEAN,
        label: 'Variable (boolean)'
    },
    {
        value: NODE_TYPES.VAR_TOGGLE,
        label: 'Variable (toggle)'
    },
    {
        value: NODE_TYPES.VAR_COMPONENT,
        label: 'Variable (component)'
    },
    {
        value: NODE_TYPES.VAR_AUDIO,
        label: 'Variable (Audio)'
    },
    {
        value: NODE_TYPES.VAR_IMAGE,
        label: 'Variable (Image)'
    },
    {
        value: NODE_TYPES.VAR_UNIT_INSTANT,
        label: 'Variable (Unit Instant)'
    },
    {
        value: NODE_TYPES.VAR_ARRAY,
        label: 'Variable (Array)'
    },
    {
        value: NODE_TYPES.VAR_SCENE,
        label: 'Variable (Scene)'
    },
    {
        value: NODE_TYPES.VAR_MASK_GROUP,
        label: 'Variable (Mask Group)'
    },
    {
        value: NODE_TYPES.REFERENCE,
        label: 'Reference'
    }
]