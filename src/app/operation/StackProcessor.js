import StackOperation, {OPERATIONS} from './StackOperation.js'
import CallProcessor from './processor/CallProcessor.js'
import StackRegister from './StackRegister.js'
import PushProcessor from './processor/PushProcessor.js'
import ExitProcessor from './processor/ExitProcessor.js'
import SystemError from '../exception/type/SystemError.js'
import GetProcessor from './processor/GetProcessor.js'
import EventProcessor from './processor/EventProcessor.js'
import JumpProcessor from './processor/JumpProcessor.js'
import ClientError from '../exception/type/ClientError.js'
import SelfProcessor from './processor/SelfProcessor.js'
import SetProcessor from './processor/SetProcessor.js'

export default class StackProcessor {

    static instance

    /**
     * @type {StackRegister}
     */
    stackRegister

    constructor() {
        this.stackRegister = StackRegister.get()
    }

    /**
     * @param {string} functionName
     * @param {StackOperation[]} stack
     * @param {FunctionRegistry} functionRegistry
     * @param {Unit} unit
     * @param {ScriptComponent} scriptComponent
     * @param {World} world
     * @param {{camera: Camera, lights: Unit[], deltaTime: number, storage: Storage}} executionContext
     * @return {StackRegister}
     */
    run(functionName, stack, functionRegistry, unit, scriptComponent,
        world, executionContext) {

        let iStackOperation = 0
        while (iStackOperation < stack.length) {
            const stackOperation = stack[iStackOperation]

            if (this.stackRegister.popSignal(functionName)) {
                break
            }

            if (stackOperation instanceof StackOperation) {
                const operation = stackOperation.getOperation()
                switch (operation) {
                    case OPERATIONS.CALL:
                        CallProcessor.run(functionName, stackOperation, this.stackRegister, functionRegistry, unit, scriptComponent, world, executionContext)
                        break
                    case OPERATIONS.DISPATCH:
                        EventProcessor.run(stackOperation, this.stackRegister, functionRegistry, unit, scriptComponent, world, executionContext)
                        break
                    case OPERATIONS.GET:
                        GetProcessor.run(functionName, stackOperation, this.stackRegister, unit, scriptComponent)
                        break
                    case OPERATIONS.SET:
                        SetProcessor.run(functionName, stackOperation, this.stackRegister, unit, scriptComponent)
                        break
                    case OPERATIONS.SELF:
                        SelfProcessor.run(functionName, stackOperation, this.stackRegister, unit, scriptComponent)
                        break
                    case OPERATIONS.PUSH:
                        PushProcessor.run(functionName, stackOperation, this.stackRegister)
                        break
                    case OPERATIONS.EXIT:
                        ExitProcessor.run(functionName, stackOperation, this.stackRegister)
                        break
                    case OPERATIONS.JUMP:
                        JumpProcessor.run(functionName, stackOperation, this.stackRegister)
                        break
                    case OPERATIONS.JUMP_TO:
                        // No action needed
                        break
                    default:
                        throw new SystemError(`Stack operation ${operation} is not supported`)
                }
            } else {
                throw new SystemError(`Stack operation is not valid`)
            }

            const jumpTo = this.stackRegister.popJump(functionName)
            if (jumpTo) {
                const nextJumpToIndex = stack.findIndex((vStack) =>
                    vStack.getOperation() === OPERATIONS.JUMP_TO &&
                    vStack.getArgs()[0] === jumpTo
                )
                if (nextJumpToIndex >= 0) {
                    iStackOperation = nextJumpToIndex
                } else {
                    throw new ClientError(`No "JUMP TO" operation found for "${jumpTo}"`)
                }
            }

            iStackOperation++
        }
        return this.stackRegister
    }

    /**
     * @return {StackProcessor}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}