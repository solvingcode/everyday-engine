import StackOperation, {OPERATIONS} from './StackOperation.js'
import CallProcessor from './processor/CallProcessor.js'
import StackRegister from './StackRegister.js'
import PushProcessor from './processor/PushProcessor.js'
import ExitProcessor from './processor/ExitProcessor.js'
import SystemError from '../exception/type/SystemError.js'
import VarProcessor from './processor/VarProcessor.js'
import EventProcessor from './processor/EventProcessor.js'

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
     * @param {StackOperation[]} stack
     * @param {FunctionRegistry} functionRegistry
     * @param {Unit} unit
     * @param {ScriptComponent} scriptComponent
     * @param {World} world
     * @return {StackRegister}
     */
    run(stack, functionRegistry, unit, scriptComponent, world) {

        let iStackOperation = 0
        while (iStackOperation < stack.length){
            const stackOperation = stack[iStackOperation]

            if (stackOperation instanceof StackOperation) {
                const operation = stackOperation.getOperation()
                switch (operation) {
                    case OPERATIONS.CALL:
                        CallProcessor.run(stackOperation, this.stackRegister, functionRegistry, unit, scriptComponent, world)
                        break
                    case OPERATIONS.DISPATCH:
                        EventProcessor.run(stackOperation, this.stackRegister, functionRegistry, unit, scriptComponent, world)
                        break
                    case OPERATIONS.VAR:
                        VarProcessor.run(stackOperation, this.stackRegister, unit, scriptComponent)
                        break
                    case OPERATIONS.PUSH:
                        PushProcessor.run(stackOperation, this.stackRegister)
                        break
                    case OPERATIONS.EXIT:
                        ExitProcessor.run(stackOperation, this.stackRegister)
                        break
                    case OPERATIONS.END_EXIT:
                        // No action needed
                        break
                    default:
                        throw new SystemError(`Stack operation ${operation} is not supported`)
                }
            } else {
                throw new SystemError(`Stack operation is not valid`)
            }

            if (this.stackRegister.popSignal()) {
                const nextEndExistIndex = stack.findIndex((vStack, iStack) =>
                    iStack > iStackOperation &&
                    vStack.getOperation() === OPERATIONS.END_EXIT
                )
                if (nextEndExistIndex >= 0) {
                    iStackOperation = nextEndExistIndex
                }else{
                    break
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