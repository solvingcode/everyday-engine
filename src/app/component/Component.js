import ComponentData from '../project/data/ComponentData.js'
import ComponentAttribute from '../pobject/ComponentAttribute.js'

/**
 * @abstract
 */
export default class Component extends ComponentData{

    constructor(name) {
        super(name)
        this.initAttributes()
    }

    /**
     * @abstract
     * @return {FormField[]}
     */
    getFormFields(){
        throw new TypeError(`${this.constructor.name}.getFormFields must be implement`)
    }

    /**
     * @abstract
     */
    initAttributes(){
        throw new TypeError(`${this.constructor.name}.initAttributes must be implement`)
    }

    /**
     * @param {string} name
     * @param {string} type
     * @param {*} defaultValue
     */
    add(name, type, defaultValue = null){
        const componentAttribute = new ComponentAttribute()
        componentAttribute.setAttrName(name)
        componentAttribute.setAttrType(type)
        componentAttribute.setAttrValue(defaultValue)
        this.attributes.push(componentAttribute)
    }

    /**
     * @param {string} name
     * @return {ComponentAttribute}
     */
    get(name){
        const componentAttribute = this.attributes.find(attribute => attribute.getAttrName() === name)
        if(!componentAttribute){
            throw new TypeError(`Attribute ${name} not supported by ${this.name}Component`)
        }
        return componentAttribute
    }

    /**
     * @param {string} name
     * @param {*} value
     */
    set(name, value){
        let attribute = this.get(name)
        attribute.setAttrValue(value)
    }


}