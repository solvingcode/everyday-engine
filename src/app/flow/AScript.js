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

/**
 * @abstract
 */
export default class AScript extends AScriptData{

    /**
     * @param {Registry} registry
     * @param {Function} nodeClass
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
                nodeSource = new AConstant(DynamicAttributeHelper.findTypeOfValue(value), value)
                const existNodeSource = registry.getInstance(nodeSource.getName())
                if(existNodeSource){
                    nodeSource = existNodeSource
                }else{
                    registry.tryRegister(nodeSource)
                }
                break
            case UnitNode:
                nodeSource = new AUnit(TYPES.NUMBER, value)
                registry.tryRegister(nodeSource)
                break
            default:
                throw new TypeError(`Script Create Node: "${nodeClass.name}" not supported`)
        }
        const node = new nodeClass(nodeSource.getId())
        this.addNode(node)
        return node
    }

    /**
     * @param {ANode} node
     * @param {number} id
     */
    updateNodeId(node, id){
        const existNode = this.findNodeById(id)
        if(existNode){
            throw new TypeError(`Script Create Node: Duplicate Node Id "${id}"`)
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
        const nodeIndex = this.nodes.findIndex(node => node.getId() === id)
        this.nodes.splice(nodeIndex, 1)
    }

    /**
     * @param {number} id
     */
    removeInputById(id){
        const nodeInput = this.getInputs().find(pNodeInput => pNodeInput.getId() === id)
        const node = this.findNodeById(nodeInput.getNodeId())
        if(!node){
            throw new TypeError(`Target Node for edge ID "${id}" not found`)
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
        throw new TypeError(`${this.constructor.name}.doCompile must be implemented`)
    }

}