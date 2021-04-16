import Maths from '../utils/Maths.js'

export default class Content {

    /**
     * @type {number}
     */
    id
    data

    /**
     * @param {*} data
     */
    constructor(data) {
        this.id = Maths.generateId()
        this.data = data
    }

    /**
     * @return {number}
     */
    getId(){
        return this.id
    }

    /**
     * @return {*}
     */
    getData(){
        return this.data
    }

}