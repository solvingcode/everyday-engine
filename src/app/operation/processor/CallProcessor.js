import ClientError from '../../exception/type/ClientError.js'
import {TYPES} from '../../pobject/AttributeType.js'
import World from '../../world/World.js'

export default class CallProcessor {

    /**
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     * @param {FunctionRegistry} functionRegistry
     * @param {Unit} unit
     */
    static run(stackOperation, stackRegister, functionRegistry, unit) {
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
                    inputValue = value ? World.get().findUnitById(parseInt(value)) : unit
                    if(!inputValue){
                        throw new ClientError(`${this.constructor.name}: Unit "${value}" not found`)
                    }
            }
            aFunction.setInputValue(inputName, inputValue)
        })
        aFunction.execute(functionRegistry, unit)
        stackRegister.pushRet(aFunction.getOutputValue())
    }

}