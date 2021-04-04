import ComponentData from '../project/data/ComponentData.js'
import ComponentAttribute from '../pobject/ComponentAttribute.js'
import {TYPES} from '../pobject/AttributeType.js'

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
     * @param {string} type
     * @param {*} defaultValue
     */
    add(name, type, defaultValue = null){
        if(!this.tryGet(name)){
            const componentAttribute = new ComponentAttribute()
            componentAttribute.setAttrName(name)
            componentAttribute.setAttrType(type)
            componentAttribute.setAttrValue(defaultValue)
            this.attributes.push(componentAttribute)
        }else{
            throw new TypeError(`Attribute ${name} already defined for ${this.name}Component`)
        }
    }

    /**
     * @protected
     * @param {string} name
     * @return {ComponentAttribute}
     */
    get(name){
        const componentAttribute = this.tryGet(name)
        if(!componentAttribute){
            throw new TypeError(`Attribute ${name} not supported by ${this.name}Component`)
        }
        return componentAttribute
    }

    /**
     * @protected
     * @param {string} name
     * @return {ComponentAttribute}
     */
    tryGet(name){
        return this.attributes.find(attribute => attribute.getAttrName() === name)
    }

    /**
     * @protected
     * @param {string} name
     * @param {*} value
     */
    setValue(name, value){
        let attribute = this.get(name)
        attribute.setAttrValue(value)
    }

    /**
     * @protected
     * @param {string} name
     * @return {*}
     */
    getValue(name){
        return this.get(name).getAttrValue()
    }

}