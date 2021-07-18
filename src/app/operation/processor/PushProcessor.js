import {CONSTANTS} from '../StackRegister.js'
import ClientError from '../../exception/type/ClientError.js'

export default class PushProcessor {

    /**
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     */
    static run(stackOperation, stackRegister) {
        const args = stackOperation.getArgs()
        if (args.length !== 2) {
            throw new ClientError(`Push: Inputs invalids (expected: 2, given: ${args.length})`)
        }
        const name = args[0]
        const value = args[1]
        if (!name) {
            throw new ClientError(`Push operation invalid (Name not provided)`)
        }
        if (value === CONSTANTS.RESULT) {
            stackRegister.push(name, stackRegister.popRet())
        } else if (stackRegister.isMemory(value)) {
            stackRegister.push(name, stackRegister.pop(value))
        } else {
            stackRegister.push(name, value)
        }
    }

}