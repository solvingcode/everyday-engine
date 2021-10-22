import Data from './Data.js'

export default class KeyFrameData extends Data {

    /**
     * @type {number}
     */
    id

    /**
     * @type {DynamicAttribute}
     */
    attribute

    /**
     * @type {number}
     */
    time

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
     * @param {DynamicAttribute} attribute
     */
    setAttribute(attribute){
        this.attribute = attribute
    }

    /**
     * @return {DynamicAttribute}
     */
    getAttribute(){
        return this.attribute
    }

    /**
     * @param {number} time
     */
    setTime(time){
        this.time = time
    }

    /**
     * @return {number}
     */
    getTime(){
        return this.time
    }
}