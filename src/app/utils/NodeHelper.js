import AConstant from '../flow/constant/AConstant.js'
import ACondition from '../flow/condition/ACondition.js'
import AEvent from '../flow/event/AEvent.js'
import AFunction from '../flow/function/AFunction.js'
import AUnit from '../flow/unit/AUnit.js'
import {NODE_TYPE_NAMES, NODE_TYPES} from '../flow/node/ANode.js'
import ClientError from '../exception/type/ClientError.js'
import Size from '../pobject/Size.js'
import Vector from './Vector.js'
import AKeyCode from '../flow/keycode/AKeyCode.js'
import AStringVariable from '../flow/variable/AStringVariable.js'
import AAnimation from '../flow/animation/AAnimation.js'
import FunctionNode from '../flow/node/FunctionNode.js'
import ConditionNode from '../flow/node/ConditionNode.js'
import EventNode from '../flow/node/EventNode.js'
import ConstantNode from '../flow/node/ConstantNode.js'
import KeyCodeNode from '../flow/node/KeyCodeNode.js'
import DynamicAttributeHelper from './DynamicAttributeHelper.js'
import UnitNode from '../flow/node/UnitNode.js'
import AnimationNode from '../flow/node/AnimationNode.js'
import StringVariableNode from '../flow/node/variable/StringVariableNode.js'
import ComponentNode from '../flow/node/ComponentNode.js'
import AComponent from '../flow/component/AComponent.js'
import NumberVariableNode from '../flow/node/variable/NumberVariableNode.js'
import ANumberVariable from '../flow/variable/ANumberVariable.js'
import ReferenceNode from '../flow/node/ReferenceNode.js'
import AReference from '../flow/reference/AReference.js'
import SelfNode from '../flow/node/SelfNode.js'
import ASelf from '../flow/unit/ASelf.js'
import ToggleVariableNode from '../flow/node/variable/ToggleVariableNode.js'
import AToggleVariable from '../flow/variable/AToggleVariable.js'
import BooleanVariableNode from '../flow/node/variable/BooleanVariableNode.js'
import ABooleanVariable from '../flow/variable/ABooleanVariable.js'
import DynamicAttribute from '../pobject/DynamicAttribute.js'
import AttributeType, {TYPES} from '../pobject/AttributeType.js'
import AVariable from '../flow/variable/AVariable.js'
import ComponentVariableNode from '../flow/node/variable/ComponentVariableNode.js'
import AComponentVariable from '../flow/variable/AComponentVariable.js'
import MaskGroupVariableNode from '../flow/node/variable/MaskGroupVariableNode.js'
import AMaskGroupVariable from '../flow/variable/AMaskGroupVariable.js'
import LoopNode from '../flow/node/LoopNode.js'
import ALoop from '../flow/loop/ALoop.js'
import AudioVariableNode from '../flow/node/variable/AudioVariableNode.js'
import AAudioVariable from '../flow/variable/AAudioVariable.js'
import FunctionInputNode from '../flow/node/FunctionInputNode.js'
import FunctionOutputNode from '../flow/node/FunctionOutputNode.js'
import AFunctionInput from '../flow/io/AFunctionInput.js'
import AFunctionOutput from '../flow/io/AFunctionOutput.js'
import SceneVariableNode from '../flow/node/variable/SceneVariableNode.js'
import ASceneVariable from '../flow/variable/ASceneVariable.js'
import UnitVariableNode from '../flow/node/variable/UnitVariableNode.js'
import AUnitVariable from '../flow/variable/AUnitVariable.js'
import AImageVariable from '../flow/variable/AImageVariable.js'
import ImageVariableNode from '../flow/node/variable/ImageVariableNode.js'
import AUnitInstantVariable from '../flow/variable/AUnitInstantVariable.js'
import UnitInstantVariableNode from '../flow/node/variable/UnitInstantVariableNode.js'
import AThen from '../flow/promise/AThen.js'
import ThenNode from '../flow/node/ThenNode.js'
import AArrayVariable from '../flow/variable/AArrayVariable.js'
import ArrayVariableNode from '../flow/node/variable/ArrayVariableNode.js'
import GetVariableNode from '../flow/node/variable/GetVariableNode.js'
import AGetVariable from '../flow/variable/AGetVariable.js'
import ScriptHelper from './ScriptHelper.js'
import AGetClassVariable from '../flow/function/variable/AGetClassVariable.js'
import ASetClassVariable from '../flow/function/variable/ASetClassVariable.js'
import AGetStaticClassVariable from '../flow/function/variable/AGetStaticClassVariable.js'
import ASetStaticClassVariable from '../flow/function/variable/ASetStaticClassVariable.js'
import GetClassVarNode from '../flow/node/variable/GetClassVarNode.js'
import SetClassVarNode from '../flow/node/variable/SetClassVarNode.js'
import GetStaticClassVarNode from '../flow/node/variable/GetStaticClassVarNode.js'
import SetStaticClassVarNode from '../flow/node/variable/SetStaticClassVarNode.js'

