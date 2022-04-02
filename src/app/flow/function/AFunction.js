import DynamicAttributeHelper from '../../utils/DynamicAttributeHelper.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import FunctionData from '../../project/data/FunctionData.js'
import SystemError from '../../exception/type/SystemError.js'

export default class AFunction extends FunctionData{

    /**
     * @type {boolean}
     */
    selected

    /**
     * @param {boolean}
     */
    optimized

    /**
     * @param {boolean}
     */
    validated

    /**
     * @type {StackOperation[]}
     */
    stack

    /**
     * @param {string} name
     * @param {*} params
     */
    constructor(name, params = {}) {
        super(name)
        this.stack = []
        this.init(params)
    }

    /**
     * @abstract
     * @param {*} params
     * @return {void}
     */
    initAttributes(params) {
        throw new SystemError(`${this.constructor.name}.initAttributes must be implemented`)
    }

    /**
     * @return {boolean}
     */
    isOptimized() {
        return this.optimized
    }

    /**
     * @param {boolean} optimized
     */
    setOptimized(optimized){
        this.optimized = optimized
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
     * @return {boolean}
     */
    isValidated(){
        return this.validated
    }

    /**
     * @param {boolean} validated
     */
    setValidated(validated){
        this.validated = validated
    }

    /**
     * @param {string} className
     * @return {boolean}
     */
    isMemberOfClass(className){
        return this.getClassName() === className
    }

    /**
     * @param {string} className
     * @return {boolean}
     */
    isMemberOfClassByRegex(className){
        const regexName = new RegExp(`^${className}\\.`)
        return !!this.getName().match(regexName) || this.getName() === className
    }

    /**
     * @param {string} functionName
     * @return {boolean}
     */
    isScopeOfFunction(functionName){
        return this.getScopeFunctionName() === functionName
    }

    /**
     * @return {string}
     */
    getClassName(){
        return this.className
    }

    /**
     * @return {string}
     */
    getFunctionName(){
        const className = this.getClassName()
        const regexName = new RegExp(`^(${className}\.)(.*)`)
        return this.getName().replace(regexName, '$2')
    }

    /**
     * @param {*} params
     */
    init(params) {
        this.initAttributes(params)
    }

    /**
     * @return {boolean}
     */
    isGlobal(){
        return !this.getName().match(/\./)
    }

    /**
     * @return {boolean}
     */
    isPublic(){
        return parseInt(this.access) === ACCESSOR.PUBLIC
    }

    /**
     * @protected
     * @param {string} name
     * @param {number} type
     * @param {*} defaultValue
     */
    addInput(name, type, defaultValue = null){
        DynamicAttributeHelper.add(this.inputs, name, type, defaultValue)
    }

    /**
     * @protected
     * @param {string} name
     * @param {number} type
     * @param {*} defaultValue
     */
    addCustomOutput(name, type, defaultValue = null){
        DynamicAttributeHelper.add(this.outputs, name, type, defaultValue)
    }

    /**
     * @protected
     * @param {string} name
     * @return {DynamicAttribute}
     */
    getInput(name){
        return DynamicAttributeHelper.get(this.inputs, name)
    }

    /**
     * @protected
     * @param {string} name
     * @return {DynamicAttribute}
     */
    getCustomOutput(name){
        return DynamicAttributeHelper.get(this.outputs, name)
    }

    /**
     * @return {string[]}
     */
    getInputNames(){
        return this.inputs.map(input => input.getAttrName())
    }

    /**
     * @return {number[]}
     */
    getInputIds(){
        return this.inputs.map(input => input.getId())
    }

    /**
     * @param {string} name
     * @param {*} value
     */
    setInputValue(name, value){
        DynamicAttributeHelper.setValue(this.inputs, name, value)
    }

    /**
     * @param {string} name
     * @param {*} value
     */
    setCustomOutputValue(name, value){
        DynamicAttributeHelper.setValue(this.outputs, name, value)
    }

    /**
     * @param {string} name
     * @return {*}
     */
    getInputValue(name){
        return DynamicAttributeHelper.getValue(this.inputs, name)
    }

    /**
     * @param {string} name
     * @return {*}
     */
    getCustomOutputValue(name){
        return DynamicAttributeHelper.getValue(this.outputs, name)
    }

    /**
     * @param {string} name
     * @return {number}
     */
    getInputId(name){
        return DynamicAttributeHelper.getId(this.inputs, name)
    }

    /**
     * @param {string} name
     * @return {DynamicAttribute}
     */
    findInputByName(name){
        return DynamicAttributeHelper.findByName(this.inputs, name)
    }

    /**
     * @param {number} id
     * @return {DynamicAttribute}
     */
    findInputById(id){
        return DynamicAttributeHelper.findById(this.inputs, id)
    }

    /**
     * @param {number} index
     * @return {DynamicAttribute}
     */
    findInputByIndex(index){
        return DynamicAttributeHelper.findByIndex(this.inputs, index)
    }

    /**
     * @param {number} type
     * @param {*} defaultValue
     */
    addOutput(type, defaultValue = null){
        this.output = DynamicAttributeHelper.create(CONSTANTS.RESULT, type, defaultValue)
    }

    /**
     * @return {DynamicAttribute}
     */
    getOutput(){
        return this.output
    }

    /**
     * @return {DynamicAttribute[]}
     */
    getInputs(){
        return this.inputs
    }

    /**
     * @protected
     * @param {*} value
     */
    setOutputValue(value){
        this.output && this.output.setAttrValue(value)
    }

    /**
     * @return {*}
     */
    getOutputValue(){
        return this.output && this.output.getAttrValue()
    }

    /**
     * @return {boolean}
     */
    isUnique(){
        return false
    }

    /**
     * @param {boolean} selected
     */
    setSelected(selected){
        this.selected = selected
    }

    /**
     * @return {boolean}
     */
    getSelected(){
        return this.selected
    }

    select(){
        this.selected = true
    }

    unselect(){
        this.selected = false
    }

    /**
     * @return {boolean}
     */
    isSelected(){
        return this.getSelected()
    }

}

export const ACCESSOR = {
    PRIVATE: 0,
    PROTECTED: 1,
    PUBLIC: 2
}