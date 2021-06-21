import ClientError from '../../exception/type/ClientError.js'

export default class SelfProcessor {

    /**
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     * @param {Unit} unit
     */
    static run(stackOperation, stackRegister, unit) {
        const args = stackOperation.getArgs()
        if (args.length !== 0) {
            throw new ClientError(`Self: Inputs invalids (expected: 0, given: ${args.length})`)
        }
        stackRegister.pushRet(unit.getId())
    }

}