export default class NodeHelper {

    /**
     * @param {ANode} node
     * @param {World} world
     * @return {AFunction}
     */
    static getSourceNode(node, world) {
        const functionRegistry = world.getFunctionRegistry()
        const sourceName = node.getSourceName()
        switch (node.constructor) {
            case FunctionNode:
            case ConditionNode:
            case EventNode:
                return functionRegistry.getInstance(sourceName)
            case ConstantNode:
                return new AConstant(DynamicAttributeHelper.findTypeOfValue(sourceName), sourceName)
            case KeyCodeNode:
                return new AKeyCode(sourceName)
            case UnitNode:
                return new AUnit(sourceName)
            case SelfNode:
                return new ASelf(sourceName)
            case AnimationNode:
                return new AAnimation(sourceName)
            case FunctionInputNode:
                return new AFunctionInput(sourceName)
            case FunctionOutputNode:
                return new AFunctionOutput(sourceName)
            case ReferenceNode:
                return new AReference(sourceName)
            case LoopNode:
                return new ALoop(sourceName)
            case ThenNode:
                return new AThen(sourceName)
            case GetVariableNode:
                return new AGetVariable(sourceName)
            case GetClassVarNode:
                return new AGetClassVariable(sourceName)
            case SetClassVarNode:
                return new ASetClassVariable(sourceName)
            case GetStaticClassVarNode:
                return new AGetStaticClassVariable(sourceName)
            case SetStaticClassVarNode:
                return new ASetStaticClassVariable(sourceName)
            case StringVariableNode:
                return new AStringVariable(sourceName)
            case UnitVariableNode:
                return new AUnitVariable(sourceName)
            case BooleanVariableNode:
                return new ABooleanVariable(sourceName)
            case AudioVariableNode:
                return new AAudioVariable(sourceName)
            case ArrayVariableNode:
                return new AArrayVariable(sourceName)
            case ImageVariableNode:
                return new AImageVariable(sourceName)
            case UnitInstantVariableNode:
                return new AUnitInstantVariable(sourceName)
            case SceneVariableNode:
                return new ASceneVariable(sourceName)
            case NumberVariableNode:
                return new ANumberVariable(sourceName)
            case ComponentVariableNode:
                return new AComponentVariable(sourceName)
            case MaskGroupVariableNode:
                return new AMaskGroupVariable(sourceName)
            case ToggleVariableNode:
                return new AToggleVariable(sourceName)
            case ComponentNode:
                return new AComponent(sourceName)
            default:
                throw new ClientError(`Source Node: "${node.constructor.name}" not supported`)
        }
    }

