import ClientError from '../exception/type/ClientError.js'
import Camera from '../core/Camera.js'
import Vector from '../utils/Vector.js'
import {SCENE_HEIGHT, SCENE_WIDTH} from '../core/Constant.js'
import AScriptFunctionData from '../project/data/AScriptFunctionData.js'
import {ACCESSOR} from './function/AFunction.js'

/**
 * @abstract
 */
export default class AScriptFunction extends AScriptFunctionData {

    /**
     * @type {boolean}
     */
    selected

    /**
     * @type {boolean}
     */
    updated

    /**
     * @param {string} name
     */
    constructor(name) {
        super(name)
        this.camera = new Camera(new Vector({x: -SCENE_WIDTH / 2, y: -SCENE_HEIGHT / 2}))
        this.updated = false
        this.selected = false
    }

    /**
     * @param {boolean} selected
     */
    setSelected(selected){
        this.selected = selected
    }

    /**
     * @return {boolean}
     */
    getSelected(){
        return this.selected
    }

    /**
     * @param {FunctionRegistry} functionRegistry
     */
    delete(functionRegistry) {
        functionRegistry.removeInstancesByClass(this.getName())
    }

    /**
     * @param {ANode} node
     * @param {number} id
     */
    updateNodeId(node, id) {
        const existNode = this.findNodeById(id)
        if (existNode) {
            throw new ClientError(`Script Create Node: Duplicate Node Id "${id}"`)
        }
        node.setId(id)
    }

    /**
     * @param {ANode} node
     */
    addNode(node) {
        this.nodes.push(node)
    }

    /**
     * @param {number} id
     */
    removeNodeById(id) {
        this.removeConnectionsByNodeId(id)
        const nodeIndex = this.nodes.findIndex(node => node.getId() === id)
        if(nodeIndex >= 0){
            this.nodes.splice(nodeIndex, 1)
        }
    }

    /**
     * @param {ANode} node
     * @return {boolean}
     */
    hasNode(node){
        return this.nodes.some(pNode => pNode === node)
    }

    /**
     * @param {number} nodeId
     */
    removeConnectionsByNodeId(nodeId) {
        const connections = this.getInputs().filter(input => input.getSourceNodeId() === nodeId)
        connections.forEach(connection => this.removeInputById(connection.getId()))
    }

    /**
     * @param {number} id
     */
    removeInputById(id) {
        const nodeInput = this.getInputs().find(pNodeInput => pNodeInput.getId() === id)
        const node = this.findNodeById(nodeInput.getNodeId())
        if (!node) {
            throw new ClientError(`Target Node for edge ID "${id}" not found`)
        }
        const nodeInputIndex = node.getInputs().findIndex(pNodeInput => pNodeInput.getId() === id)
        node.getInputs().splice(nodeInputIndex, 1)
    }

    /**
     * @param {NodeInput} nodeInput
     */
    removeInput(nodeInput) {
        const node = this.findNodeById(nodeInput.getNodeId())
        if (!node) {
            throw new ClientError(`Target Node for edge ID "${nodeInput.getName()}" not found`)
        }
        const nodeInputIndex = node.getInputs().findIndex(pNodeInput => pNodeInput === nodeInput)
        node.getInputs().splice(nodeInputIndex, 1)
    }

    /**
     * @return {ANode[]}
     */
    getSelectedNodes() {
        return this.nodes.filter(node => node.isSelected())
    }

    /**
     * @return {NodeInput[]}
     */
    getInputs() {
        return this.getNodes().reduce(
            (nodeInputs, node) => nodeInputs.concat(node.getInputs()), [])
    }

    /**
     * @return {NodeInput[]}
     */
    getSelectedEdges() {
        return this.getInputs().filter(nodeInput => nodeInput.isSelected())
    }

    /**
     * @param {number} id
     * @return {ANode}
     */
    findNodeById(id) {
        return this.nodes.find(node => node.getId() === id)
    }

    /**
     * @param {ANode} nodeClass
     * @return {ANode[]}
     */
    findNodesByClass(nodeClass) {
        return this.nodes.filter(node => node instanceof nodeClass)
    }

    /**
     * @param {number} id
     * @return {NodeInput}
     */
    findNodeInputById(id) {
        return this.getInputs().find(nodeInput => nodeInput.getId() === id)
    }

    /**
     * @param {string} name
     * @return {ANode}
     */
    findNodeByName(name) {
        return this.nodes.find(node => node.getName() === name)
    }

    /**
     * @param {string} name
     * @param {ANode} nodeClass
     * @return {ANode}
     */
    findNodeByNameClass(name, nodeClass) {
        return this.nodes.find(node => node.getName() === name && node instanceof nodeClass)
    }

    /**
     * @return {boolean}
     */
    isSelected(){
        return this.getSelected()
    }

    /**
     * @return {boolean}
     */
    isMain(){
        return this.getName() === MAIN_FUNCTION
    }

    select(){
        this.selected = true
    }

    unselect(){
        this.selected = false
    }

    /**
     * @param {boolean} updated
     */
    setUpdated(updated){
        this.updated = updated
    }

    /**
     * @return {boolean}
     */
    isUpdated(){
        return this.updated
    }

    /**
     * @return {boolean}
     */
    isPublic(){
        return this.access === ACCESSOR.PUBLIC
    }

}

export const MAIN_FUNCTION = 'main'