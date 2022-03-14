import ClientError from '../../exception/type/ClientError.js'
import StackRegistryHelper from '../../utils/StackRegistryHelper.js'

export default class PushProcessor {

    /**
     * @param {string} functionName
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     */
    static run(functionName, stackOperation, stackRegister) {
        const args = stackOperation.getArgs()
        if (args.length !== 2) {
            throw new ClientError(`Push: Inputs invalids (expected: 2, given: ${args.length})`)
        }
        const name = args[0]
        const value = args[1]
        if (!name) {
            throw new ClientError(`Push operation invalid (Name not provided)`)
        }
        if (StackRegistryHelper.isResult(value)) {
            stackRegister.push(functionName, name,
                StackRegistryHelper.isCustomResult(value) ? stackRegister.popCustomRet(functionName, value) :
                    stackRegister.popRet(functionName))
        } else if (StackRegistryHelper.isMemory(value)) {
            stackRegister.push(functionName, name, stackRegister.pop(functionName, value))
        } else {
            stackRegister.push(functionName, name, value)
        }
    }

}