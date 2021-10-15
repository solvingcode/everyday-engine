import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import AEvent from '../event/AEvent.js'
import Compiler from './Compiler.js'
import ClassScript from '../ClassScript.js'
import AFunction from '../function/AFunction.js'
import ACondition from '../condition/ACondition.js'
import SystemError from '../../exception/type/SystemError.js'
import ClientError from '../../exception/type/ClientError.js'
import AAnimation from '../animation/AAnimation.js'
import NodeHelper from '../../utils/NodeHelper.js'
import AStackFunction from '../function/AStackFunction.js'
import ScriptHelper from '../../utils/ScriptHelper.js'
import OnAnyAnimationStartEvent from '../event/native/OnAnyAnimationStartEvent.js'
import StopAnimationFunction from '../function/native/animation/StopAnimationFunction.js'
import StartAnimationFunction from '../function/native/animation/StartAnimationFunction.js'
import GetCurrentAnimationFunction from '../function/native/animation/GetCurrentAnimationFunction.js'
import IsAnimationPlayingFunction from '../function/native/animation/IsAnimationPlayingFunction.js'
import NotFunction from '../function/native/basic/NotFunction.js'
import AReference from '../reference/AReference.js'
import ASelf from '../unit/ASelf.js'
import AToggleVariable from '../variable/AToggleVariable.js'
import ANativeFunction from '../function/native/ANativeFunction.js'
import ALoop from '../loop/ALoop.js'
import GetValueFunction from '../function/native/object/GetValueFunction.js'
import IsArrayEmptyFunction from '../function/native/array/IsArrayEmptyFunction.js'
import ACustomFunction from '../function/custom/ACustomFunction.js'
import FunctionInputNode from '../node/FunctionInputNode.js'
import FunctionOutputNode from '../node/FunctionOutputNode.js'
import AFunctionInput from '../io/AFunctionInput.js'
import AFunctionOutput from '../io/AFunctionOutput.js'
import DynamicAttribute from '../../pobject/DynamicAttribute.js'
import {TYPES} from '../../pobject/AttributeType.js'
import CallFunction from '../function/native/basic/CallFunction.js'
import AThen from '../promise/AThen.js'
import IsFunctionDefinedFunction from '../function/native/basic/IsFunctionDefinedFunction.js'
import Maths from '../../utils/Maths.js'
import AGetVariable from '../variable/AGetVariable.js'
import VariableNode from '../node/variable/VariableNode.js'

export default class ClassCompiler extends Compiler {

