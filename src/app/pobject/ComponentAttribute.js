export default class ComponentAttribute {

    attrName
    attrType
    attrValue

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