    /**
     * @param {AFunction} source
     * @return {string}
     */
    static getNodeType(source) {
        const mapNodeSource = {
            [NODE_TYPES.CONDITION]: ACondition,
            [NODE_TYPES.EVENT]: AEvent,
            [NODE_TYPES.CONSTANT]: AConstant,
            [NODE_TYPES.KEY_CODE]: AKeyCode,
            [NODE_TYPES.UNIT]: AUnit,
            [NODE_TYPES.SELF]: ASelf,
            [NODE_TYPES.ANIMATION]: AAnimation,
            [NODE_TYPES.INPUT]: AFunctionInput,
            [NODE_TYPES.OUTPUT]: AFunctionOutput,
            [NODE_TYPES.REFERENCE]: AReference,
            [NODE_TYPES.LOOP]: ALoop,
            [NODE_TYPES.THEN]: AThen,
            [NODE_TYPES.GET_VAR]: AGetVariable,
            [NODE_TYPES.GET_CLASS_VAR]: AGetClassVariable,
            [NODE_TYPES.SET_CLASS_VAR]: ASetClassVariable,
            [NODE_TYPES.GET_STATIC_CLASS_VAR]: AGetStaticClassVariable,
            [NODE_TYPES.SET_STATIC_CLASS_VAR]: ASetStaticClassVariable,
            [NODE_TYPES.VAR_STRING]: AStringVariable,
            [NODE_TYPES.VAR_UNIT]: AUnitVariable,
            [NODE_TYPES.VAR_BOOLEAN]: ABooleanVariable,
            [NODE_TYPES.VAR_AUDIO]: AAudioVariable,
            [NODE_TYPES.VAR_ARRAY]: AArrayVariable,
            [NODE_TYPES.VAR_IMAGE]: AImageVariable,
            [NODE_TYPES.VAR_UNIT_INSTANT]: AUnitInstantVariable,
            [NODE_TYPES.VAR_SCENE]: ASceneVariable,
            [NODE_TYPES.VAR_NUMBER]: ANumberVariable,
            [NODE_TYPES.VAR_COMPONENT]: AComponentVariable,
            [NODE_TYPES.VAR_MASK_GROUP]: AMaskGroupVariable,
            [NODE_TYPES.VAR_TOGGLE]: AToggleVariable,
            [NODE_TYPES.COMPONENT]: AComponent
        }

        for (const nodeType in mapNodeSource) {
            if (source instanceof mapNodeSource[nodeType]) {
                return nodeType
            }
        }
        if (source instanceof AFunction) {
            return NODE_TYPES.FUNCTION
        }

        throw new ClientError(`Source: "${source.constructor.name}" not supported`)
    }

    /**
     * @param {ANode} node
     * @param {World} world
     * @return {string}
     */
    static getNodeName(node, world) {
        const nodeSource = this.getSourceNode(node, world)
        if (nodeSource instanceof AConstant) {
            return `${nodeSource.getName()}`
        } else if (nodeSource instanceof AKeyCode) {
            return `${nodeSource.getName()}`
        } else if (nodeSource instanceof AVariable) {
            return `${nodeSource.getName()} (${AttributeType.getName(nodeSource.getOutput().getAttrType())})`
        } else if (nodeSource instanceof AGetVariable) {
            return `${nodeSource.getName()} (var)`
        } else if (nodeSource instanceof AGetClassVariable) {
            return ScriptHelper.extractNameFromVar(nodeSource.getName())
        } else if (nodeSource instanceof ASetClassVariable) {
            return ScriptHelper.extractNameFromVar(nodeSource.getName())
        } else if (nodeSource instanceof AGetStaticClassVariable) {
            return ScriptHelper.extractNameFromStaticVar(nodeSource.getName())
        } else if (nodeSource instanceof ASetStaticClassVariable) {
            return ScriptHelper.extractNameFromStaticVar(nodeSource.getName())
        } else if (nodeSource instanceof ACondition) {
            return `${nodeSource.getName()}`
        } else if (nodeSource instanceof ALoop) {
            return `${nodeSource.getName()}`
        } else if (nodeSource instanceof AThen) {
            return `${nodeSource.getName()}`
        } else if (nodeSource instanceof AEvent) {
            return `${nodeSource.getName()}`
        } else if (nodeSource instanceof AUnit) {
            const unit = world.findUnitById(parseInt(nodeSource.getName()))
            return `${unit.getName()}`
        } else if (nodeSource instanceof AAnimation) {
            const animation = world.getAnimationManager().findById(parseInt(nodeSource.getName()))
            return `${animation ? animation.getName() : nodeSource.getName()}`
        } else if (nodeSource instanceof AComponent) {
            return `${nodeSource.getName()}`
        } else if (nodeSource instanceof AFunctionInput) {
            const dynamicAttribute = this.getAttributeFromNodeFunctionInput(node, world)
            return `${dynamicAttribute.getAttrName()} [${DynamicAttributeHelper.getAttributeTypeName(dynamicAttribute.getAttrType())}]`
        } else if (nodeSource instanceof AFunctionOutput) {
            return DynamicAttributeHelper.getAttributeTypeName(parseInt(nodeSource.getName()))
        } else if (nodeSource instanceof AFunction) {
            return `${nodeSource.getName()}`
        } else {
            throw new ClientError(`Node source "${nodeSource && nodeSource.constructor.name}" unknown`)
        }
    }

