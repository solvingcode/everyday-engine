import ClientError from '../../exception/type/ClientError.js'
import ScriptComponent from '../../component/internal/ScriptComponent.js'
import ScriptHelper from '../../utils/ScriptHelper.js'

export default class CallFuncProcessor {

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
        const calledFunction = functionRegistry.getInstance(calledFunctionName)
        if (!calledFunction) {
            throw new ClientError(`Function "${calledFunctionName}" not founded in the registry`)
        }
        const pUnit = stackRegister.pop('', 'unit')
        const targetScriptComponent = pUnit.findComponentsByClass(ScriptComponent)
            .find(pScriptComponent => {
                return ScriptHelper.isHasFunction(world, pScriptComponent.getScript(), calledFunction)
            })
        if (targetScriptComponent) {
            const overrideFunctionName = `${targetScriptComponent.getName()}.${calledFunction.getFunctionName()}`
            const overrideFunction = world.getFunctionRegistry().getInstance(overrideFunctionName)
            const callFunction = overrideFunction || calledFunction
            callFunction.execute(functionRegistry, pUnit, targetScriptComponent, world, executionContext)
            stackRegister.pushRet(calledFunctionName, calledFunction.getOutputValue())
            calledFunction.getOutputs().forEach(customOutput => {
                stackRegister.pushCustomRet(calledFunctionName, customOutput.getAttrName(),
                    calledFunction.getCustomOutputValue(customOutput.getAttrName()))
            })
        }
    }

}