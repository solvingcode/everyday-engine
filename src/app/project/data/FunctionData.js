import Data from './Data.js'
import Maths from '../../utils/Maths.js'

export default class FunctionData extends Data {

    /**
     * @type {number}
     */
    id
    /**
     * @type {string}
     */
    name
    /**
     * @type {DynamicAttribute[]}
     */
    inputs
    /**
     * @type {DynamicAttribute}
     */
    output
    /**
     * @type {StackOperation[]}
     */
    stack
    /**
     * @type {number}
     */
    access
    /**
     * @type {string}
     */
    className
    /**
     * @type {string}
     */
    parentClassName
    /**
     * @type {string[]}
     */
    childClassNames
    /**
     * @type {string}
     */
    scopeFunctionName

    /**
     * @param {string} name
     */
    constructor(name) {
        super()
        this.id = Maths.generateId()
        this.name = name
        this.inputs = []
        this.stack = []
        this.childClassNames = []
        this.output = null
        this.access = 0
    }

    /**
     * @param {number} id
     */
    setId(id){
        this.id = id
    }

    /**
     * @return {number}
     */
    getId() {
        return this.id
    }

    /**
     * @param {number} access
     */
    setAccess(access){
        this.access = access
    }

    /**
     * @return {number}
     */
    getAccess() {
        return this.access
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

    /**
     * @param {string} className
     */
    setClassName(className) {
        this.className = className
    }

    /**
     * @return {string}
     */
    getClassName() {
        return this.className
    }

    /**
     * @param {string} parentClassName
     */
    setParentClassName(parentClassName) {
        this.parentClassName = parentClassName
    }

    /**
     * @return {string}
     */
    getParentClassName() {
        return this.parentClassName
    }

    /**
     * @param {string[]} childClassNames
     */
    setChildClassNames(childClassNames) {
        this.childClassNames = childClassNames
    }

    /**
     * @return {string[]}
     */
    getChildClassNames() {
        return this.childClassNames
    }

    /**
     * @param {string} scopeFunctionName
     */
    setScopeFunctionName(scopeFunctionName) {
        this.scopeFunctionName = scopeFunctionName
    }

    /**
     * @return {string}
     */
    getScopeFunctionName() {
        return this.scopeFunctionName
    }

    /**
     * @return {DynamicAttribute[]}
     */
    getInputs(){
        return this.inputs
    }

    /**
     * @param {DynamicAttribute[]} inputs
     */
    setInputs(inputs){
        this.inputs = inputs
    }

    /**
     * @return {StackOperation[]}
     */
    getStack(){
        return this.stack
    }

    /**
     * @param {StackOperation[]} stack
     */
    setStack(stack){
        this.stack = stack
    }

    /**
     * @return {DynamicAttribute}
     */
    getOutput(){
        return this.output
    }

    /**
     * @param {DynamicAttribute} output
     */
    setOutput(output){
        this.output = output
    }

    /**
     * @param {DynamicAttribute[]} inputs
     */
    concatInputs(inputs) {
        this.setInputs(inputs)
    }

    /**
     * @param {StackOperation[]} stack
     */
    concatStack(stack){
        this.setStack(stack)
    }

    /**
     * @param {string[]} childClassNames
     */
    concatChildClassNames(childClassNames){
        this.setChildClassNames(childClassNames)
    }

}