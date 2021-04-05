import Maths from '../../utils/Maths.js'

export default class ANode{

    /**
     * @type {number}
     */
    id

    /**
     * @type {AEvent|AFunction}
     */
    element

    /**
     * @param {AEvent|AFunction} element
     */
    constructor(element) {
        this.id = Maths.generateId()
        this.element = element
    }

    /**
     * @return {AEvent|AFunction}
     */
    getElement(){
        return this.element
    }

}