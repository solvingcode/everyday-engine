import Maths from '../utils/Maths.js'

export default class DynamicAttribute {

    id
    attrName
    attrType
    attrValue

    constructor(attrName, attrType, attrValue) {
        this.id = Maths.generateId()
        this.attrName = attrName
        this.attrType = attrType
        this.attrValue = attrValue
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
     * @param {string} type
     */
    setAttrType(type){
        this.attrType = type
    }

    /**
     * @return {string}
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