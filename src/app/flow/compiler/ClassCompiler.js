import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import AEvent from '../event/AEvent.js'
import Compiler from './Compiler.js'
import ClassScript from '../ClassScript.js'
import AFunction from '../function/AFunction.js'
import World from '../../world/World.js'
import ACondition from '../condition/ACondition.js'
import SystemError from '../../exception/type/SystemError.js'
import ClientError from '../../exception/type/ClientError.js'
import AVariable from '../variable/AVariable.js'
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

export default class ClassCompiler extends Compiler {

    /**
     * @override
     */
    run(script) {
        if (!(script instanceof ClassScript)) {
            throw new SystemError(`The given script is not correct (must be a Class script)`)
        }
        const world = World.get()
        const functionRegistry = world.getFunctionRegistry()
        script.getFunctions().forEach(scriptFunction => {
            const nodes = scriptFunction.getNodes()
            const scriptFunctionName = `${script.getName()}.${scriptFunction.getName()}`
            functionRegistry.removeInstancesByClass(scriptFunctionName)

            //compile stack function
            nodes.forEach((node) => {
                const element = NodeHelper.getSourceNode(node)
                if (!element) {
                    throw new ClientError(`Class Compiler Error: cannot find function ${node.getSourceName()}`)
                }
                if (!functionRegistry.getInstance(element.getName()) && !(element instanceof AStackFunction)) {
                    throw new ClientError(`Class Compiler Error: function ${node.getSourceName()} not a registered function nor stack function`)
                }
                const stackFunction = ScriptHelper.createStackFunction(script, scriptFunction, node)
                if (element.getOutput()) {
                    stackFunction.addOutput(element.getOutput().getAttrType())
                }
                functionRegistry.tryRegister(stackFunction)
            })

            //compile associations
            scriptFunction.getInputs().forEach(input => {
                const node = scriptFunction.findNodeById(input.getNodeId())
                const functionName = ScriptHelper.generateFunctionName(script, scriptFunction, node)
                const element = NodeHelper.getSourceNode(node)
                const sourceNode = scriptFunction.findNodeById(input.getSourceNodeId())
                const targetName = input.getTargetName()
                const stackFunction = functionRegistry.getInstance(functionName)
                if (sourceNode) {
                    const sourceElement = NodeHelper.getSourceNode(sourceNode)
                    const sourceElementName = ScriptHelper.generateFunctionName(script, scriptFunction, sourceNode)
                    const sourceStackFunction = functionRegistry.getInstance(sourceElementName)
                    if (sourceElement instanceof AEvent) {
                        sourceStackFunction.getStack().push(...[new StackOperation(OPERATIONS.CALL, functionName)])
                    } else if (sourceElement instanceof AVariable) {
                        const targetInput = element.findInputByName(targetName)
                        stackFunction.getStack().push(...[
                            new StackOperation(OPERATIONS.GET, sourceNode.getSourceName()),
                            new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT)
                        ])
                        if (sourceElement instanceof AToggleVariable) {
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, ''),
                                new StackOperation(OPERATIONS.SET, sourceNode.getSourceName())
                            ])
                        }
                    } else if (sourceElement instanceof ASelf) {
                        const targetInput = element.findInputByName(targetName)
                        stackFunction.getStack().push(...[
                            new StackOperation(OPERATIONS.SELF, `${targetInput.getAttrType()}`),
                            new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT)
                        ])
                    } else if (sourceElement instanceof AAnimation) {
                        if (element instanceof ANativeFunction) {
                            const targetInput = element.findInputByName(targetName)
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), sourceElement.getName())
                            ])
                        }
                    } else if (sourceElement instanceof ALoop) {
                        const targetInput = element.findInputByName(targetName)
                        if (targetInput) {
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), '[MEM]attributes')
                            ])
                        }
                    }
                    // must be the last condition
                    else if (sourceElement instanceof AFunction) {
                        const targetInput = element.findInputByName(targetName)
                        if (targetInput) {
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.CALL, sourceElementName),
                                new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT)
                            ])
                        }
                    } else if (sourceElement) {
                        throw new SystemError(`Class compiler: ${sourceElement.constructor.name} not supported`)
                    }
                }
            })

            //complete compiling function
            nodes.forEach((node) => {
                const element = NodeHelper.getSourceNode(node)
                const functionName = ScriptHelper.generateFunctionName(script, scriptFunction, node)
                const stackFunction = functionRegistry.getInstance(functionName)
                if (!(element instanceof AEvent)) {
                    if (functionRegistry.getInstance(element.getName())) {
                        if (element instanceof ALoop) {
                            const isArrayEmpty = new IsArrayEmptyFunction()
                            stackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH, '[MEM]array', CONSTANTS.RESULT),
                                new StackOperation(OPERATIONS.PUSH, 'array', CONSTANTS.RESULT),
                                new StackOperation(OPERATIONS.CALL, isArrayEmpty.getName()),
                                new StackOperation(OPERATIONS.EXIT, CONSTANTS.RESULT),
                                new StackOperation(OPERATIONS.PUSH, 'index', '0'),
                                new StackOperation(OPERATIONS.JUMP_TO, 'start_loop'),
                                new StackOperation(OPERATIONS.PUSH, 'array', '[MEM]array'),
                                new StackOperation(OPERATIONS.CALL, element.getName()),
                                new StackOperation(OPERATIONS.PUSH, '[MEM]attributes', CONSTANTS.RESULT)
                            ])
                        }else{
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
                        stackFunction.getStack().push(new StackOperation(OPERATIONS.EXIT, CONSTANTS.RESULT))
                    }
                }
            })

            //complete compiling associations
            scriptFunction.getInputs().forEach(input => {
                const node = scriptFunction.findNodeById(input.getNodeId())
                const element = NodeHelper.getSourceNode(node)
                const functionName = ScriptHelper.generateFunctionName(script, scriptFunction, node)
                const sourceNode = scriptFunction.findNodeById(input.getSourceNodeId())
                const targetName = input.getTargetName()
                if (sourceNode) {
                    const sourceElement = NodeHelper.getSourceNode(sourceNode)
                    const sourceElementName = ScriptHelper.generateFunctionName(script, scriptFunction, sourceNode)
                    const sourceStackFunction = functionRegistry.getInstance(sourceElementName)
                    if (sourceElement instanceof AAnimation) {
                        if (element instanceof AAnimation) {
                            const stopAnimation = new StopAnimationFunction()
                            sourceStackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.PUSH, stopAnimation.getInputs()[0].getAttrName(), sourceElement.getName()),
                                new StackOperation(OPERATIONS.CALL, stopAnimation.getName()),
                                new StackOperation(OPERATIONS.CALL, functionName)
                            ])
                        } else if (element instanceof ACondition) {
                            sourceStackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.CALL, functionName)
                            ])
                        }
                    } else if (sourceElement instanceof ACondition) {
                        if (element instanceof AAnimation || element instanceof AReference) {
                            const getCurrentAnimation = new GetCurrentAnimationFunction()
                            const stopAnimation = new StopAnimationFunction()
                            sourceStackFunction.getStack().push(...[
                                new StackOperation(OPERATIONS.CALL, getCurrentAnimation.getName()),
                                new StackOperation(OPERATIONS.PUSH, stopAnimation.getInputs()[0].getAttrName(), CONSTANTS.RESULT),
                                new StackOperation(OPERATIONS.CALL, stopAnimation.getName()),
                                new StackOperation(OPERATIONS.CALL, functionName)
                            ])
                        } else {
                            sourceStackFunction.getStack().push(...[new StackOperation(OPERATIONS.CALL, functionName)])
                        }
                    } else if (sourceElement instanceof ALoop) {
                        const getValueFunction = new GetValueFunction()
                        const targetInput = element.findInputByName(targetName)
                        if (!targetInput) {
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
                    }
                }
            })
        })

        return true
    }

}