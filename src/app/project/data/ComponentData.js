import Data from './Data.js'
import Maths from '../../utils/Maths.js'

export default class ComponentData extends Data{

    id
    name
    /**
     * @type {DynamicAttribute[]}
     */
    attributes
    /**
     * @type {boolean}
     */
    hidden

    constructor(name) {
        super()
        this.id = Maths.generateId()
        this.name = name || 'Custom Component'
        this.attributes = []
        this.hidden = false
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
     * @param {boolean} hidden
     */
    setHidden(hidden){
        this.hidden = hidden
    }

    /**
     * @return {boolean}
     */
    isUnique(){
        return true
    }

    /**
     * @return {boolean}
     */
    getHidden(){
        return this.hidden
    }

    /**
     * @return {boolean}
     */
    isHidden(){
        return this.getHidden()
    }

    /**
     * @protected
     * @param {DynamicAttribute[]} attributes
     */
    setAttributes(attributes){
        this.attributes = attributes
    }

    /**
     * @return {DynamicAttribute[]}
     */
    getAttributes(){
        return this.attributes
    }

    /**
     * @param {DynamicAttribute[]} attributes
     */
    concatAttributes(attributes){
        this.concat(
            this.attributes,
            attributes,
            (tItem, sItem) => tItem.getAttrName() === sItem.getAttrName(),
            (attribute) => ['attrRule', 'attrType'].includes(attribute)
        )
    }

}