    /**
     * @param {ANode} node
     * @param {NodeInput} nodeInput
     */
    static validateResultToInputConnection(node, nodeInput) {
        if (!node.isResultToInputConnection(nodeInput)) {
            throw new ClientError(`${node.getName()}: Connection is invalid (must be a result-to-input connection)`)
        }
    }

    /**
     * @param {ANode} node
     * @param {NodeInput} nodeInput
     */
    static validateResultToInputOrOrderConnection(node, nodeInput) {
        if (!node.isResultToInputConnection(nodeInput) && !node.isOrderConnection(nodeInput)) {
            throw new ClientError(`${node.getName()}: Connection is invalid (must be a result-to-input or order connection)`)
        }
    }

    /**
     * @param {ANode} node
     * @param {NodeInput} nodeInput
     */
    static validateOrderConnection(node, nodeInput) {
        if (!node.isOrderConnection(nodeInput)) {
            throw new ClientError(`${node.getName()}: Connection is invalid (must be an order connection)`)
        }
    }

    /**
     * @param {ANode} node
     * @param {NodeInput} nodeInput
     */
    static validateResultToBaseConnection(node, nodeInput) {
        if (!node.isResultToBaseConnection(nodeInput)) {
            throw new ClientError(`${node.getName()}: Connection is invalid (must be a result to base connection)`)
        }
    }

    /**
     * @param {ANode} node
     * @param {NodeInput} nodeInput
     * @param {World} world
     * @return {DynamicAttribute}
     */
    static validateTargetInput(node, nodeInput, world) {
        const element = this.getSourceNode(node, world)
        const targetName = nodeInput.getTargetName()
        const targetInput = element.findInputByName(targetName)
        if (!element.findInputByName(targetName)) {
            throw new ClientError(`${node.getName()}: Target input "${targetName}" not exists`)
        }
        return targetInput
    }

