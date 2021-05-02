import ClientError from '../../exception/type/ClientError.js'

export default class CallProcessor {

    /**
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     * @param {Registry} functionRegistry
     */
    static run(stackOperation, stackRegister, functionRegistry) {
        const args = stackOperation.getArgs()
        const functionName = args && args[0]
        if (!functionName) {
            throw new ClientError(`Stack operation invalid (Function not provided)`)
        }
        const aFunction = functionRegistry.getInstance(functionName)
        if (!aFunction) {
            throw new ClientError(`Function "${functionName}" not founded in the registry`)
        }
        const inputNames = aFunction.getInputNames()
        inputNames.forEach(inputName => {
            const value = stackRegister.pop(inputName)
            if(value === null){
                throw new ClientError(`Function "${functionName}": Input name ${inputName} not provided`)
            }
            aFunction.setInputValue(inputName, value)
        })
        aFunction.execute(functionRegistry)
        stackRegister.pushRet(aFunction.getOutputValue())
    }

}