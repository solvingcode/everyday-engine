export default class StackOperation{

    /**
     * @type {string}
     */
    operation
    /**
     * @type{any[]}
     */
    args

    /**
     * @param {string} operation
     * @param {any} args
     */
    constructor(operation, ...args) {
        this.operation = operation
        this.args = args
    }

    /**
     * @return {string}
     */
    getOperation(){
        return this.operation
    }

    /**
     * @return {*[]}
     */
    getArgs(){
        return this.args
    }

}

export const OPERATIONS = {
    PUSH: 'push',
    GET: 'get',
    CALL: 'call'
}