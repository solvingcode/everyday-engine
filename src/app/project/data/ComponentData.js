import Data from './Data.js'
import Maths from '../../utils/Maths.js'

export default class ComponentData extends Data{

    id
    name
    /**
     * @type {ComponentAttribute[]}
     */
    attributes

    constructor(name) {
        super()
        this.id = Maths.generateId()
        this.name = name || 'Custom Component'
        this.attributes = []
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
     * @return {boolean}
     */
    isHidden(){
        return false
    }

    /**
     * @param {ComponentAttribute[]} attributes
     */
    setAttributes(attributes){
        this.attributes = attributes
    }

    /**
     * @return {ComponentAttribute[]}
     */
    getAttributes(){
        return this.attributes
    }

    /**
     * @param {ComponentAttribute[]} attributes
     */
    concatAttributes(attributes){
        attributes.forEach((componentAttr) => {
            const existIndexAttribute = this.attributes.findIndex(attribute => attribute.getAttrName() === componentAttr.getAttrName())
            if(existIndexAttribute >= 0){
                this.attributes[existIndexAttribute] = _.cloneDeep(componentAttr)
            }else{
                this.attributes.push(_.cloneDeep(componentAttr))
            }
        })
    }

}