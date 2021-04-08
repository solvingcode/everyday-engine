import DynamicAttribute from '../pobject/DynamicAttribute.js'

export default class DynamicAttributeHelper {

    /**
     * @param {string} name
     * @param {string} type
     * @param {*} defaultValue
     */
    static create(name, type, defaultValue = null){
        const componentAttribute = new DynamicAttribute()
        componentAttribute.setAttrName(name)
        componentAttribute.setAttrType(type)
        componentAttribute.setAttrValue(defaultValue)
        return componentAttribute
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @param {string} type
     * @param {*} defaultValue
     */
    static add(target, name, type, defaultValue = null){
        if(!this.tryGet(target, name)){
            target.push(this.create(name, type, defaultValue))
        }else{
            throw new TypeError(`Attribute ${name} already defined`)
        }
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {DynamicAttribute}
     */
    static get(target, name){
        const componentAttribute = this.tryGet(target, name)
        if(!componentAttribute){
            throw new TypeError(`Attribute ${name} not supported`)
        }
        return componentAttribute
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {DynamicAttribute}
     */
    static tryGet(target, name){
        return target.find(attribute => attribute.getAttrName() === name)
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @param {*} value
     */
    static setValue(target, name, value){
        let attribute = this.get(target, name)
        attribute.setAttrValue(value)
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {*}
     */
    static getValue(target, name){
        return this.get(target, name).getAttrValue()
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {number}
     */
    static getId(target, name){
        return this.get(target, name).getId()
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {number} id
     * @return {DynamicAttribute}
     */
    static findById(target, id){
        return target.find(attribute => attribute.getId() === id)
    }

}