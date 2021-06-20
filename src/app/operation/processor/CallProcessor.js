import ClientError from '../../exception/type/ClientError.js'
import {TYPES} from '../../pobject/AttributeType.js'

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
            let inputValue = value
            if (value === null) {
                throw new ClientError(`Function "${functionName}": Input name ${inputName} not provided`)
            }
            switch (inputType) {
                case TYPES.UNIT:
                    inputValue = value ? world.findUnitById(parseInt(value)) : unit
                    if (!inputValue) {
                        throw new ClientError(`${this.constructor.name}: Unit "${value}" not found`)
                    }
                    break
                case TYPES.ANIMATION:
                    inputValue = world.getAnimationManager().findById(parseInt(value))
                    if (!inputValue) {
                        throw new ClientError(`${this.constructor.name}: Animation "${value}" not found`)
                    }
                    break
                case TYPES.COMPONENT:
                    const component = world.getComponentRegistry().getInstance(value)
                    if (!component || !component.constructor) {
                        throw new ClientError(`${this.constructor.name}: Component "${value}" not found`)
                    }
                    inputValue = component.constructor
                    break
                case TYPES.NUMBER:
                    inputValue = parseFloat(value)
                    break
            }
            aFunction.setInputValue(inputName, inputValue)
        })
        aFunction.execute(functionRegistry, unit, scriptComponent, world)
        stackRegister.pushRet(aFunction.getOutputValue())
    }

}