import {CONSTANTS} from '../StackRegister.js'

export default class ExitProcessor {

    /**
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     */
    static run(stackOperation, stackRegister) {
        const args = stackOperation.getArgs()
        if(args.length !== 1){
            throw new TypeError(`Push: Inputs invalids (expected: 1, given: ${args.length})`)
        }
        const name = args[0]
        if(name === CONSTANTS.RESULT){
            stackRegister.pushSignal(!stackRegister.popRet())
        }else{
            stackRegister.pushSignal(!stackRegister.pop(name))
        }
    }

}