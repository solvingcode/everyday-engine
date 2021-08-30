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
import ComponentNode from '../flow/node/ComponentNode.js'
import AAnimation from '../flow/animation/AAnimation.js'
import ReferenceNode from '../flow/node/ReferenceNode.js'
import SelfNode from '../flow/node/SelfNode.js'
import ToggleVariableNode from '../flow/node/variable/ToggleVariableNode.js'
import BooleanVariableNode from '../flow/node/variable/BooleanVariableNode.js'
import NumberVariableNode from '../flow/node/variable/NumberVariableNode.js'
import ComponentVariableNode from '../flow/node/variable/ComponentVariableNode.js'
import MaskGroupVariableNode from '../flow/node/variable/MaskGroupVariableNode.js'
import LoopNode from '../flow/node/LoopNode.js'
import AudioVariableNode from '../flow/node/variable/AudioVariableNode.js'
import FunctionScript from '../flow/FunctionScript.js'
import FunctionInputNode from '../flow/node/FunctionInputNode.js'
import FunctionOutputNode from '../flow/node/FunctionOutputNode.js'
import SceneVariableNode from '../flow/node/variable/SceneVariableNode.js'

export default class ScriptHelper {

    /**
     * @param {FunctionRegistry} functionRegistry
     * @param {AScriptFunction} script
     * @param {string} nodeType
     * @param {string} nodeValue
     * @return {ANode}
     */
    static createNode(functionRegistry, script, nodeType, nodeValue = '') {
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
        } else if (nodeType === NODE_TYPES.LOOP) {
            node = script.createNode(functionRegistry, LoopNode, nodeValue)
        } else if (nodeType === NODE_TYPES.UNIT) {
            node = script.createNode(functionRegistry, UnitNode, nodeValue)
        } else if (nodeType === NODE_TYPES.SELF) {
            node = script.createNode(functionRegistry, SelfNode, nodeValue)
        } else if (nodeType === NODE_TYPES.ANIMATION) {
            node = script.createNode(functionRegistry, AnimationNode, nodeValue)
        } else if (nodeType === NODE_TYPES.INPUT) {
            node = script.createNode(functionRegistry, FunctionInputNode, nodeValue)
        } else if (nodeType === NODE_TYPES.OUTPUT) {
            node = script.createNode(functionRegistry, FunctionOutputNode, nodeValue)
        } else if (nodeType === NODE_TYPES.REFERENCE) {
            node = script.createNode(functionRegistry, ReferenceNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_STRING) {
            node = script.createNode(functionRegistry, StringVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_NUMBER) {
            node = script.createNode(functionRegistry, NumberVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_COMPONENT) {
            node = script.createNode(functionRegistry, ComponentVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_MASK_GROUP) {
            node = script.createNode(functionRegistry, MaskGroupVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_BOOLEAN) {
            node = script.createNode(functionRegistry, BooleanVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_AUDIO) {
            node = script.createNode(functionRegistry, AudioVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_SCENE) {
            node = script.createNode(functionRegistry, SceneVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_TOGGLE) {
            node = script.createNode(functionRegistry, ToggleVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.COMPONENT) {
            node = script.createNode(functionRegistry, ComponentNode, nodeValue)
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
        } else if (node instanceof LoopNode) {
            nodeType = NODE_TYPES.LOOP
        } else if (node instanceof UnitNode) {
            nodeType = NODE_TYPES.UNIT
        } else if (node instanceof SelfNode) {
            nodeType = NODE_TYPES.SELF
        } else if (node instanceof AnimationNode) {
            nodeType = NODE_TYPES.ANIMATION
        } else if (node instanceof FunctionInputNode) {
            nodeType = NODE_TYPES.INPUT
        } else if (node instanceof FunctionOutputNode) {
            nodeType = NODE_TYPES.OUTPUT
        } else if (node instanceof ReferenceNode) {
            nodeType = NODE_TYPES.REFERENCE
        } else if (node instanceof KeyCodeNode) {
            nodeType = NODE_TYPES.KEY_CODE
        } else if (node instanceof StringVariableNode) {
            nodeType = NODE_TYPES.VAR_STRING
        } else if (node instanceof NumberVariableNode) {
            nodeType = NODE_TYPES.VAR_NUMBER
        } else if (node instanceof ComponentVariableNode) {
            nodeType = NODE_TYPES.VAR_COMPONENT
        } else if (node instanceof MaskGroupVariableNode) {
            nodeType = NODE_TYPES.VAR_MASK_GROUP
        } else if (node instanceof BooleanVariableNode) {
            nodeType = NODE_TYPES.VAR_BOOLEAN
        } else if (node instanceof AudioVariableNode) {
            nodeType = NODE_TYPES.VAR_AUDIO
        } else if (node instanceof SceneVariableNode) {
            nodeType = NODE_TYPES.VAR_SCENE
        } else if (node instanceof ToggleVariableNode) {
            nodeType = NODE_TYPES.VAR_TOGGLE
        } else if (node instanceof ComponentNode) {
            nodeType = NODE_TYPES.COMPONENT
        } else {
            throw new ClientError(`AssetScriptXmlGenerator: ${node.constructor.name} not supported`)
        }
        return nodeType
    }

    /**
     * undefined if no input found
     * @param {AScriptFunction} script
     * @param {Unit} unit
     * @param {Vector} position
     * @param {World} world
     * @return {{node: ANode, input: DynamicAttribute|null}|undefined}
     */
    static findNodeInputByPosition(script, unit, position, world) {
        if (unit) {
            const nodeId = unit.getComponent(NodeComponent).getNodeId()
            const unitPosition = unit.getComponent(TransformComponent).getPosition()
            const node = script.findNodeById(nodeId)
            if (node && NodeHelper.hasBaseInput(node.getType())) {
                const sourceNode = NodeHelper.getSourceNode(node, world)
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
     * @param {AScriptFunction} script
     * @param {Unit} unit
     * @param {Vector} position
     * @param {World} world
     * @return {{node: ANode, output: DynamicAttribute|null}|undefined}
     */
    static findNodeOutputByPosition(script, unit, position, world) {
        if (unit) {
            const nodeId = unit.getComponent(NodeComponent).getNodeId()
            const unitPosition = unit.getComponent(TransformComponent).getPosition()
            const size = unit.getComponent(MeshComponent).getSize()
            const node = script.findNodeById(nodeId)
            const sourceNode = NodeHelper.getSourceNode(node, world)
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
     * @param {AScriptFunction} script
     * @param {World} world
     * @return {boolean}
     */
    static validate(script, world) {
        script.getNodes().forEach(node => {
            const sourceNode = NodeHelper.getSourceNode(node, world)
            if (!sourceNode) {
                script.removeNodeById(node.getId())
            }
        })
    }

    /**
     * @param {AScript} script
     * @param {AScriptFunction} scriptFunction
     * @param {ANode} node
     * @param {World} world
     * @return {string}
     */
    static generateFunctionName(script, scriptFunction, node, world) {
        const nodeIndex = scriptFunction.getNodes().findIndex(pNode => pNode === node)
        const sourceNode = NodeHelper.getSourceNode(node, world)
        const isAddIndex = !sourceNode.isUnique()
        return `${script.getName()}.${scriptFunction.getName()}.${node.getSourceName()}${isAddIndex ? `.${nodeIndex}`: ''}`
    }

    /**
     * @param {string} className
     * @param {string} name
     * @return {string}
     */
    static getValueFromFunctionName(className, name){
        const classRegex = new RegExp(`^${className}\.`)
        const nameFunction = name.replace(classRegex, '')
        return nameFunction.replace(/^(.+)\.[0-9]+$/, '$1')
    }

    /**
     * @param {AScript} script
     * @param {AScriptFunction} scriptFunction
     * @param {ANode} node
     * @param {World} world
     * @return {AFunction}
     */
    static createStackFunction(script, scriptFunction, node, world) {
        const element = NodeHelper.getSourceNode(node, world)
        const functionName = this.generateFunctionName(script, scriptFunction, node, world)
        if (element instanceof AEvent || element instanceof AAnimation) {
            return new (element.constructor)(functionName)
        }
        return new AEmptyStackFunction(functionName)
    }

    /**
     * @param {AScript} script
     * @param {string} functionName
     */
    static createFunction(script, functionName) {
        const scriptFunction = new FunctionScript(functionName)
        script.addFunction(scriptFunction)
    }

    /**
     * @param {AScriptFunction} script
     * @param {ANode} node
     * @param {string} functionName
     * @return {boolean}
     */
    static isNodeHasPredecessor(script, node, functionName) {
        const inputs = node.getInputs()
        for (let iInput in inputs) {
            const sourceNodeId = inputs[iInput].getSourceNodeId()
            const sourceNode = script.findNodeById(sourceNodeId)
            if (
                sourceNode.getName() === functionName ||
                this.isNodeHasPredecessor(script, sourceNode, functionName)
            ) {
                return true
            }
        }
        return false
    }
}