    /**
     * @param {World} world
     * @param {ANode} node
     * @return {DynamicAttribute}
     */
    static getAttributeFromNodeFunctionInput(node, world) {
        const nodeSource = this.getSourceNode(node, world)
        const inputMatches = nodeSource.getName().match(/([^\[]+)\[(\d+)]$/)
        const inputName = inputMatches[1]
        const inputType = parseInt(inputMatches[2])
        return new DynamicAttribute(inputName, inputType)
    }

    /**
     * @param {World} world
     * @param {ANode} node
     * @return {DynamicAttribute}
     */
    static getAttributeFromNodeFunctionOutput(node, world) {
        const nodeSource = this.getSourceNode(node, world)
        return new DynamicAttribute('output', parseInt(nodeSource.getName()))
    }

    /**
     * @param {number} nodeType
     * @return {string}
     */
    static getNodeTypeName(nodeType) {
        const nodeTypeName = NODE_TYPE_NAMES.find(nodeName => nodeName.value === nodeType)
        if (nodeTypeName) {
            return nodeTypeName.label
        }
        throw new ClientError(`Node type not recognized "${nodeType}"`)
    }

    /**
     * @param {string} type
     * @return {{
     * shadowBlur: number, colorFocused: string,
     * heightHead: number, boxColor: string,
     * sizeInput: number, fontSize: number,
     * baseInputColor: string, headColor: string,
     * padding: number, fontColor: string,
     * fontSizeRatio: number, selectColor: string
     * }}
     */
    static getNodeGUIProps(type) {
        const sizeInput = 10
        const fontSize = 12
        const fontSizeRatio = 1.5
        const padding = 10
        const heightHead = fontSize + padding * 2
        const shadowBlur = 10
        const boxColor = '#0f1013'
        const baseInputColor = '#afafaf'
        const colorFocused = '#555555'
        const fontColor = '#ffffff'
        const selectColor = '#d09300'
        const outputColor = '#69ebff'
        let headColor
        if (type === NODE_TYPES.FUNCTION) {
            headColor = '#2c3f66'
        } else if (type === NODE_TYPES.EVENT) {
            headColor = '#5e2222'
        } else if (type === NODE_TYPES.CONSTANT) {
            headColor = ''
        } else if (type === NODE_TYPES.CONDITION) {
            headColor = '#225e31'
        } else if (type === NODE_TYPES.LOOP) {
            headColor = '#225e50'
        } else if (type === NODE_TYPES.THEN) {
            headColor = '#40225e'
        } else if (type === NODE_TYPES.UNIT) {
            headColor = '#5e2254'
        } else if (type === NODE_TYPES.ANIMATION) {
            headColor = '#5e5622'
        } else if (type === NODE_TYPES.KEY_CODE) {
            headColor = '#375e22'
        } else if (type === NODE_TYPES.GET_VAR ||
            type === NODE_TYPES.GET_CLASS_VAR ||
            type === NODE_TYPES.GET_STATIC_CLASS_VAR ||
            type === NODE_TYPES.SET_CLASS_VAR ||
            type === NODE_TYPES.SET_STATIC_CLASS_VAR) {
            headColor = '#00695a'
        } else if (type === NODE_TYPES.COMPONENT) {
            headColor = '#5e2254'
        } else if (type === NODE_TYPES.REFERENCE) {
            headColor = '#22445e'
        } else if (type === NODE_TYPES.INPUT) {
            headColor = '#a33b0b'
        } else if (type === NODE_TYPES.OUTPUT) {
            headColor = '#a33b0b'
        } else {
            headColor = ''
        }
        return {
            sizeInput,
            fontSize,
            heightHead,
            shadowBlur,
            boxColor,
            baseInputColor,
            colorFocused,
            fontColor,
            padding,
            headColor,
            fontSizeRatio,
            selectColor,
            outputColor
        }
    }

    /**
     * @param {ANode} node
     * @param {AScriptFunction} script
     * @param {World} world
     * @return {Size}
     */
    static getNodeGUISize(node, script, world) {
        const nodeSource = this.getSourceNode(node, world)
        const nodeSourceInputs = nodeSource.getInputs()
        const outputs = nodeSource.getOutput() ? [nodeSource.getOutput()] : []
        const outputLength = outputs.length - (!NodeHelper.hasBaseOutput(node.getType()) ? 1 : 0)
        const type = node.getType()
        const {fontSize, padding, fontSizeRatio, sizeInput} = this.getNodeGUIProps(type)
        const nodeInputTextLengths = this.getNodeGUIInputs(node, script, world).names
            .concat(this.getNodeName(node, world)).map(text => text.length)
        const width = Math.max(Math.max(...nodeInputTextLengths) * fontSize / fontSizeRatio, 100)
        const height = (Math.max(nodeSourceInputs.length, outputLength) + 1) * (sizeInput + padding * 2) + (fontSize + padding * 2)
        return new Size({width, height})
    }

    /**
     * @param {string} type
     * @param {Size} size
     * @param {number} index
     * @return {{position: Vector, sizeInput: number, outputColor: string}}
     */
    static getNodeGUIOutput(type, size, index) {
        const {sizeInput, padding, heightHead, outputColor} = this.getNodeGUIProps(type)
        const position = new Vector({
            x: size.getWidth() - padding - sizeInput,
            y: heightHead + padding + padding * 2 * index
        })
        return {position, sizeInput, outputColor}
    }

    /**
     * @param {string} type
     * @param {number} index
     * @return {{position: Vector, sizeInput: number}}
     */
    static getNodeGUIInput(type, index) {
        const {sizeInput, padding, heightHead} = this.getNodeGUIProps(type)
        const position = new Vector({
            x: padding,
            y: heightHead + sizeInput + (padding + sizeInput) * (index + 1)
        })
        return {position, sizeInput}
    }

    /**
     * @param {ANode} node
     * @param {AScriptFunction} script
     * @param {World} world
     * @return {DynamicAttribute[]}
     */
    static getNodeGUIConstantInputs(node, script, world) {
        return node.getInputs().map(input => {
            const sourceNode = script.findNodeById(input.getSourceNodeId())
            if (this.isHidden(sourceNode)) {
                return new DynamicAttribute(
                    input.getTargetName(),
                    TYPES.STRING,
                    sourceNode && this.getNodeName(sourceNode, world)
                )
            }
            return null
        }).filter(input => input)
    }

    /**
     * @param {ANode} node
     * @return {boolean}
     */
    static isHidden(node) {
        return node instanceof ConstantNode ||
            node instanceof SelfNode ||
            node instanceof ComponentNode
    }

    /**
     * @param {ANode} node
     * @param {AScriptFunction} script
     * @param {World} world
     * @return {{names: string[], connections: boolean[], colors: string[]}}
     */
    static getNodeGUIInputs(node, script, world) {
        const nodeConstantInputs = this.getNodeGUIConstantInputs(node, script, world)
        const nodeInputs = node.getInputs()
        const nodeSource = this.getSourceNode(node, world)
        const inputs = nodeSource.getInputs()
        return {
            names: inputs.map(input => {
                const nodeInput = nodeConstantInputs.find(pInput => pInput.getAttrName() === input.getAttrName())
                return `${input.getAttrName()}${nodeInput ? ` = ${nodeInput.getAttrValue()}` : ''}`
            }),
            connections: inputs.map(input => !!node.getInputNodeAttached(input.getAttrName())),
            colors: inputs.map(input => this.getNodeGUISourceColor(script,
                nodeInputs.find(pNodeInput => pNodeInput.getTargetName() === input.getAttrName())))
        }
    }

    /**
     * @param {AScriptFunction} script
     * @param {NodeInput} nodeInput
     * @return {string}
     */
    static getNodeGUISourceColor(script, nodeInput) {
        if (nodeInput) {
            const sourceNode = script.findNodeById(nodeInput.getSourceNodeId())
            if (sourceNode) {
                const props = this.getNodeGUIProps(sourceNode.getType())
                return props.headColor
            }
        }
    }

    /**
     * @param {string} type
     * @return {boolean}
     */
    static hasBaseInput(type) {
        return type === NODE_TYPES.FUNCTION ||
            type === NODE_TYPES.LOOP ||
            type === NODE_TYPES.THEN ||
            type === NODE_TYPES.CONDITION ||
            type === NODE_TYPES.ANIMATION ||
            type === NODE_TYPES.REFERENCE ||
            type === NODE_TYPES.OUTPUT ||
            type === NODE_TYPES.SET_CLASS_VAR ||
            type === NODE_TYPES.SET_STATIC_CLASS_VAR
    }

    /**
     * @param {string} type
     * @return {boolean}
     */
    static hasBaseOutput(type) {
        return this.hasBaseInput(type) || type === NODE_TYPES.EVENT
    }

    /**
     * @param {ANode} node
     * @param {AScriptFunction} script
     * @return {boolean}
     */
    static isOutputConnected(node, script) {
        return script.getNodes().some(pNode => pNode.isResultAttachedTo(node))
    }

    /**
     * @param {ANode} node
     * @param {AScriptFunction} script
     * @return {boolean}
     */
    static isBaseOutputConnected(node, script) {
        return script.getNodes().some(pNode => pNode.isBaseAttachedTo(node))
    }

    /**
     * @param {AScriptFunction} script
     * @param {ANode} node
     * @return {string}
     */
    static getNodeGUIBaseInputColor(script, node) {
        const baseInput = node.getBaseInput()
        if (baseInput && node.isResultToBaseConnection(baseInput)) {
            return this.getNodeGUISourceColor(script, baseInput)
        }
    }
}