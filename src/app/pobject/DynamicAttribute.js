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
     * @param {string} attrName
     * @param {number|string} attrType
     * @param {*} attrValue
     */
    constructor(attrName, attrType, attrValue) {
        this.id = Maths.generateId()
        this.setAttrName(attrName)
        this.setAttrType(attrType)
        this.setAttrValue(attrValue)
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
     * @param {*[]} values
     */
    concatAttrValue(values) {
        this.setAttrValue(values)
    }

}