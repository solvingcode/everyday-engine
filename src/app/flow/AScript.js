import AScriptData, {STATUS} from '../project/data/AScriptData.js'
import FunctionNode from './node/FunctionNode.js'
import ConstantNode from './node/ConstantNode.js'
import AConstant from './constant/AConstant.js'
import DynamicAttributeHelper from '../utils/DynamicAttributeHelper.js'
import EventNode from './node/EventNode.js'
import ConditionNode from './node/ConditionNode.js'
import UnitNode from './node/UnitNode.js'
import AUnit from './unit/AUnit.js'
import {TYPES} from '../pobject/AttributeType.js'
import ClientError from '../exception/type/ClientError.js'
import SystemError from '../exception/type/SystemError.js'
import KeyCodeNode from './node/KeyCodeNode.js'
import AKeyCode from './keycode/AKeyCode.js'
import Camera from '../core/Camera.js'
import Vector from '../utils/Vector.js'
import {SCENE_HEIGHT, SCENE_WIDTH} from '../core/Constant.js'
import StringVariableNode from './node/variable/StringVariableNode.js'
import AStringVariable from './variable/AStringVariable.js'
import AAnimation from './animation/AAnimation.js'
import AnimationNode from './node/AnimationNode.js'

/**
 * @abstract
 */
export default class AScript extends AScriptData{

    constructor(props) {
        super(props)
        this.camera = new Camera(new Vector({x: -SCENE_WIDTH / 2, y: -SCENE_HEIGHT / 2}))
    }

    /**
     * @param {Registry} registry
     * @param {ANode} nodeClass
     * @param {string|number|boolean} value
     * @return {ANode}
     */
    createNode(registry, nodeClass, value){
        let nodeSource
        switch(nodeClass){
            case FunctionNode:
            case ConditionNode:
            case EventNode:
                nodeSource = registry.tryGetInstance(value)
                break
            case ConstantNode:
            case KeyCodeNode:
                if(nodeClass === ConstantNode){
                    nodeSource = new AConstant(DynamicAttributeHelper.findTypeOfValue(value), value)
                }else if(nodeClass === KeyCodeNode){
                    nodeSource = new AKeyCode(value)
                }
                registry.register(nodeSource)
                break
            case UnitNode:
                nodeSource = new AUnit(TYPES.NUMBER, value)
                registry.register(nodeSource)
                break
            case AnimationNode:
                nodeSource = new AAnimation(TYPES.NUMBER, value)
                registry.register(nodeSource)
                break
            case StringVariableNode:
                nodeSource = new AStringVariable(value)
                registry.register(nodeSource)
                break
            default:
                throw new ClientError(`Script Create Node: "${nodeClass.name}" not supported`)
        }
        const node = new nodeClass(nodeSource.getId())
        this.addNode(node)
        return node
    }

    /**
     * @param {FunctionRegistry} functionRegistry
     */
    delete(functionRegistry){
        functionRegistry.removeInstancesByClass(this.getName())
    }

    /**
     * @param {ANode} node
     * @param {number} id
     */
    updateNodeId(node, id){
        const existNode = this.findNodeById(id)
        if(existNode){
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
    removeNodeById(id){
        this.removeConnectionsByNodeId(id)
        const nodeIndex = this.nodes.findIndex(node => node.getId() === id)
        this.nodes.splice(nodeIndex, 1)
    }

    /**
     * @param {number} nodeId
     */
    removeConnectionsByNodeId(nodeId){
        const connections = this.getInputs().filter(input => input.getSourceNodeId() === nodeId)
        connections.forEach(connection => this.removeInputById(connection.getId()))
    }

    /**
     * @param {number} id
     */
    removeInputById(id){
        const nodeInput = this.getInputs().find(pNodeInput => pNodeInput.getId() === id)
        const node = this.findNodeById(nodeInput.getNodeId())
        if(!node){
            throw new ClientError(`Target Node for edge ID "${id}" not found`)
        }
        const nodeInputIndex = node.getInputs().findIndex(pNodeInput => pNodeInput.getId() === id)
        node.getInputs().splice(nodeInputIndex, 1)
    }

    /**
     * @return {ANode[]}
     */
    getSelectedNodes(){
        return this.nodes.filter(node => node.isSelected())
    }

    /**
     * @return {NodeInput[]}
     */
    getInputs(){
        return this.getNodes().reduce(
            (nodeInputs, node) => nodeInputs.concat(node.getInputs()), [])
    }

    /**
     * @return {NodeInput[]}
     */
    getSelectedEdges(){
        return this.getInputs().filter(nodeInput => nodeInput.isSelected())
    }

    /**
     * @param {number} id
     * @return {ANode}
     */
    findNodeById(id){
        return this.nodes.find(node => node.getId() === id)
    }

    /**
     * @param {ANode} nodeClass
     * @return {ANode[]}
     */
    findNodesByClass(nodeClass){
        return this.nodes.filter(node => node instanceof nodeClass)
    }

    /**
     * @param {number} id
     * @return {NodeInput}
     */
    findNodeInputById(id){
        return this.getInputs().find(nodeInput => nodeInput.getId() === id)
    }

    /**
     * @param {string} name
     * @return {ANode}
     */
    findNodeByName(name){
        return this.nodes.find(node => node.getName() === name)
    }

    compile(){
        if(this.doCompile()){
            this.setStatus(STATUS.COMPILED)
        }else{
            this.setStatus(STATUS.ERROR)
        }
    }

    reset(){
        this.setStatus(STATUS.NEW)
    }

    /**
     * @abstract
     * @private
     * @return {boolean}
     */
    doCompile(){
        throw new SystemError(`${this.constructor.name}.doCompile must be implemented`)
    }

}