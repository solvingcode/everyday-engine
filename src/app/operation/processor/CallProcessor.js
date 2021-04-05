import FunctionRegistry from '../../flow/function/FunctionRegistry.js'

export default class CallProcessor {

    /**
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     */
    static run(stackOperation, stackRegister) {
        const args = stackOperation.getArgs()
        const functionName = args && args[0]
        if (!functionName) {
            throw new TypeError(`Stack operation invalid (Function not provided)`)
        }
        const aFunction = FunctionRegistry.get().getFunction(functionName)
        if (!aFunction) {
            throw new TypeError(`Function "${functionName}" not founded in the registry`)
        }
        const inputNames = aFunction.getInputNames()
        inputNames.forEach(inputName => {
            const value = stackRegister.pop(inputName)
            if(value === null){
                throw new TypeError(`Function "${functionName}": Input name ${inputName} not provided`)
            }
            aFunction.setInputValue(inputName, value)
        })
        aFunction.execute()
        stackRegister.pushRet(aFunction.getOutputValue())
    }

}