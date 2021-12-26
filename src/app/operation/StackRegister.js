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
     * @param {string} functionName
     * @param {string} name
     * @param {*} value
     */
    push(functionName, name, value) {
        this.register[this.getScopeName(functionName, name)] = value
    }

    /**
     * @param {string} functionName
     * @param {string} name
     * @param {*} value
     */
    pushMem(functionName, name, value) {
        this.register[`[MEM]${this.getScopeName(functionName, name)}`] = value
    }

    /**
     * @param {string} functionName
     * @param {*} value
     */
    pushRet(functionName, value) {
        this.register[this.getScopeName(functionName, CONSTANTS.RESULT)] = value
    }

    /**
     * @param {string} functionName
     * @param {string} name
     * @param {*} value
     */
    pushCustomRet(functionName, name, value) {
        this.register[this.getScopeName(functionName, `${CONSTANTS.RESULT}_${name}`)] = value
    }

    /**
     * @param {string} functionName
     * @param {*} value
     */
    pushSignal(functionName, value) {
        this.register[this.getScopeName(functionName, CONSTANTS.SIGNAL)] = value
    }

    /**
     * @param {string} functionName
     * @param {*} value
     */
    pushJump(functionName, value) {
        this.register[this.getScopeName(functionName, CONSTANTS.JUMP)] = value
    }

    /**
     * @param {string} functionName
     * @param {string} name
     * @return {*}
     */
    pop(functionName, name) {
        const value = this.register[this.getScopeName(functionName, name)]
        if (!this.isMemory(name)) {
            this.delete(functionName, name)
        }
        return value
    }

    /**
     * @param {string} functionName
     * @param {string} name
     * @return {*}
     */
    has(functionName, name){
        const attrName = this.getScopeName(functionName, name)
        return this.register.hasOwnProperty(attrName)
    }

    /**
     * @param {string} functionName
     * @return {*}
     */
    popRet(functionName) {
        return this.register[this.getScopeName(functionName, CONSTANTS.RESULT)]
    }

    /**
     * @param {string} functionName
     * @param {string} name
     * @return {*}
     */
    popCustomRet(functionName, name) {
        return this.register[this.getScopeName(functionName, `${CONSTANTS.RESULT}_${name}`)]
    }

    /**
     * @param {string} functionName
     * @param {string} name
     */
    delete(functionName, name) {
        delete this.register[this.getScopeName(functionName, name)]
    }

    /**
     * @param {string} functionName
     * @return {*}
     */
    popSignal(functionName) {
        return this.pop(functionName, CONSTANTS.SIGNAL)
    }

    /**
     * @param {string} functionName
     * @return {*}
     */
    popJump(functionName) {
        return this.pop(functionName, CONSTANTS.JUMP)
    }

    /**
     * @param {string} name
     * @return {boolean}
     */
    isMemory(name){
        return !!`${name}`.match(/^\[MEM].*/)
    }

    /**
     * @param {string} functionName
     * @param {string} name
     * @return {string}
     */
    getScopeName(functionName, name){
        if(name === CONSTANTS.RESULT || name === CONSTANTS.JUMP || name === CONSTANTS.SIGNAL || this.isMemory(name)){
            return name
        }
        return functionName ? `${functionName}.${name}` : name
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