import {NODE_TYPES} from '../flow/node/ANode.js'
import EventNode from '../flow/node/EventNode.js'
import FunctionNode from '../flow/node/FunctionNode.js'
import ConstantNode from '../flow/node/ConstantNode.js'
import ConditionNode from '../flow/node/ConditionNode.js'
import UnitNode from '../flow/node/UnitNode.js'

export default class ScriptHelper{

    /**
     * @param {FunctionRegistry} functionRegistry
     * @param {AScript} script
     * @param {string} nodeType
     * @param {string} nodeValue
     * @return {ANode}
     */
    static createNode(functionRegistry, script, nodeType, nodeValue){
        let node
        if(nodeType === NODE_TYPES.EVENT){
            node = script.createNode(functionRegistry, EventNode, nodeValue)
        }else if(nodeType === NODE_TYPES.FUNCTION){
            node = script.createNode(functionRegistry, FunctionNode, nodeValue)
        }else if(nodeType === NODE_TYPES.CONSTANT){
            node = script.createNode(functionRegistry, ConstantNode, nodeValue)
        }else if(nodeType === NODE_TYPES.CONDITION){
            node = script.createNode(functionRegistry, ConditionNode, nodeValue)
        }else if(nodeType === NODE_TYPES.UNIT){
            node = script.createNode(functionRegistry, UnitNode, nodeValue)
        }else{
            throw new TypeError(`Script: Node with type "${nodeType}" not supported!`)
        }
        return node
    }

    /**
     * @param {ANode} node
     * @return {string}
     */
    static getNodeType(node) {
        let nodeType = ''
        if(node instanceof EventNode){
            nodeType = NODE_TYPES.EVENT
        }else if(node instanceof FunctionNode){
            nodeType = NODE_TYPES.FUNCTION
        }else if(node instanceof ConstantNode){
            nodeType = NODE_TYPES.CONSTANT
        }else if(node instanceof ConditionNode){
            nodeType = NODE_TYPES.CONDITION
        }else if(node instanceof UnitNode){
            nodeType = NODE_TYPES.UNIT
        }else{
            throw new TypeError(`AssetScriptXmlGenerator: ${node.constructor.name} not supported`)
        }
        return nodeType
    }

}