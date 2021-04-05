import {CONSTANTS} from '../StackRegister.js'

export default class PushProcessor {

    /**
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     */
    static run(stackOperation, stackRegister) {
        const args = stackOperation.getArgs()
        if(args.length !== 2){
            throw new TypeError(`Push: Inputs invalids (expected: 2, given: ${args.length})`)
        }
        const name = args[0]
        const value = args[1]
        if (!name) {
            throw new TypeError(`Push operation invalid (Name not provided)`)
        }
        if(value === CONSTANTS.RESULT){
            stackRegister.push(name, stackRegister.popRet())
        }else{
            stackRegister.push(name, value)
        }
    }

}