    /**
     * @override
     */
    run(script, world) {
        if (!(script instanceof ClassScript)) {
            throw new SystemError(`The given script is not correct (must be a Class script)`)
        }
        const functionRegistry = world.getFunctionRegistry()
        functionRegistry.removeInstancesByClass(script.getName())

        //clean and recreate function instance
        script.getFunctions().forEach(scriptFunction => {
            const scriptFunctionName = `${script.getName()}.${scriptFunction.getName()}`
            if (!scriptFunction.isMain()) {
                const nodeInputs = scriptFunction.findNodesByClass(FunctionInputNode)
                const nodeOutputs = scriptFunction.findNodesByClass(FunctionOutputNode)
                const functionInputs = [
                    new DynamicAttribute('unit', TYPES.UNIT),
                    ...nodeInputs.map(nodeInput => NodeHelper.getAttributeFromNodeFunctionInput(nodeInput, world))
                ]
                const functionOutput = !!nodeOutputs.length ? NodeHelper.getAttributeFromNodeFunctionOutput(nodeOutputs[0], world) : null
                const stackScriptFunction = new ACustomFunction(scriptFunctionName, functionInputs, functionOutput)
                stackScriptFunction.setAccess(scriptFunction.getAccess())
                stackScriptFunction.setClassName(script.getName())
                stackScriptFunction.setParentClassName(script.getParentName())
                stackScriptFunction.setStack([
                    new StackOperation(OPERATIONS.CALL, `${scriptFunctionName}.OnCall`)
                ])
                functionRegistry.tryRegister(stackScriptFunction)
            }
        })

        //compile stack function
        script.getFunctions().forEach(scriptFunction => {
            const nodes = scriptFunction.getNodes()
            nodes.forEach((node) => {
                const element = NodeHelper.getSourceNode(node, world)
                if (!element) {
                    throw new ClientError(`Class Compiler Error: cannot find function ${node.getSourceName()}`)
                }
                if (!functionRegistry.getInstance(element.getName()) && !(element instanceof AStackFunction)) {
                    throw new ClientError(`Class Compiler Error: function ${node.getSourceName()} not a registered function nor stack function`)
                }
                const stackFunction = ScriptHelper.createStackFunction(script, scriptFunction, node, world)
                if (element.getOutput()) {
                    stackFunction.addOutput(element.getOutput().getAttrType())
                }
                functionRegistry.tryRegister(stackFunction)
            })
        })

        script.getFunctions().forEach(scriptFunction => {
            const nodes = scriptFunction.getNodes()
            const scriptFunctionName = `${script.getName()}.${scriptFunction.getName()}`

            //compile associations
            scriptFunction.getInputs().forEach(input => {
                const node = scriptFunction.findNodeById(input.getNodeId())
                const functionName = ScriptHelper.generateFunctionName(script, scriptFunction, node, world)
                const element = NodeHelper.getSourceNode(node, world)
                const sourceNode = scriptFunction.findNodeById(input.getSourceNodeId())
                const targetName = input.getTargetName()
                const stackFunction = functionRegistry.getInstance(functionName)
                if (sourceNode) {
                    const sourceElement = NodeHelper.getSourceNode(sourceNode, world)
                    const sourceElementName = ScriptHelper.generateFunctionName(script, scriptFunction, sourceNode, world)
                    const sourceStackFunction = functionRegistry.getInstance(sourceElementName)
                    if (sourceElement instanceof AEvent) {
                        //Nothing to do
                    } else if (sourceElement instanceof AGetVariable) {
                        NodeHelper.validateResultToInputConnection(node, input)
                        const variableExists = script.getMainFunction().findNodeByNameClass(sourceElement.getName(), VariableNode)
                        if (!variableExists) {
                            throw new ClientError(`Variable ${sourceElement.getName()} not defined`)
                        }
                        const targetInput = element.findInputByName(targetName)
                        stackFunction.getStack().push(...[
                            new StackOperation(OPERATIONS.GET, sourceNode.getSourceName())
                        ])
                        if (element instanceof ACustomFunction) {
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH,
                                    `[MEM]${element.getName()}.${targetInput.getAttrName()}`, CONSTANTS.RESULT)
                            ])
                        } else {
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT)
                            ])
                        }
                        if (sourceElement instanceof AToggleVariable) {
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, ''),
                                new StackOperation(OPERATIONS.SET, sourceNode.getSourceName())
                            ])
                        }
                    } else if (sourceElement instanceof ASelf) {
                        NodeHelper.validateResultToInputConnection(node, input)
                        const targetInput = element.findInputByName(targetName)
                        stackFunction.getStack().push(...[
                            new StackOperation(OPERATIONS.SELF, `${targetInput.getAttrType()}`)
                        ])
                        if (element instanceof ACustomFunction) {
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH,
                                    `[MEM]${element.getName()}.${targetInput.getAttrName()}`, CONSTANTS.RESULT)
                            ])
                        } else {
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT)
                            ])
                        }
                    } else if (sourceElement instanceof AAnimation) {
                        NodeHelper.validateResultToInputConnection(node, input)
                        if (element instanceof ANativeFunction) {
                            const targetInput = element.findInputByName(targetName)
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), sourceElement.getName())
                            ])
                        }
                    } else if (sourceElement instanceof ALoop) {
                        if (node.isResultToInputConnection(input)) {
                            const targetInput = NodeHelper.validateTargetInput(node, input, world)
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), '[MEM]attributes')
                            ])
                        }
                    } else if (sourceElement instanceof AThen) {
                        if (node.isResultToInputConnection(input)) {
                            const targetInput = NodeHelper.validateTargetInput(node, input, world)
                            if (element instanceof ACustomFunction) {
                                stackFunction.getStack().push(...[
                                    new StackOperation(OPERATIONS.PUSH, `[MEM]${element.getName()}.${targetInput.getAttrName()}`, `[MEM]${sourceStackFunction.getName()}.promise.then`)
                                ])
                            } else {
                                stackFunction.getStack().push(...[
                                    new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), `[MEM]${sourceStackFunction.getName()}.promise.then`)
                                ])
                            }
                        }
                    } else if (sourceElement instanceof AFunctionInput) {
                        NodeHelper.validateResultToInputConnection(node, input)
                        const targetInput = element.findInputByName(targetName)
                        if (targetInput) {
                            const attribute = NodeHelper.getAttributeFromNodeFunctionInput(sourceNode, world)
                            const jumpTo = `set_input_${attribute.getAttrName()}${Maths.generateId()}`
                            const parentClassNames = ScriptHelper.getParentClassNames(world, script).reverse()
                            if (parentClassNames.length > 0) {
                                const isFunctionDefinedFunction = new IsFunctionDefinedFunction()
                                parentClassNames.forEach(parentClassName => {
                                    const scriptFunctionAbstractName = `${parentClassName}.${scriptFunction.getName()}`
                                    stackFunction.getStack().push(...[
                                        new StackOperation(OPERATIONS.PUSH, 'functionName', scriptFunctionAbstractName),
                                        new StackOperation(OPERATIONS.CALL, isFunctionDefinedFunction.getName()),
                                        new StackOperation(OPERATIONS.JUMP, CONSTANTS.RESULT, jumpTo),
                                        new StackOperation(OPERATIONS.PUSH,
                                            `[MEM]${scriptFunctionName}.${attribute.getAttrName()}`,
                                            `[MEM]${scriptFunctionAbstractName}.${attribute.getAttrName()}`)
                                    ])
                                })
                            }
                            if (element instanceof ACustomFunction) {
                                stackFunction.getStack().push(...[
                                    new StackOperation(OPERATIONS.JUMP_TO, jumpTo),
                                    new StackOperation(OPERATIONS.PUSH,
                                        `[MEM]${element.getName()}.${targetInput.getAttrName()}`,
                                        `[MEM]${scriptFunctionName}.${attribute.getAttrName()}`)
                                ])
                            } else {
                                stackFunction.getStack().push(...[
                                    new StackOperation(OPERATIONS.JUMP_TO, jumpTo),
                                    new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(),
                                        `[MEM]${scriptFunctionName}.${attribute.getAttrName()}`)
                                ])
                            }
                        }
                    } else if (sourceElement instanceof ACustomFunction) {
                        if (node.isResultToInputConnection(input)) {
                            const targetInput = NodeHelper.validateTargetInput(node, input, world)
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.CALL, sourceElementName)
                            ])
                            if (element instanceof ACustomFunction) {
                                stackFunction.getStack().push(...[
                                    new StackOperation(OPERATIONS.PUSH, `[MEM]${element.getName()}.${targetInput.getAttrName()}`,
                                        `[MEM]${sourceElement.getName()}.${CONSTANTS.RESULT}`)
                                ])
                            } else {
                                stackFunction.getStack().push(...[
                                    new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(),
                                        `[MEM]${sourceElement.getName()}.${CONSTANTS.RESULT}`)
                                ])
                            }
                        }
                    }
                    // must be the last condition
                    else if (sourceElement instanceof AFunction) {
                        const targetInput = element.findInputByName(targetName)
                        if (targetInput) {
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.CALL, sourceElementName)
                            ])
                            if (element instanceof ACustomFunction) {
                                NodeHelper.validateResultToInputOrOrderConnection(node, input)
                                stackFunction.getStack().push(...[
                                    new StackOperation(OPERATIONS.PUSH,
                                        `[MEM]${element.getName()}.${targetInput.getAttrName()}`, CONSTANTS.RESULT)
                                ])
                            } else {
                                stackFunction.getStack().push(...[
                                    new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT)
                                ])
                            }
                        }
                    } else if (sourceElement) {
                        throw new SystemError(`Class compiler: ${sourceElement.constructor.name} not supported`)
                    }
                }
            })

            //complete compiling function
            nodes.forEach((node) => {
                const element = NodeHelper.getSourceNode(node, world)
                const functionName = ScriptHelper.generateFunctionName(script, scriptFunction, node, world)
                const stackFunction = functionRegistry.getInstance(functionName)
                if (!(element instanceof AEvent)) {
                    if (functionRegistry.getInstance(element.getName())) {
                        if (element instanceof ALoop) {
                            const isArrayEmpty = new IsArrayEmptyFunction()
                            const not = new NotFunction()
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH, '[MEM]array', CONSTANTS.RESULT),
                                new StackOperation(OPERATIONS.PUSH, 'array', CONSTANTS.RESULT),
                                new StackOperation(OPERATIONS.CALL, isArrayEmpty.getName()),
                                new StackOperation(OPERATIONS.PUSH, not.getInputs()[0].getAttrName(), CONSTANTS.RESULT),
                                new StackOperation(OPERATIONS.CALL, not.getName()),
                                new StackOperation(OPERATIONS.EXIT, CONSTANTS.RESULT),
                                new StackOperation(OPERATIONS.PUSH, 'index', '0'),
                                new StackOperation(OPERATIONS.JUMP_TO, 'start_loop'),
                                new StackOperation(OPERATIONS.PUSH, 'array', '[MEM]array'),
                                new StackOperation(OPERATIONS.CALL, element.getName()),
                                new StackOperation(OPERATIONS.PUSH, '[MEM]attributes', CONSTANTS.RESULT)
                            ])
                        } else if (element instanceof AThen) {
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH, `${functionName}.promise`, CONSTANTS.RESULT)
                            ])
                        } else if (element instanceof ACustomFunction) {
                            const callFunction = new CallFunction()
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH, 'unit', `[MEM]${element.getName()}.unit`),
                                new StackOperation(OPERATIONS.PUSH, 'function', element.getName()),
                                new StackOperation(OPERATIONS.CALL, callFunction.getName())
                            ])
                        } else {
                            stackFunction.getStack().push(new StackOperation(OPERATIONS.CALL, element.getName()))
                        }
                    } else if (element instanceof AAnimation) {
                        const onAnyAnimation = new OnAnyAnimationStartEvent()
                        const isAnimationPlaying = new IsAnimationPlayingFunction()
                        const startAnimation = new StartAnimationFunction()
                        const not = new NotFunction()
                        stackFunction.getStack().push(...[
                            new StackOperation(OPERATIONS.PUSH, isAnimationPlaying.getInputs()[0].getAttrName(), element.getName()),
                            new StackOperation(OPERATIONS.CALL, isAnimationPlaying.getName()),
                            new StackOperation(OPERATIONS.PUSH, not.getInputs()[0].getAttrName(), CONSTANTS.RESULT),
                            new StackOperation(OPERATIONS.CALL, not.getName()),
                            new StackOperation(OPERATIONS.JUMP, CONSTANTS.RESULT, 'start_animation'),
                            new StackOperation(OPERATIONS.PUSH, startAnimation.getInputs()[0].getAttrName(), element.getName()),
                            new StackOperation(OPERATIONS.CALL, startAnimation.getName()),
                            new StackOperation(OPERATIONS.JUMP_TO, 'start_animation')
                        ])
                        if (!ScriptHelper.isNodeHasPredecessor(scriptFunction, node, onAnyAnimation.getName())) {
                            stackFunction.getStack().push(new StackOperation(OPERATIONS.DISPATCH, onAnyAnimation.getName()))
                        }
                    } else if (element instanceof AStackFunction) {
                        stackFunction.getStack().push(...element.getStack())
                    }
                    if (element instanceof ACondition) {
                        stackFunction.getStack().push(new StackOperation(OPERATIONS.JUMP, CONSTANTS.RESULT, `end_condition_${functionName}`))
                    }
                }
            })

            //complete compiling associations
            scriptFunction.getInputs().forEach(input => {
                const node = scriptFunction.findNodeById(input.getNodeId())
                const element = NodeHelper.getSourceNode(node, world)
                const functionName = ScriptHelper.generateFunctionName(script, scriptFunction, node, world)
                const sourceNode = scriptFunction.findNodeById(input.getSourceNodeId())
                if (sourceNode) {
                    const sourceElement = NodeHelper.getSourceNode(sourceNode, world)
                    const sourceElementName = ScriptHelper.generateFunctionName(script, scriptFunction, sourceNode, world)
                    const sourceStackFunction = functionRegistry.getInstance(sourceElementName)
                    if (element instanceof AFunctionOutput) {
                        NodeHelper.validateResultToBaseConnection(node, input)
                        sourceStackFunction.getStack().push(...[
                            new StackOperation(OPERATIONS.PUSH,
                                `[MEM]${scriptFunctionName}.${CONSTANTS.RESULT}`, CONSTANTS.RESULT)
                        ])
                    } else if (element instanceof AThen) {
                        NodeHelper.validateResultToBaseConnection(node, input)
                        if (sourceElement instanceof ACustomFunction) {
                            sourceStackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT,
                                    `[MEM]${sourceElement.getName()}.${CONSTANTS.RESULT}`)
                            ])
                        }
                        sourceStackFunction.getStack().push(...[
                            new StackOperation(OPERATIONS.CALL, functionName)
                        ])
                    } else if (sourceElement instanceof AAnimation) {
                        NodeHelper.validateOrderConnection(node, input)
                        if (element instanceof AAnimation) {
                            const stopAnimation = new StopAnimationFunction()
                            sourceStackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.CALL, stopAnimation.getName()),
                                new StackOperation(OPERATIONS.CALL, functionName)
                            ])
                        } else if (element instanceof ACondition) {
                            sourceStackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.CALL, functionName)
                            ])
                        }
                    } else if (sourceElement instanceof ACondition) {
                        if (node.isResultToBaseConnection(input)) {
                            if (element instanceof AAnimation || element instanceof AReference) {
                                const getCurrentAnimation = new GetCurrentAnimationFunction()
                                const stopAnimation = new StopAnimationFunction()
                                sourceStackFunction.getStack().push(...[
                                    new StackOperation(OPERATIONS.CALL, getCurrentAnimation.getName()),
                                    new StackOperation(OPERATIONS.CALL, stopAnimation.getName()),
                                    new StackOperation(OPERATIONS.CALL, functionName)
                                ])
                            } else {
                                sourceStackFunction.getStack().push(...[
                                    new StackOperation(OPERATIONS.CALL, functionName),
                                    new StackOperation(OPERATIONS.JUMP_TO, `end_condition_${sourceStackFunction.getName()}`)
                                ])
                            }
                        }
                    } else if (sourceElement instanceof ALoop) {
                        if (node.isOrderConnection(input)) {
                            const getValueFunction = new GetValueFunction()
                            sourceStackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.CALL, functionName),
                                new StackOperation(OPERATIONS.PUSH, 'attributes', '[MEM]attributes'),
                                new StackOperation(OPERATIONS.PUSH, 'name', 'index'),
                                new StackOperation(OPERATIONS.CALL, getValueFunction.getName()),
                                new StackOperation(OPERATIONS.PUSH, 'attributes', '[MEM]attributes'),
                                new StackOperation(OPERATIONS.PUSH, 'index', CONSTANTS.RESULT),
                                new StackOperation(OPERATIONS.PUSH, 'name', 'ended'),
                                new StackOperation(OPERATIONS.CALL, getValueFunction.getName()),
                                new StackOperation(OPERATIONS.JUMP, CONSTANTS.RESULT, 'start_loop')
                            ])
                        }
                    } else if (sourceElement instanceof AThen) {
                        if (node.isOrderConnection(input)) {
                            sourceStackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.THEN, functionName)
                            ])
                        }
                    }
                    // must be the last condition
                    else if (sourceElement instanceof AFunction) {
                        if (node.isOrderConnection(input)) {
                            sourceStackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.CALL, functionName)
                            ])
                        }
                    }
                }
            })

            //complete compiling associations
            scriptFunction.getInputs().forEach(input => {
                const node = scriptFunction.findNodeById(input.getNodeId())
                const functionName = ScriptHelper.generateFunctionName(script, scriptFunction, node, world)
                const sourceNode = scriptFunction.findNodeById(input.getSourceNodeId())
                const sourceElement = NodeHelper.getSourceNode(sourceNode, world)
                if (sourceNode) {
                    const sourceElementName = ScriptHelper.generateFunctionName(script, scriptFunction, sourceNode, world)
                    const sourceStackFunction = functionRegistry.getInstance(sourceElementName)
                    if (node.isOrderConnection(input)) {
                        if (sourceElement instanceof ACondition) {
                            sourceStackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.CALL, functionName)
                            ])
                        }
                    }
                }
            })

        })

        return true
    }

}