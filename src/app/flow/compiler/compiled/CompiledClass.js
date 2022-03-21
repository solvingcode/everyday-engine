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
     * @type {CompiledAttribute[]}
     */
    attributes

    /**
     * @type {string}
     */
    code

    /**
     * @return {string}
     */
    getCode() {
        return this.code
    }

    /**
     * @param {string} code
     */
    setCode(code) {
        this.code = code
    }

    /**
     * @param {string} name
     */
    constructor(name) {
        this.name = name
        this.functions = []
        this.attributes = []
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

    /**
     * @return {CompiledAttribute[]}
     */
    getAttributes() {
        return this.attributes
    }

    /**
     * @param {CompiledAttribute[]} attributes
     */
    setAttributes(attributes) {
        this.attributes = attributes
    }

    /**
     * @param {CompiledAttribute} attribute
     */
    addAttribute(attribute) {
        this.attributes.push(attribute)
    }

    /**
     * @param {string} name
     * @return {CompiledAttribute}
     */
    getAttribute(name) {
        return this.getAttributes().find(attribute => attribute.getName() === name)
    }

}