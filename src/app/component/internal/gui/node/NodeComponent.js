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
        this.add('node', TYPES.ANY)
        this.add('title', TYPES.STRING)
        this.add('type', TYPES.STRING)
        this.add('inputs', TYPES.ARRAY | TYPES.STRING, [])
        this.add('outputs', TYPES.ARRAY | TYPES.STRING, [])
        this.add('inputColors', TYPES.ARRAY | TYPES.STRING, [])
        this.add('inputConnections', TYPES.ARRAY | TYPES.BOOLEAN, [])
        this.add('outputConnections', TYPES.ARRAY | TYPES.BOOLEAN, [])
        this.add('baseInput', TYPES.BOOLEAN)
        this.add('baseOutput', TYPES.BOOLEAN)
        this.add('baseInputColor', TYPES.STRING)
        this.add('baseInputConnected', TYPES.BOOLEAN)
        this.add('baseOutputConnected', TYPES.BOOLEAN)
        this.add('outputConnected', TYPES.BOOLEAN)
        this.add('output', TYPES.STRING)
    }

    /**
     * @override
     */
    getFormFields() {
        return []
    }

    /**
     * @param {ANode} node
     */
    setNode(node) {
        this.setValue('node', node)
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
     * @param {string[]} outputs
     */
    setOutputs(outputs) {
        this.setValue('outputs', outputs)
    }

    /**
     * @param {string[]} inputColors
     */
    setInputColors(inputColors) {
        this.setValue('inputColors', inputColors)
    }

    /**
     * @param {string} baseInputColor
     */
    setBaseInputColor(baseInputColor) {
        this.setValue('baseInputColor', baseInputColor)
    }

    /**
     * @param {boolean[]} inputConnections
     */
    setInputConnections(inputConnections) {
        this.setValue('inputConnections', inputConnections)
    }

    /**
     * @param {boolean[]} outputConnections
     */
    setOutputConnections(outputConnections) {
        this.setValue('outputConnections', outputConnections)
    }

    /**
     * @param {boolean} outputConnected
     */
    setOutputConnected(outputConnected) {
        this.setValue('outputConnected', outputConnected)
    }

    /**
     * @param {boolean} baseInput
     */
    setBaseInput(baseInput) {
        this.setValue('baseInput', baseInput)
    }

    /**
     * @param {boolean} baseOutput
     */
    setBaseOutput(baseOutput) {
        this.setValue('baseOutput', baseOutput)
    }

    /**
     * @param {boolean} baseOutputConnected
     */
    setBaseOutputConnected(baseOutputConnected) {
        this.setValue('baseOutputConnected', baseOutputConnected)
    }

    /**
     * @param {boolean} baseInputConnected
     */
    setBaseInputConnected(baseInputConnected) {
        this.setValue('baseInputConnected', baseInputConnected)
    }

    /**
     * @param {string} output
     */
    setOutput(output) {
        this.setValue('output', output)
    }

    /**
     * @return {ANode}
     */
    getNode(){
        return this.getValue('node')
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
     * @return {string[]}
     */
    getOutputs(){
        return this.getValue('outputs')
    }

    /**
     * @return {string[]}
     */
    getInputColors(){
        return this.getValue('inputColors')
    }

    /**
     * @return {string}
     */
    getBaseInputColor(){
        return this.getValue('baseInputColor')
    }

    /**
     * @return {boolean}
     */
    getBaseOutput(){
        return this.getValue('baseOutput')
    }

    /**
     * @return {boolean}
     */
    getBaseInput(){
        return this.getValue('baseInput')
    }

    /**
     * @return {boolean[]}
     */
    getInputConnections(){
        return this.getValue('inputConnections')
    }

    /**
     * @return {boolean[]}
     */
    getOutputConnections(){
        return this.getValue('outputConnections')
    }

    /**
     * @return {boolean}
     */
    getBaseOutputConnected(){
        return this.getValue('baseOutputConnected')
    }

    /**
     * @return {boolean}
     */
    getBaseInputConnected(){
        return this.getValue('baseInputConnected')
    }

    /**
     * @return {boolean}
     */
    getOutputConnected(){
        return this.getValue('outputConnected')
    }

    /**
     * @return {string}
     */
    getOutput(){
        return this.getValue('output')
    }

}