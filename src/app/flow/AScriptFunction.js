import FunctionNode from './node/FunctionNode.js'
import ConstantNode from './node/ConstantNode.js'
import EventNode from './node/EventNode.js'
import ConditionNode from './node/ConditionNode.js'
import UnitNode from './node/UnitNode.js'
import ClientError from '../exception/type/ClientError.js'
import KeyCodeNode from './node/KeyCodeNode.js'
import Camera from '../core/Camera.js'
import Vector from '../utils/Vector.js'
import {SCENE_HEIGHT, SCENE_WIDTH} from '../core/Constant.js'
import StringVariableNode from './node/variable/StringVariableNode.js'
import AnimationNode from './node/AnimationNode.js'
import ComponentNode from './node/ComponentNode.js'
import ReferenceNode from './node/ReferenceNode.js'
import SelfNode from './node/SelfNode.js'
import ToggleVariableNode from './node/variable/ToggleVariableNode.js'
import BooleanVariableNode from './node/variable/BooleanVariableNode.js'
import NumberVariableNode from './node/variable/NumberVariableNode.js'
import ComponentVariableNode from './node/variable/ComponentVariableNode.js'
import MaskGroupVariableNode from './node/variable/MaskGroupVariableNode.js'
import LoopNode from './node/LoopNode.js'
import AudioVariableNode from './node/variable/AudioVariableNode.js'
import AScriptFunctionData from '../project/data/AScriptFunctionData.js'
import FunctionInputNode from './node/FunctionInputNode.js'
import FunctionOutputNode from './node/FunctionOutputNode.js'
import {ACCESSOR} from './function/AFunction.js'
import SceneVariableNode from './node/variable/SceneVariableNode.js'

/**
 * @abstract
 */
export default class AScriptFunction extends AScriptFunctionData {

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
    }

    /**
     * @param {FunctionRegistry} registry
     * @param {ANode} nodeClass
     * @param {string|number|boolean} value
     * @return {ANode}
     */
    createNode(registry, nodeClass, value) {
        let sourceName
        switch (nodeClass) {
            case FunctionNode:
            case ConditionNode:
            case EventNode:
                sourceName = registry.tryGetInstance(value).getName()
                break
            case ConstantNode:
            case KeyCodeNode:
            case UnitNode:
            case AnimationNode:
            case FunctionInputNode:
            case FunctionOutputNode:
            case ReferenceNode:
            case LoopNode:
            case StringVariableNode:
            case ToggleVariableNode:
            case BooleanVariableNode:
            case AudioVariableNode:
            case SceneVariableNode:
            case NumberVariableNode:
            case ComponentVariableNode:
            case MaskGroupVariableNode:
            case ComponentNode:
                sourceName = value
                break
            case SelfNode:
                sourceName = 'Self'
                break
            default:
                throw new ClientError(`Script Create Node: "${nodeClass.name}" not supported`)
        }
        const node = new nodeClass(sourceName)
        this.addNode(node)
        return node
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
        this.nodes.splice(nodeIndex, 1)
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