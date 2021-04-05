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
     * @return {*}
     */
    pop(name){
        const value = this.register[name]
        this.register[name] = null
        return value
    }

    popRet(){
        const value = this.register[CONSTANTS.RESULT]
        this.register[CONSTANTS.RESULT] = null
        return value
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
    RESULT: '__result__'
}