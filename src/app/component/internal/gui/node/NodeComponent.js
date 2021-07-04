import Component from '../../../Component.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class NodeComponent extends Component{


    constructor() {
        super('Node')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('nodeId', TYPES.NUMBER)
        this.add('title', TYPES.STRING)
        this.add('type', TYPES.STRING)
        this.add('inputs', TYPES.ARRAY_STRING)
        this.add('output', TYPES.STRING)
        this.add('nodeInputs', TYPES.ARRAY_DYNAMIC_ATTRIBUTE, [])
    }

    /**
     * @override
     */
    getFormFields() {
        return []
    }

    /**
     * @param {number} nodeId
     */
    setNodeId(nodeId) {
        this.setValue('nodeId', nodeId)
    }

    /**
     * @param {string} title
     */
    setTitle(title) {
        this.setValue('title', title)
    }

    /**
     * @param {string} type
     */
    setType(type) {
        this.setValue('type', type)
    }

    /**
     * @param {string[]} inputs
     */
    setInputs(inputs) {
        this.setValue('inputs', inputs)
    }

    /**
     * @param {DynamicAttribute[]} nodeInputs
     */
    setNodeInputs(nodeInputs) {
        this.setValue('nodeInputs', nodeInputs)
    }

    /**
     * @param {string} output
     */
    setOutput(output) {
        this.setValue('output', output)
    }

    /**
     * @return {number}
     */
    getNodeId(){
        return this.getValue('nodeId')
    }

    /**
     * @return {string}
     */
    getTitle(){
        return this.getValue('title')
    }

    /**
     * @return {string}
     */
    getType(){
        return this.getValue('type')
    }

    /**
     * @return {string[]}
     */
    getInputs(){
        return this.getValue('inputs')
    }

    /**
     * @return {DynamicAttribute[]}
     */
    getNodeInputs() {
        return this.getValue('nodeInputs')
    }

    /**
     * @return {string}
     */
    getOutput(){
        return this.getValue('output')
    }

}