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
import Maths from './Maths.js'
import ImageVariableNode from '../flow/node/variable/ImageVariableNode.js'
import UnitInstantVariableNode from '../flow/node/variable/UnitInstantVariableNode.js'
import ThenNode from '../flow/node/ThenNode.js'
import ArrayVariableNode from '../flow/node/variable/ArrayVariableNode.js'
import GetVariableNode from '../flow/node/variable/GetVariableNode.js'
import GetClassVarNode from '../flow/node/variable/GetClassVarNode.js'
import SetClassVarNode from '../flow/node/variable/SetClassVarNode.js'
import GetStaticClassVarNode from '../flow/node/variable/GetStaticClassVarNode.js'
import SetStaticClassVarNode from '../flow/node/variable/SetStaticClassVarNode.js'
import GetAttrClassNameNode from '../flow/node/variable/GetAttrClassNameNode.js'
import SetAttrClassNameNode from '../flow/node/variable/SetAttrClassNameNode.js'
import BranchNode from '../flow/node/BranchNode.js'
import SetAttrClassNode from '../flow/node/variable/SetAttrClassNode.js'
import GetAttrClassNode from '../flow/node/variable/GetAttrClassNode.js'

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
        } else if (nodeType === NODE_TYPES.BRANCH) {
            node = this.getNodeInstance(functionRegistry, BranchNode, nodeValue)
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
        } else if (nodeType === NODE_TYPES.GET_VAR) {
            node = this.getNodeInstance(functionRegistry, GetVariableNode, nodeValue)
        } else if (nodeType === NODE_TYPES.GET_CLASS_VAR) {
            node = this.getNodeInstance(functionRegistry, GetClassVarNode, nodeValue)
        } else if (nodeType === NODE_TYPES.SET_CLASS_VAR) {
            node = this.getNodeInstance(functionRegistry, SetClassVarNode, nodeValue)
        } else if (nodeType === NODE_TYPES.GET_ATTR_CLASS_NAME) {
            node = this.getNodeInstance(functionRegistry, GetAttrClassNameNode, nodeValue)
        } else if (nodeType === NODE_TYPES.SET_ATTR_CLASS_NAME) {
            node = this.getNodeInstance(functionRegistry, SetAttrClassNameNode, nodeValue)
        } else if (nodeType === NODE_TYPES.GET_ATTR_CLASS) {
            node = this.getNodeInstance(functionRegistry, GetAttrClassNode, nodeValue)
        } else if (nodeType === NODE_TYPES.SET_ATTR_CLASS) {
            node = this.getNodeInstance(functionRegistry, SetAttrClassNode, nodeValue)
        } else if (nodeType === NODE_TYPES.GET_STATIC_CLASS_VAR) {
            node = this.getNodeInstance(functionRegistry, GetStaticClassVarNode, nodeValue)
        } else if (nodeType === NODE_TYPES.SET_STATIC_CLASS_VAR) {
            node = this.getNodeInstance(functionRegistry, SetStaticClassVarNode, nodeValue)
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
            case BranchNode:
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
            case GetVariableNode:
            case GetClassVarNode:
            case SetClassVarNode:
            case GetStaticClassVarNode:
            case SetStaticClassVarNode:
            case GetAttrClassNameNode:
            case SetAttrClassNameNode:
            case GetAttrClassNode:
            case SetAttrClassNode:
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
        return node.getType()
    }

    /**
     * @param {World} world
     * @param {string} className
     * @param {AFunction} func
     * @return {boolean}
     */
    static isHasFunction(world, className, func) {
        return className === func.getClassName() || func.getChildClassNames().includes(className)
    }

    /**
     * @param {World} world
     * @param {AScript} script
     * @return {string[]}
     */
    static getParentClassNames(world, script) {
        if (script) {
            const parentClassName = script.getParentName()
            if (parentClassName) {
                const parentScript = world.getScriptManager().findByName(parentClassName)
                return [parentClassName, ...this.getParentClassNames(world, parentScript)]
            }
        }
        return []
    }

    /**
     * @param {World} world
     * @param {AScript} script
     * @return {string[]}
     */
    static getChildClassNames(world, script) {
        if (script) {
            const childClasses = world.getScriptManager().findByParentClassName(script.getName())
            if (childClasses.length) {
                const childClassNames = childClasses.map(pScript => pScript.getName())
                return [...childClassNames, ...childClasses.reduce((subChildClassNames, pScript) =>
                    [...subChildClassNames, ...this.getChildClassNames(world, pScript)], [])]
            }
        }
        return []
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
            const node = unit.getComponent(NodeComponent).getNode()
            const unitPosition = unit.getComponent(TransformComponent).getPosition()
            if (node) {
                const hasNodeInput = NodeHelper.hasBaseInput(node, world)
                const shiftInput = hasNodeInput ? 0 : 1
                const sourceNode = NodeHelper.getSourceNode(node, world)
                if (sourceNode) {
                    const inputs = sourceNode.getInputs()
                    for (let iInput = -1; iInput < inputs.length - shiftInput; iInput++) {
                        const input = iInput + shiftInput >= 0 ? inputs[iInput + shiftInput] : null
                        const {
                            position: inputLocalPosition,
                            sizeInput
                        } = NodeHelper.getNodeGUIInput(node.getType(), iInput)
                        const inputPosition = Vector.add(unitPosition, inputLocalPosition)
                        if (position.getX() >= inputPosition.getX() && position.getX() <= inputPosition.getX() + sizeInput &&
                            position.getY() >= inputPosition.getY() && position.getY() <= inputPosition.getY() + sizeInput
                        ) {
                            return {node, input}
                        }
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
     * @return {{node: ANode, output: DynamicAttribute|string|null}|undefined}
     */
    static findNodeOutputByPosition(script, unit, position, world) {
        if (unit) {
            const node = unit.getComponent(NodeComponent).getNode()
            if (node) {
                const unitPosition = unit.getComponent(TransformComponent).getPosition()
                const size = unit.getComponent(MeshComponent).getSize()
                const sourceNode = NodeHelper.getSourceNode(node, world)
                if (sourceNode) {
                    const outputs = NodeHelper.getOutputs(sourceNode)
                    if (NodeHelper.hasBaseOutput(node, world)) {
                        outputs.unshift(null)
                    }
                    for (let iOutput = 0; iOutput < outputs.length; iOutput++) {
                        const output = outputs[iOutput]
                        const {
                            position: inputLocalPosition,
                            sizeInput
                        } = NodeHelper.getNodeGUIOutput(node.getType(), size, iOutput)
                        const outputPosition = Vector.add(unitPosition, inputLocalPosition)
                        if (position.getX() >= outputPosition.getX() && position.getX() <= outputPosition.getX() + sizeInput &&
                            position.getY() >= outputPosition.getY() && position.getY() <= outputPosition.getY() + sizeInput
                        ) {
                            return {node, output}
                        }
                    }
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
        let nodeSourceName = node.getSourceName()
        if (node instanceof AnimationNode) {
            const animation = world.getAnimationManager().findByName(this.extractNameFromPublicAnimation(nodeSourceName))
            nodeSourceName = `${animation.getId()}`
        }
        return `${script.getName()}.${scriptFunction.getName()}.${nodeSourceName}${isAddIndex ? `.${nodeIndex}` : ''}`
    }

    /**
     * @param {string} className
     * @param {string} name
     * @return {string}
     */
    static getValueFromFunctionName(className, name) {
        const classRegex = new RegExp(`^${className}\.`)
        const nameFunction = name.replace(classRegex, '')
        return nameFunction.replace(/^.+\.([0-9]+)\.[0-9]+$/, '$1')
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
        const output = cXmlNode.getAttribute('output')
        const nodeSource = functionScript.findNodeById(nodeSourceId)
        const nodeTarget = functionScript.findNodeById(nodeTargetId)
        if (!nodeSource) {
            throw new ClientError(`ClassScriptXmlParser Error: Node ${nodeSourceId} not found`)
        }
        if (!nodeTarget) {
            throw new ClientError(`ClassScriptXmlParser Error: Node ${nodeTargetId} not found`)
        }
        nodeTarget.attach(nodeSource, nodeConnection, output)
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

    /**
     * @param {AScript} script
     * @param {World} world
     * @return {DynamicAttribute[]}
     */
    static getScriptVars(script, world) {
        return [...script.getVariables().map(variable => variable.getDefinition()), ...(script.getParentName() ?
            this.getScriptVars(world.getScriptManager().findByName(script.getParentName()), world) : [])]
    }

    /**
     * @param {string} name
     * @return {string}
     */
    static extractNameFromGetVar(name) {
        const nameParts = name.split('.')
        return `Get ${nameParts[nameParts.length - 1]}`
    }

    /**
     * @param {string} name
     * @return {string}
     */
    static extractNameFromSetVar(name) {
        const nameParts = name.split('.')
        return `Set ${nameParts[nameParts.length - 1]}`
    }

    /**
     * @param {string} name
     * @return {string}
     */
    static extractNameFromVar(name) {
        const nameParts = name.split('.')
        return nameParts[nameParts.length - 1]
    }

    /**
     * @param {string} name
     * @return {string}
     */
    static extractNameFromStaticVar(name) {
        return `static ${this.extractNameFromVar(name)}`
    }

    /**
     * @param {string} name
     * @return {string}
     */
    static extractNameFromPublicVar(name) {
        return name.replace(/^(Set|Get) (.+) \(public\)$/, '$2')
    }

    /**
     * @param {string} name
     * @return {string}
     */
    static extractNameFromComponent(name) {
        return name.replace(/^(Set|Get) (.+)$/, '$2')
    }

    /**
     * @param {string} name
     * @return {{component: string, attribute: string}}
     */
    static extractFromPublicVar(name) {
        const parseName = this.extractNameFromPublicVar(name)
        const nameParts = parseName.split('.')
        return {
            component: nameParts[0],
            attribute: nameParts[1]
        }
    }

    /**
     * @param {string} name
     * @return {string}
     */
    static extractNameFromPublicAnimation(name) {
        return name.replace(/^Animation (.+)$/, '$1')
    }

    /**
     * @param {string} name
     * @return {{component: string, attribute: string}}
     */
    static extractComponentName(name) {
        const parseName = name.replace(/^(Set|Get) (.+)$/, '$2')
        const nameParts = parseName.split('.')
        return {
            component: nameParts[0],
            attribute: nameParts[1]
        }
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {string} componentName
     * @return {Component}
     */
    static findComponent(world, unit, componentName) {
        const component = unit.findComponentByName(componentName)
        if (!component) {
            const script = world.getScriptManager().findByName(componentName)
            if (script) {
                const childClassNames = this.getChildClassNames(world, script)
                return childClassNames.reduce((foundComponent, childClassName) =>
                    foundComponent || this.findComponent(world, unit, childClassName), null)
            }
        }
        return component
    }
}