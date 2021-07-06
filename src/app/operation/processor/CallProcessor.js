import ClientError from '../../exception/type/ClientError.js'
import DynamicAttributeHelper from '../../utils/DynamicAttributeHelper.js'

export default class CallProcessor {

    /**
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     * @param {FunctionRegistry} functionRegistry
     * @param {Unit} unit
     * @param {ScriptComponent} scriptComponent
     * @param {World} world
     */
    static run(stackOperation, stackRegister, functionRegistry, unit, scriptComponent, world) {
        const args = stackOperation.getArgs()
        const functionName = args && args[0]
        if (!functionName) {
            throw new ClientError(`Stack operation invalid (Function not provided)`)
        }
        const aFunction = functionRegistry.getInstance(functionName)
        if (!aFunction) {
            throw new ClientError(`Function "${functionName}" not founded in the registry`)
        }
        const inputs = aFunction.getInputs()
        inputs.forEach(input => {
            const inputName = input.getAttrName()
            const inputType = input.getAttrType()
            const value = stackRegister.pop(inputName)
            let inputValue = DynamicAttributeHelper.getValueByType(value, inputType, world)
            if (value === null) {
                throw new ClientError(`Function "${functionName}": Input name ${inputName} not provided`)
            }
            aFunction.setInputValue(inputName, inputValue)
        })
        aFunction.execute(functionRegistry, unit, scriptComponent, world)
        stackRegister.pushRet(aFunction.getOutputValue())
    }

}