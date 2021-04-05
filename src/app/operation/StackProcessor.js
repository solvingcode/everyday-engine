import StackOperation, {OPERATIONS} from './StackOperation.js'
import CallProcessor from './processor/CallProcessor.js'
import StackRegister from './StackRegister.js'
import PushProcessor from './processor/PushProcessor.js'

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
     * @return {StackRegister}
     */
    run(stack){
        stack.forEach(stackOperation => {
            if(stackOperation instanceof StackOperation){
                const operation = stackOperation.getOperation()
                switch (operation) {
                    case OPERATIONS.CALL:
                        CallProcessor.run(stackOperation, this.stackRegister)
                        break
                    case OPERATIONS.PUSH:
                        PushProcessor.run(stackOperation, this.stackRegister)
                        break
                    default:
                        throw new TypeError(`Stack operation ${operation} is not supported`)
                }
            }else{
                throw new TypeError(`Stack operation is not valid`)
            }
        })
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