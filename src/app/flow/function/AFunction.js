import DynamicAttributeHelper from '../../utils/DynamicAttributeHelper.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import FunctionData from '../../project/data/FunctionData.js'
import SystemError from '../../exception/type/SystemError.js'

export default class AFunction extends FunctionData{

    /**
     * @param {string} name
     */
    constructor(name) {
        super(name)
        this.init()
    }

    /**
     * @abstract
     */
    initAttributes() {
        throw new SystemError(`${this.constructor.name}.initAttributes must be implemented`)
    }

    /**
     * @param {string} className
     * @return {boolean}
     */
    isMemberOfClass(className){
        return this.getClassName() === className
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

    init() {
        this.initAttributes()
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
     * @abstract
     * @param {FunctionRegistry} functionRegistry
     * @param {Unit} unit
     * @param {ScriptComponent} scriptComponent
     * @param {World} world
     * @param {{camera: Camera, lights: Unit[], deltaTime: number, storage: Storage}} executionContext
     * @return {void}
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext){
        throw new SystemError(`${this.constructor.name}.execute must be implemented`)
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
     * @return {DynamicAttribute}
     */
    getInput(name){
        return DynamicAttributeHelper.get(this.inputs, name)
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
     * @return {*}
     */
    getInputValue(name){
        return DynamicAttributeHelper.getValue(this.inputs, name)
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

}

export const ACCESSOR = {
    PRIVATE: 0,
    PROTECTED: 1,
    PUBLIC: 2
}