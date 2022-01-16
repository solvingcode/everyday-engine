import Maths from '../utils/Maths.js'

export default class DynamicAttribute {

    /**
     * @type {number}
     */
    id
    /**
     * @type {string}
     */
    attrName
    /**
     * @type {number}
     */
    attrType
    /**
     * @type {*}
     */
    attrValue
    /**
     * @type {*}
     */
    attrRule
    /**
     * @type {boolean}
     */
    internal

    /**
     * @param {string} attrName
     * @param {number|string} attrType
     * @param {*} attrValue
     * @param {*} attrRule
     * @param {boolean} internal
     */
    constructor(attrName, attrType, attrValue = null, attrRule = null, internal = false) {
        this.id = Maths.generateId()
        this.setAttrName(attrName)
        this.setAttrType(attrType)
        this.setAttrValue(attrValue)
        this.setAttrRule(attrRule)
        this.setInternal(internal)
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
    getId(){
        return this.id
    }

    /**
     * @param {boolean} internal
     */
    setInternal(internal){
        this.internal = internal
    }

    /**
     * @return {boolean}
     */
    getInternal(){
        return this.internal
    }

    /**
     * @param {string} name
     */
    setAttrName(name){
        this.attrName = name
    }

    /**
     * @return {string}
     */
    getAttrName(){
        return this.attrName
    }

    /**
     * @return {string}
     */
    getName(){
        return ''
    }

    /**
     * @param {string|number} type
     */
    setAttrType(type){
        this.attrType = parseInt(type)
    }

    /**
     * @return {number}
     */
    getAttrType(){
        return this.attrType
    }

    /**
     * @param {*} value
     */
    setAttrValue(value){
        this.attrValue = value
    }

    /**
     * @return {*}
     */
    getAttrValue(){
        return this.attrValue
    }

    /**
     * @param {*} value
     */
    setAttrRule(value){
        this.attrRule = value
    }

    /**
     * @return {*}
     */
    getAttrRule(){
        return this.attrRule
    }

    /**
     * @param {*[]} values
     */
    concatAttrValue(values) {
        this.setAttrValue(values)
    }

}