import {NODE_TYPES} from '../flow/node/ANode.js'
import EventNode from '../flow/node/EventNode.js'
import FunctionNode from '../flow/node/FunctionNode.js'
import ConstantNode from '../flow/node/ConstantNode.js'
import ConditionNode from '../flow/node/ConditionNode.js'

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
        }else{
            throw new TypeError(`Script: Node with type "${nodeType}" not supported!`)
        }
        return node
    }

}