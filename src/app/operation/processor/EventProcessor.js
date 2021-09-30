import ClientError from '../../exception/type/ClientError.js'

export default class EventProcessor {

    /**
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     * @param {FunctionRegistry} functionRegistry
     * @param {Unit} unit
     * @param {ScriptComponent} scriptComponent
     * @param {World} world
     * @param {{camera: Camera, lights: Unit[], deltaTime: number}} executionContext
     */
    static run(stackOperation, stackRegister, functionRegistry, unit,
               scriptComponent, world, executionContext) {
        const args = stackOperation.getArgs()
        if (args.length !== 1) {
            throw new ClientError(`Dispatch: Inputs invalids (expected: 1, given: ${args.length})`)
        }
        const eventName = args && args[0]
        if (!eventName) {
            throw new ClientError(`Stack operation invalid (Event not provided)`)
        }
        const aEvent = functionRegistry.getInstance(eventName)
        if (!eventName) {
            throw new ClientError(`Event "${eventName}" not founded in the registry`)
        }
        functionRegistry.getInstancesByClass(scriptComponent.getScript()).forEach(instance => {
            if(instance instanceof aEvent.constructor){
                instance.execute(functionRegistry, unit, scriptComponent, world, executionContext)
            }
        })
    }

}