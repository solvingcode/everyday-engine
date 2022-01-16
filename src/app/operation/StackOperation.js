export default class StackOperation{

    /**
     * @type {string}
     */
    operation
    /**
     * @type{string[]}
     */
    args

    /**
     * @param {string} operation
     * @param {string} args
     */
    constructor(operation, ...args) {
        this.operation = operation
        this.args = args
    }

    /**
     * @param {string} operation
     */
    setOperation(operation){
        this.operation = operation
    }

    /**
     * @return {string}
     */
    getOperation(){
        return this.operation
    }

    /**
     * @return {string[]}
     */
    getArgs(){
        return this.args
    }

    /**
     * @param {string[]} args
     */
    setArgs(args){
        this.args = args
    }

    /**
     * @param {string[]} args
     */
    concatArgs(args){
        this.setArgs(args)
    }

}

export const OPERATIONS = {
    PUSH: 'push',
    GET: 'get',
    SET: 'set',
    CALL: 'call',
    EXIT: 'exit',
    JUMP: 'jump',
    JUMP_TO: 'jump_to',
    DISPATCH: 'dispatch',
    SELF: 'self',
    THEN: 'then'
}