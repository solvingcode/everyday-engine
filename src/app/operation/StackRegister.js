export default class StackRegister {

    static instance

    /**
     * @type {Object}
     */
    register

    constructor() {
        this.register = {}
    }

    /**
     * @param {string} name
     * @param {*} value
     */
    push(name, value){
        this.register[name] = value
    }

    /**
     * @param {*} value
     */
    pushRet(value){
        this.register[CONSTANTS.RESULT] = value
    }

    /**
     * @param {*} value
     */
    pushSignal(value){
        this.register[CONSTANTS.SIGNAL] = value
    }

    /**
     * @return {*}
     */
    pop(name){
        return this.register[name]
    }

    /**
     * @return {*}
     */
    popRet(){
        return this.register[CONSTANTS.RESULT]
    }

    /**
     * @return {*}
     */
    popSignal(){
        return this.pop(CONSTANTS.SIGNAL)
    }

    /**
     * @return {StackRegister}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}

export const CONSTANTS = {
    RESULT: '__result__',
    SIGNAL: '__signal__'
}