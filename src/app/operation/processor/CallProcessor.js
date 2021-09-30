import ClientError from '../../exception/type/ClientError.js'
import DynamicAttributeHelper from '../../utils/DynamicAttributeHelper.js'

export default class CallProcessor {

    /**
     * @param {string} functionName
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     * @param {FunctionRegistry} functionRegistry
     * @param {Unit} unit
     * @param {ScriptComponent} scriptComponent
     * @param {World} world
     * @param {{camera: Camera, lights: Unit[], deltaTime: number}} executionContext
     */
    static run(functionName, stackOperation, stackRegister, functionRegistry,
               unit, scriptComponent, world, executionContext) {
        const args = stackOperation.getArgs()
        const calledFunctionName = args && args[0]
        if (!calledFunctionName) {
            throw new ClientError(`Stack operation invalid (Function not provided)`)
        }
        const aFunction = functionRegistry.getInstance(calledFunctionName)
        if (!aFunction) {
            throw new ClientError(`Function "${calledFunctionName}" not founded in the registry`)
        }
        const inputs = aFunction.getInputs()
        inputs.forEach(input => {
            const inputName = input.getAttrName()
            const inputType = input.getAttrType()
            const value = stackRegister.pop(functionName, inputName)
            let inputValue = DynamicAttributeHelper.getValueByType(value, inputType, world, unit, scriptComponent)
            if (value === null) {
                throw new ClientError(`Function "${calledFunctionName}": Input name ${inputName} not provided`)
            }
            aFunction.setInputValue(inputName, inputValue)
        })
        aFunction.execute(functionRegistry, unit, scriptComponent, world, executionContext)
        stackRegister.pushRet(functionName, aFunction.getOutputValue())
    }

}