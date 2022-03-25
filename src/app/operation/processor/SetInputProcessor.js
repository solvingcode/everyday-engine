import ClientError from '../../exception/type/ClientError.js'

export default class SetInputProcessor {

    /**
     * @param {string} functionName
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     * @param {FunctionRegistry} functionRegistry
     */
    static run(functionName, stackOperation, stackRegister, functionRegistry) {
        const args = stackOperation.getArgs()
        if (args.length !== 3) {
            throw new ClientError(`SetInput: Inputs invalids (expected: 3, given: ${args.length})`)
        }
        const abstractFunctionName = args[0]
        const sourceFunctionName = args[1]
        const attributeName = args[2]
        if(functionRegistry.getInstance(functionName)){
            stackRegister.push('', `[MEM]${sourceFunctionName}.${attributeName}`,
                stackRegister.pop('', `[MEM]${abstractFunctionName}.${attributeName}`))
        }
    }

}