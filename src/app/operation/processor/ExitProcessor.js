import {CONSTANTS} from '../StackRegister.js'
import ClientError from '../../exception/type/ClientError.js'

export default class ExitProcessor {

    /**
     * @param {string} functionName
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     */
    static run(functionName, stackOperation, stackRegister) {
        const args = stackOperation.getArgs()
        if (args.length !== 1) {
            throw new ClientError(`Push: Inputs invalids (expected: 1, given: ${args.length})`)
        }
        const name = args[0]
        if (name === CONSTANTS.RESULT) {
            stackRegister.pushSignal(functionName, !stackRegister.popRet(functionName))
        } else {
            stackRegister.pushSignal(functionName, !stackRegister.pop(functionName, name))
        }
    }

}