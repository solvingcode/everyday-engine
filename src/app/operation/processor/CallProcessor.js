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
     * @param {{camera: Camera, lights: Unit[], deltaTime: number, storage: Storage}} executionContext
     */
    static run(functionName, stackOperation, stackRegister, functionRegistry,
               unit, scriptComponent, world, executionContext) {
        const args = stackOperation.getArgs()
        const calledFunctionName = args && args[0]
        if (!calledFunctionName) {
            throw new ClientError(`Stack operation invalid (Function not provided)`)
        }
        const scopeFunction = args[1]
        const calledFunction = functionRegistry.getInstance(calledFunctionName)
        if (!calledFunction) {
            throw new ClientError(`Function "${calledFunctionName}" not founded in the registry`)
        }
        const inputs = calledFunction.getInputs()
        inputs.forEach(input => {
            const inputName = input.getAttrName()
            const inputScopeName = `${scopeFunction ? `${scopeFunction}.` : ''}${inputName}`
            const inputType = input.getAttrType()
            if (!stackRegister.has(functionName, inputScopeName)) {
                throw new ClientError(`Function "${calledFunctionName}": Input name ${inputScopeName} not provided`)
            }
            const value = stackRegister.pop(functionName, inputScopeName)
            let inputValue = DynamicAttributeHelper.getValueByType(value, inputType, world, unit, scriptComponent)
            calledFunction.setInputValue(inputName, inputValue)
        })
        calledFunction.execute(functionRegistry, unit, scriptComponent, world, executionContext)
        stackRegister.pushRet(functionName, calledFunction.getOutputValue())
    }

}