import ComponentData from '../project/data/ComponentData.js'
import {TYPES} from '../pobject/AttributeType.js'
import DynamicAttributeHelper from '../utils/DynamicAttributeHelper.js'

/**
 * @abstract
 */
export default class Component extends ComponentData{

    constructor(name) {
        super(name)
        this.init()
    }

    /**
     * @abstract
     * @return {FormField[]}
     */
    getFormFields(){
        throw new TypeError(`${this.constructor.name}.getFormFields must be implement`)
    }

    /**
     * @private
     */
    init(){
        this.add('enabled', TYPES.BOOLEAN, true)
        this.initAttributes()
    }

    /**
     * @abstract
     */
    initAttributes(){
        throw new TypeError(`${this.constructor.name}.initAttributes must be implement`)
    }

    /**
     * @protected
     * @param {string} name
     * @param {number} type
     * @param {*} defaultValue
     */
    add(name, type, defaultValue = null){
        DynamicAttributeHelper.add(this.attributes, name, type, defaultValue)
    }

    /**
     * @protected
     * @param {string} name
     * @return {DynamicAttribute}
     */
    get(name){
        return DynamicAttributeHelper.get(this.attributes, name)
    }

    /**
     * @protected
     * @param {string} name
     * @param {*} value
     */
    setValue(name, value){
        DynamicAttributeHelper.setValue(this.attributes, name, value)
    }

    /**
     * @protected
     * @param {string} name
     * @return {*}
     */
    getValue(name){
        return DynamicAttributeHelper.getValue(this.attributes, name)
    }

    /**
     * @protected
     * @param {string} name
     * @return {*}
     */
    getType(name){
        return DynamicAttributeHelper.getType(this.attributes, name)
    }

    /**
     * @param {string} name
     * @return {boolean}
     */
    hasAttribute(name){
        return !!DynamicAttributeHelper.tryGet(this.attributes, name)
    }

    enable(){
        this.setValue('enabled', true)
    }

    disable(){
        this.setValue('enabled', false)
    }

    /**
     * @param {boolean} enabled
     */
    setEnabled(enabled){
        this.setValue('enabled', enabled)
    }

    /**
     * @return {boolean}
     */
    getEnabled(){
        return this.getValue('enabled')
    }

    /**
     * @return {boolean}
     */
    isEnabled(){
        return this.getEnabled()
    }

    /**
     * @return {boolean}
     */
    isRemovable(){
        return true
    }

}