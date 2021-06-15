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

export default class ClassCompiler extends Compiler {

    /**
     * @override
     */
    run(script) {
        if (!(script instanceof ClassScript)) {
            throw new SystemError(`The given script is not correct (must be a Class script)`)
        }
        const nodes = script.getNodes()
        const world = World.get()
        const functionRegistry = world.getFunctionRegistry()
        functionRegistry.removeInstancesByClass(script.getName())

        //compile stack function
        nodes.forEach((node) => {
            const element = NodeHelper.getSourceNode(node)
            if (!element) {
                throw new ClientError(`Class Compiler Error: cannot find function ${node.getSourceName()}`)
            }
            if (!functionRegistry.getInstance(element.getName()) && !(element instanceof AStackFunction)) {
                throw new ClientError(`Class Compiler Error: function ${node.getSourceName()} not a registered function nor stack function`)
            }
            const stackFunction = ScriptHelper.createFunction(script, node)
            if (element.getOutput()) {
                stackFunction.addOutput(element.getOutput().getAttrType())
            }
            functionRegistry.tryRegister(stackFunction)
        })

        //compile associations
        script.getInputs().forEach(input => {
            const node = script.findNodeById(input.getNodeId())
            const functionName = ScriptHelper.generateFunctionName(script, node)
            const element = NodeHelper.getSourceNode(node)
            const sourceNode = script.findNodeById(input.getSourceNodeId())
            const targetName = input.getTargetName()
            const stackFunction = functionRegistry.getInstance(functionName)
            if (sourceNode) {
                const sourceElement = NodeHelper.getSourceNode(sourceNode)
                const sourceElementName = ScriptHelper.generateFunctionName(script, sourceNode)
                const sourceStackFunction = functionRegistry.getInstance(sourceElementName)
                if (sourceElement instanceof AEvent) {
                    sourceStackFunction.getStack().push(...[new StackOperation(OPERATIONS.CALL, functionName)])
                } else if (sourceElement instanceof AVariable) {
                    const targetInput = element.findInputByName(targetName)
                    stackFunction.getStack().push(...[
                        new StackOperation(OPERATIONS.VAR, sourceNode.getSourceName()),
                        new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT)
                    ])
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
            const functionName = ScriptHelper.generateFunctionName(script, node)
            const stackFunction = functionRegistry.getInstance(functionName)
            if (!(element instanceof AEvent)) {
                if (functionRegistry.getInstance(element.getName())) {
                    stackFunction.getStack().push(new StackOperation(OPERATIONS.CALL, element.getName()))
                } else if (element instanceof AStackFunction) {
                    stackFunction.getStack().push(...element.getStack())
                }
                if (element instanceof ACondition) {
                    stackFunction.getStack().push(new StackOperation(OPERATIONS.EXIT, CONSTANTS.RESULT))
                } else if (element instanceof AAnimation) {
                    const onAnyAnimation = new OnAnyAnimationStartEvent().getName()
                    if (!ScriptHelper.isNodeHasPredecessor(script, node, onAnyAnimation)) {
                        stackFunction.getStack().push(new StackOperation(OPERATIONS.DISPATCH, onAnyAnimation))
                    }
                }
            }
        })

        //complete compiling associations
        script.getInputs().forEach(input => {
            const node = script.findNodeById(input.getNodeId())
            const functionName = ScriptHelper.generateFunctionName(script, node)
            const sourceNode = script.findNodeById(input.getSourceNodeId())
            if (sourceNode) {
                const sourceElement = NodeHelper.getSourceNode(sourceNode)
                const sourceElementName = ScriptHelper.generateFunctionName(script, sourceNode)
                const sourceStackFunction = functionRegistry.getInstance(sourceElementName)
                if (sourceElement instanceof ACondition || sourceElement instanceof AAnimation) {
                    sourceStackFunction.getStack().push(...[new StackOperation(OPERATIONS.CALL, functionName)])
                }
            }
        })

        return true
    }

}