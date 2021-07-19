import ClientError from '../../exception/type/ClientError.js'
import AttributeType, {TYPES} from '../../pobject/AttributeType.js'

export default class SelfProcessor {

    /**
     * @param {string} functionName
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     * @param {Unit} unit
     * @param {ScriptComponent} scriptComponent
     */
    static run(functionName, stackOperation, stackRegister, unit, scriptComponent) {
        const args = stackOperation.getArgs()
        if (args.length !== 1) {
            throw new ClientError(`Self: Inputs invalids (expected: 1, given: ${args.length})`)
        }
        const type = args[0]
        if (AttributeType.is(type, TYPES.UNIT)) {
            stackRegister.pushRet(functionName, unit.getId())
        } else if (AttributeType.is(type, TYPES.COMPONENT_INSTANCE)) {
            stackRegister.pushRet(functionName, scriptComponent.getId())
        } else {
            throw new ClientError(`Self: Input type "${type}" not supported`)
        }
    }

}