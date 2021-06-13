import {NODE_TYPES} from '../flow/node/ANode.js'
import EventNode from '../flow/node/EventNode.js'
import FunctionNode from '../flow/node/FunctionNode.js'
import ConstantNode from '../flow/node/ConstantNode.js'
import ConditionNode from '../flow/node/ConditionNode.js'
import UnitNode from '../flow/node/UnitNode.js'
import ClientError from '../exception/type/ClientError.js'
import KeyCodeNode from '../flow/node/KeyCodeNode.js'
import NodeComponent from '../component/internal/gui/node/NodeComponent.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import NodeHelper from './NodeHelper.js'
import Vector from './Vector.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import StringVariableNode from '../flow/node/variable/StringVariableNode.js'
import AnimationNode from '../flow/node/AnimationNode.js'
import AEvent from '../flow/event/AEvent.js'
import AEmptyStackFunction from '../flow/function/AEmptyStackFunction.js'

export default class ScriptHelper {

    /**
     * @param {FunctionRegistry} functionRegistry
     * @param {AScript} script
     * @param {string} nodeType
     * @param {string} nodeValue
     * @return {ANode}
     */
    static createNode(functionRegistry, script, nodeType, nodeValue) {
        let node
        if (nodeType === NODE_TYPES.EVENT) {
            node = script.createNode(functionRegistry, EventNode, nodeValue)
        } else if (nodeType === NODE_TYPES.FUNCTION) {
            node = script.createNode(functionRegistry, FunctionNode, nodeValue)
        } else if (nodeType === NODE_TYPES.CONSTANT) {
            node = script.createNode(functionRegistry, ConstantNode, nodeValue)
        } else if (nodeType === NODE_TYPES.KEY_CODE) {
            node = script.createNode(functionRegistry, KeyCodeNode, nodeValue)
        } else if (nodeType === NODE_TYPES.CONDITION) {
            node = script.createNode(functionRegistry, ConditionNode, nodeValue)
        } else if (nodeType === NODE_TYPES.UNIT) {
            node = script.createNode(functionRegistry, UnitNode, nodeValue)
        } else if (nodeType === NODE_TYPES.ANIMATION) {
            node = script.createNode(functionRegistry, AnimationNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_STRING) {
            node = script.createNode(functionRegistry, StringVariableNode, nodeValue)
        } else {
            throw new ClientError(`Script: Node with type "${nodeType}" not supported!`)
        }
        return node
    }

    /**
     * @param {ANode} node
     * @return {string}
     */
    static getNodeType(node) {
        let nodeType = ''
        if (node instanceof EventNode) {
            nodeType = NODE_TYPES.EVENT
        } else if (node instanceof FunctionNode) {
            nodeType = NODE_TYPES.FUNCTION
        } else if (node instanceof ConstantNode) {
            nodeType = NODE_TYPES.CONSTANT
        } else if (node instanceof ConditionNode) {
            nodeType = NODE_TYPES.CONDITION
        } else if (node instanceof UnitNode) {
            nodeType = NODE_TYPES.UNIT
        } else if (node instanceof AnimationNode) {
            nodeType = NODE_TYPES.ANIMATION
        } else if (node instanceof KeyCodeNode) {
            nodeType = NODE_TYPES.KEY_CODE
        } else if (node instanceof StringVariableNode) {
            nodeType = NODE_TYPES.VAR_STRING
        } else {
            throw new ClientError(`AssetScriptXmlGenerator: ${node.constructor.name} not supported`)
        }
        return nodeType
    }

    /**
     * undefined if no input found
     * @param {AScript} script
     * @param {Unit} unit
     * @param {Vector} position
     * @return {{node: ANode, input: DynamicAttribute|null}|undefined}
     */
    static findNodeInputByPosition(script, unit, position) {
        if (unit) {
            const nodeId = unit.getComponent(NodeComponent).getNodeId()
            const unitPosition = unit.getComponent(TransformComponent).getPosition()
            const node = script.findNodeById(nodeId)
            if (node && NodeHelper.hasBaseInput(node.getType())) {
                const sourceNode = NodeHelper.getSourceNode(node)
                const inputs = sourceNode.getInputs()
                for (let iInput = -1; iInput < inputs.length; iInput++) {
                    const input = iInput >= 0 ? inputs[iInput] : null
                    const {position: inputLocalPosition, sizeInput} = NodeHelper.getNodeGUIInput(node.getType(), iInput)
                    const inputPosition = Vector.add(unitPosition, inputLocalPosition)
                    if (position.getX() >= inputPosition.getX() && position.getX() <= inputPosition.getX() + sizeInput &&
                        position.getY() >= inputPosition.getY() && position.getY() <= inputPosition.getY() + sizeInput
                    ) {
                        return {node, input}
                    }
                }
            }
        }
        return undefined
    }

    /**
     * Return null if the input found is the default one, undefined if no input found
     * @param {AScript} script
     * @param {Unit} unit
     * @param {Vector} position
     * @return {{node: ANode, output: DynamicAttribute|null}|undefined}
     */
    static findNodeOutputByPosition(script, unit, position) {
        if (unit) {
            const nodeId = unit.getComponent(NodeComponent).getNodeId()
            const unitPosition = unit.getComponent(TransformComponent).getPosition()
            const size = unit.getComponent(MeshComponent).getSize()
            const node = script.findNodeById(nodeId)
            const sourceNode = NodeHelper.getSourceNode(node)
            const output = sourceNode.getOutput()
            if (node && (output || NodeHelper.hasBaseOutput(node.getType()))) {
                const {position: inputLocalPosition, sizeInput} = NodeHelper.getNodeGUIOutput(node.getType(), size)
                const outputPosition = Vector.add(unitPosition, inputLocalPosition)
                if (position.getX() >= outputPosition.getX() && position.getX() <= outputPosition.getX() + sizeInput &&
                    position.getY() >= outputPosition.getY() && position.getY() <= outputPosition.getY() + sizeInput
                ) {
                    return {node, output}
                }
            }
        }
        return undefined
    }

    /**
     * @param {AScript} script
     * @return {boolean}
     */
    static validate(script) {
        script.getNodes().forEach(node => {
            const sourceNode = NodeHelper.getSourceNode(node)
            if (!sourceNode) {
                script.removeNodeById(node.getId())
            }
        })
    }

    /**
     * @param {AScript} script
     * @param {ANode} node
     * @return {string}
     */
    static generateFunctionName(script, node) {
        const nodeIndex = script.getNodes().findIndex(pNode => pNode === node)
        return `${script.getName()}.${node.getSourceName()}${nodeIndex}`
    }

    /**
     * @param {AScript} script
     * @param {ANode} node
     * @return {AFunction}
     */
    static createFunction(script, node){
        const element = NodeHelper.getSourceNode(node)
        const functionName = this.generateFunctionName(script, node)
        if(element instanceof AEvent){
            return new (element.constructor)(functionName)
        }
        return new AEmptyStackFunction(functionName)
    }

}