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
import UnitVariableNode from '../flow/node/variable/UnitVariableNode.js'
import NodeScriptXmlParser from '../parser/flow/class/node/NodeScriptXmlParser.js'
import Maths from './Maths.js'
import ImageVariableNode from '../flow/node/variable/ImageVariableNode.js'
import UnitInstantVariableNode from '../flow/node/variable/UnitInstantVariableNode.js'
import ThenNode from '../flow/node/ThenNode.js'
import ArrayVariableNode from '../flow/node/variable/ArrayVariableNode.js'

export default class ScriptHelper {

    /**
     * @param {FunctionRegistry} functionRegistry
     * @param {AScriptFunction} script
     * @param {string} nodeType
     * @param {string} nodeValue
     * @return {ANode}
     */
    static createNode(functionRegistry, script, nodeType, nodeValue = '') {
        const node = this.newNode(functionRegistry, nodeType, nodeValue)
        script.addNode(node)
        return node
    }

    /**
     * @param {FunctionRegistry} registry
     * @param {AScriptFunction} script
     * @param {ANode} nodeClass
     * @param {string|number|boolean} value
     * @return {ANode}
     */
    static createNodeByClass(registry, script, nodeClass, value) {
        const node = this.getNodeInstance(registry, nodeClass, value)
        script.addNode(node)
        return node
    }

