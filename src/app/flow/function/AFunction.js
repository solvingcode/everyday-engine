import Maths from '../../utils/Maths.js'
import DynamicAttributeHelper from '../../utils/DynamicAttributeHelper.js'
import {CONSTANTS} from '../../operation/StackRegister.js'

export default class AFunction{

    /**
     * @type {number}
     */
    id
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
     * @param {string} name
     */
    constructor(name) {
        this.id = Maths.generateId()
        this.name = name
        this.inputs = []
        this.init()
    }

    /**
     * @return {number}
     */
    getId(){
        return this.id
    }

    /**
     * @param {string} name
     */
    setName(name){
        this.name = name
    }

    /**
     * @return {string}
     */
    getName(){
        return this.name
    }

    /**
     * @abstract
     */
    initAttributes(){
        throw new TypeError(`${this.constructor.name}.initAttributes must be implemented`)
    }

    init(){
        this.initAttributes()
    }

    /**
     * @final
     */
    execute(){
        throw new TypeError(`${this.constructor.name}.execute must be implemented`)
    }

    /**
     * @protected
     * @param {string} name
     * @param {string} type
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
     * @param {number} id
     * @return {DynamicAttribute}
     */
    findInputById(id){
        return DynamicAttributeHelper.findById(this.inputs, id)
    }

    /**
     * @param {string} type
     * @param {*} defaultValue
     */
    setOutput(type, defaultValue = null){
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