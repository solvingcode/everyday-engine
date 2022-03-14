export default class CompiledClass {

    /**
     * @type {string}
     */
    name

    /**
     * @type {CompiledFunction[]}
     */
    functions

    /**
     * @param {string} name
     */
    constructor(name) {
        this.name = name
        this.functions = []
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @return {CompiledFunction[]}
     */
    getFunctions() {
        return this.functions
    }

    /**
     * @param {CompiledFunction[]} functions
     */
    setFunctions(functions) {
        this.functions = functions
    }

    /**
     * @param {CompiledFunction} func
     */
    addFunction(func) {
        this.functions.push(func)
    }

    /**
     * @param {string} name
     * @return {CompiledFunction}
     */
    getFunction(name) {
        return this.getFunctions().find(func => func.getName() === name)
    }

}