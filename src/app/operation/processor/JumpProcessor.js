import {CONSTANTS} from '../StackRegister.js'
import ClientError from '../../exception/type/ClientError.js'

export default class JumpProcessor {

    /**
     * @param {string} functionName
     * @param {StackOperation} stackOperation
     * @param {StackRegister} stackRegister
     */
    static run(functionName, stackOperation, stackRegister) {
        const args = stackOperation.getArgs()
        if(args.length !== 2){
            throw new ClientError(`Jump: Inputs invalids (expected: 2, given: ${args.length})`)
        }
        const name = args[0]
        const jumpTo = args[1]
        if(name === CONSTANTS.RESULT){
            stackRegister.pushJump(functionName, !stackRegister.popRet(functionName) ? jumpTo : null)
        }else{
            stackRegister.pushJump(functionName, !stackRegister.pop(functionName, name) ? jumpTo : null)
        }
    }

}