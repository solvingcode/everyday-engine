import CompiledClassData from '../../../project/data/CompiledClassData.js'

export default class CompiledClass extends CompiledClassData{

    /**
     * @type {CompiledFunction[]}
     */
    functions

    /**
     * @type {CompiledAttribute[]}
     */
    attributes

    /**
     * @param {string} name
     */
    constructor(name) {
        super(name)
        this.functions = []
        this.attributes = []
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