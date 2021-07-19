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
    isInstanceOfClass(className){
        const regexName = new RegExp(`^${className}\.`)
        return !!this.getName().match(regexName)
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
     * @abstract
     * @param {FunctionRegistry} functionRegistry
     * @param {Unit} unit
     * @param {ScriptComponent} scriptComponent
     * @param {World} world
     */
    execute(functionRegistry, unit, scriptComponent, world){
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

}