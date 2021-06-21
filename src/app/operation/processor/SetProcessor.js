import ClientError from '../../exception/type/ClientError.js'
import SystemError from '../../exception/type/SystemError.js'

export default class SetProcessor {

    /**
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     * @param {Unit} unit
     * @param {ScriptComponent} scriptComponent
     */
    static run(stackOperation, stackRegister, unit, scriptComponent) {
        const args = stackOperation.getArgs()
        if (args.length !== 1) {
            throw new ClientError(`Set: Inputs invalids (expected: 1, given: ${args.length})`)
        }
        const name = args[0]
        if (!scriptComponent || !scriptComponent.hasAttribute(name)) {
            throw new SystemError(`${this.constructor.name}: No value bound for variable "${name}"`)
        }
        scriptComponent.setValue(name, stackRegister.popRet())
    }

}