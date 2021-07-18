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
    push(name, value) {
        this.register[name] = value
    }

    /**
     * @param {*} value
     */
    pushRet(value) {
        this.register[CONSTANTS.RESULT] = value
    }

    /**
     * @param {*} value
     */
    pushSignal(value) {
        this.register[CONSTANTS.SIGNAL] = value
    }

    /**
     * @param {*} value
     */
    pushJump(value) {
        this.register[CONSTANTS.JUMP] = value
    }

    /**
     * @param {string} name
     * @return {*}
     */
    pop(name) {
        const value = this.register[name]
        if (!this.isMemory(name)) {
            this.delete(name)
        }
        return value
    }

    /**
     * @return {*}
     */
    popRet() {
        return this.register[CONSTANTS.RESULT]
    }

    delete(name) {
        delete this.register[name]
    }

    /**
     * @return {*}
     */
    popSignal() {
        return this.pop(CONSTANTS.SIGNAL)
    }

    /**
     * @return {*}
     */
    popJump() {
        return this.pop(CONSTANTS.JUMP)
    }

    /**
     * @param {string} name
     * @return {boolean}
     */
    isMemory(name){
        return !!`${name}`.match(/^\[MEM].*/)
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
    SIGNAL: '__signal__',
    JUMP: '__jump__'
}