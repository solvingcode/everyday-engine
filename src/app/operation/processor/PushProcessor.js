import ClientError from '../../exception/type/ClientError.js'

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
        if (stackRegister.isResult(value)) {
            stackRegister.push(functionName, name,
                stackRegister.isCustomResult(value) ? stackRegister.popCustomRet(functionName, value) :
                    stackRegister.popRet(functionName))
        } else if (stackRegister.isMemory(value)) {
            stackRegister.push(functionName, name, stackRegister.pop(functionName, value))
        } else {
            stackRegister.push(functionName, name, value)
        }
    }

}