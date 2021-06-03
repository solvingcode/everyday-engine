import StackOperation, {OPERATIONS} from './StackOperation.js'
import CallProcessor from './processor/CallProcessor.js'
import StackRegister from './StackRegister.js'
import PushProcessor from './processor/PushProcessor.js'
import ExitProcessor from './processor/ExitProcessor.js'
import SystemError from '../exception/type/SystemError.js'

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
     * @param {*} namespace
     * @return {StackRegister}
     */
    run(stack, functionRegistry, namespace){
        for(const iStackOperation in stack){
            const stackOperation = stack[iStackOperation]
            if(this.stackRegister.popSignal()){
                break
            }
            if(stackOperation instanceof StackOperation){
                const operation = stackOperation.getOperation()
                switch (operation) {
                    case OPERATIONS.CALL:
                        CallProcessor.run(stackOperation, this.stackRegister, functionRegistry, namespace)
                        break
                    case OPERATIONS.PUSH:
                        PushProcessor.run(stackOperation, this.stackRegister)
                        break
                    case OPERATIONS.EXIT:
                        ExitProcessor.run(stackOperation, this.stackRegister)
                        break
                    default:
                        throw new SystemError(`Stack operation ${operation} is not supported`)
                }
            }else{
                throw new SystemError(`Stack operation is not valid`)
            }
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