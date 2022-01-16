export default class OperationLogger {

    /**
     * @param {StackOperation[]} stack
     */
    static logStack(stack){
        console.log(
            stack.map(operation => `${operation.getOperation()} ${operation.getArgs().join(', ')}`).join('\n')
        )
    }

}