    /**
     * @param {FunctionRegistry} functionRegistry
     * @param {string} nodeType
     * @param {string} nodeValue
     * @return {ANode}
     */
    static newNode(functionRegistry, nodeType, nodeValue = '') {
        let node
        if (nodeType === NODE_TYPES.EVENT) {
            node = this.getNodeInstance(functionRegistry, EventNode, nodeValue)
        } else if (nodeType === NODE_TYPES.FUNCTION) {
            node = this.getNodeInstance(functionRegistry, FunctionNode, nodeValue)
        } else if (nodeType === NODE_TYPES.CONSTANT) {
            node = this.getNodeInstance(functionRegistry, ConstantNode, nodeValue)
        } else if (nodeType === NODE_TYPES.KEY_CODE) {
            node = this.getNodeInstance(functionRegistry, KeyCodeNode, nodeValue)
        } else if (nodeType === NODE_TYPES.CONDITION) {
            node = this.getNodeInstance(functionRegistry, ConditionNode, nodeValue)
        } else if (nodeType === NODE_TYPES.LOOP) {
            node = this.getNodeInstance(functionRegistry, LoopNode, nodeValue)
        } else if (nodeType === NODE_TYPES.THEN) {
            node = this.getNodeInstance(functionRegistry, ThenNode, nodeValue)
        } else if (nodeType === NODE_TYPES.UNIT) {
            node = this.getNodeInstance(functionRegistry, UnitNode, nodeValue)
        } else if (nodeType === NODE_TYPES.SELF) {
            node = this.getNodeInstance(functionRegistry, SelfNode, nodeValue)
        } else if (nodeType === NODE_TYPES.ANIMATION) {
            node = this.getNodeInstance(functionRegistry, AnimationNode, nodeValue)
        } else if (nodeType === NODE_TYPES.INPUT) {
            node = this.getNodeInstance(functionRegistry, FunctionInputNode, nodeValue)
        } else if (nodeType === NODE_TYPES.OUTPUT) {
            node = this.getNodeInstance(functionRegistry, FunctionOutputNode, nodeValue)
        } else if (nodeType === NODE_TYPES.REFERENCE) {
            node = this.getNodeInstance(functionRegistry, ReferenceNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_STRING) {
            node = this.getNodeInstance(functionRegistry, StringVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_UNIT) {
            node = this.getNodeInstance(functionRegistry, UnitVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_NUMBER) {
            node = this.getNodeInstance(functionRegistry, NumberVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_COMPONENT) {
            node = this.getNodeInstance(functionRegistry, ComponentVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_MASK_GROUP) {
            node = this.getNodeInstance(functionRegistry, MaskGroupVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_BOOLEAN) {
            node = this.getNodeInstance(functionRegistry, BooleanVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_AUDIO) {
            node = this.getNodeInstance(functionRegistry, AudioVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_IMAGE) {
            node = this.getNodeInstance(functionRegistry, ImageVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_ARRAY) {
            node = this.getNodeInstance(functionRegistry, ArrayVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_UNIT_INSTANT) {
            node = this.getNodeInstance(functionRegistry, UnitInstantVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_SCENE) {
            node = this.getNodeInstance(functionRegistry, SceneVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.VAR_TOGGLE) {
            node = this.getNodeInstance(functionRegistry, ToggleVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.COMPONENT) {
            node = this.getNodeInstance(functionRegistry, ComponentNode, nodeValue)
        } else {
            throw new ClientError(`Script: Node with type "${nodeType}" not supported!`)
        }
        return node
    }

    /**
     * @param {FunctionRegistry} registry
     * @param {ANode} nodeClass
     * @param {string|number|boolean} value
     * @return {ANode}
     */
    static getNodeInstance(registry, nodeClass, value) {
        let sourceName
        switch (nodeClass) {
            case FunctionNode:
            case ConditionNode:
            case EventNode:
            case ConstantNode:
            case KeyCodeNode:
            case UnitNode:
            case AnimationNode:
            case FunctionInputNode:
            case FunctionOutputNode:
            case ReferenceNode:
            case LoopNode:
            case ThenNode:
            case StringVariableNode:
            case UnitVariableNode:
            case ToggleVariableNode:
            case BooleanVariableNode:
            case AudioVariableNode:
            case ArrayVariableNode:
            case ImageVariableNode:
            case UnitInstantVariableNode:
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
        return new nodeClass(sourceName)
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
        } else if (node instanceof ThenNode) {
            nodeType = NODE_TYPES.THEN
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
        } else if (node instanceof UnitVariableNode) {
            nodeType = NODE_TYPES.VAR_UNIT
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
        } else if (node instanceof ArrayVariableNode) {
            nodeType = NODE_TYPES.VAR_ARRAY
        } else if (node instanceof ImageVariableNode) {
            nodeType = NODE_TYPES.VAR_IMAGE
        } else if (node instanceof UnitInstantVariableNode) {
            nodeType = NODE_TYPES.VAR_UNIT_INSTANT
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
     * @param {World} world
     * @param {string} functionName
     * @param {string} className
     * @return {boolean}
     */
    static isFunctionInstanceOf(world, functionName, className) {
        const func = world.getFunctionRegistry().getInstance(functionName)
        if (func) {
            const functionClassName = func.getClassName()
            if (functionClassName) {
                return this.isClassInstanceOf(world, functionClassName, className)
            }
        }
    }

    /**
     * @param {World} world
     * @param {string} className
     * @param {string} parentClassName
     * @return {boolean}
     */
    static isClassInstanceOf(world, className, parentClassName) {
        if (className === parentClassName) {
            return true
        }
        const script = world.getScriptManager().findByName(className)
        if (script) {
            return this.isClassInstanceOf(world, script.getParentName(), parentClassName)
        }
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
        return `${script.getName()}.${scriptFunction.getName()}.${node.getSourceName()}${isAddIndex ? `.${nodeIndex}` : ''}`
    }

    /**
     * @param {string} className
     * @param {string} name
     * @return {string}
     */
    static getValueFromFunctionName(className, name) {
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
        if (!script.getFunction(functionName)) {
            const scriptFunction = new FunctionScript(functionName)
            script.addFunction(scriptFunction)
        } else {
            throw new ClientError(`Function "${functionName}" already exists`)
        }
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

    /**
     * @param {AScriptFunction} functionScript
     * @param {Element|ChildNode} cXmlNode
     */
    static attachNodeXml(functionScript, cXmlNode) {
        const nodeSourceId = parseInt(cXmlNode.getAttribute('source'))
        const nodeTargetId = parseInt(cXmlNode.getAttribute('target'))
        const nodeConnection = cXmlNode.getAttribute('connection')
        const nodeSource = functionScript.findNodeById(nodeSourceId)
        const nodeTarget = functionScript.findNodeById(nodeTargetId)
        if (!nodeSource) {
            throw new ClientError(`ClassScriptXmlParser Error: Node ${nodeSourceId} not found`)
        }
        if (!nodeTarget) {
            throw new ClientError(`ClassScriptXmlParser Error: Node ${nodeTargetId} not found`)
        }
        nodeTarget.attach(nodeSource, nodeConnection)
    }

    /**
     * @param {ChildNode|Element} cXmlNode
     * @param {AScriptFunction} functionScript
     */
    static addXmlNode(cXmlNode, functionScript) {
        const element = cXmlNode.nodeName
        if (element === 'node') {
            const node = NodeScriptXmlParser.parse(cXmlNode)
            const nodeId = parseInt(cXmlNode.getAttribute('id'))
            functionScript.addNode(node)
            functionScript.updateNodeId(node, nodeId)
        } else if (element === 'edge') {
            this.attachNodeXml(functionScript, cXmlNode)
        }
    }

    /**
     * @param {(ChildNode|Element)[]} xmlNodes
     * @return {(ChildNode|Element)[]}
     */
    static regenerateXmlNodeIds(xmlNodes) {
        const oldIds = []
        const newIds = []
        xmlNodes.forEach(xmlNode => {
            const element = xmlNode.nodeName
            if (element === 'node') {
                const nodeId = parseInt(xmlNode.getAttribute('id'))
                oldIds.push(nodeId)
                const newNodeId = Maths.generateId()
                xmlNode.setAttribute('id', `${newNodeId}`)
                newIds.push(newNodeId)
            }
        })
        xmlNodes.forEach(xmlNode => {
            const element = xmlNode.nodeName
            if (element === 'edge') {
                const nodeSourceId = parseInt(xmlNode.getAttribute('source'))
                const nodeTargetId = parseInt(xmlNode.getAttribute('target'))
                const indexOldSourceId = oldIds.findIndex(id => id === nodeSourceId)
                const indexOldTargetId = oldIds.findIndex(id => id === nodeTargetId)
                xmlNode.setAttribute('source', newIds[indexOldSourceId])
                xmlNode.setAttribute('target', newIds[indexOldTargetId])
            }
        })
        return xmlNodes
    }
}