import ClientError from '../../exception/type/ClientError.js'

export default class ThenProcessor {

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
        const aFunction = functionRegistry.getInstance(calledFunctionName)
        if (!aFunction) {
            throw new ClientError(`Function "${calledFunctionName}" not founded in the registry`)
        }
        const promise = stackRegister.pop(functionName, `${functionName}.promise`)
        promise.then(result => {
            stackRegister.pushMem(functionName, 'promise.then', result)
            aFunction.execute(functionRegistry, unit, scriptComponent, world, executionContext)
            stackRegister.pushRet(functionName, aFunction.getOutputValue())
        })
    }

}