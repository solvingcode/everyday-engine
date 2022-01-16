import Maths from '../../utils/Maths.js'
import Data from './Data.js'

export default class MaskGroupData extends Data {

    /**
     * @type {number}
     */
    id
    /**
     * @type {string}
     */
    name

    /**
     * @param {string} name
     */
    constructor(name) {
        super()
        this.id = Maths.generateId()
        this.name = name
    }

    /**
     * @return {number}
     */
    getId() {
        return this.id
    }

    /**
     * @param {number} id
     */
    setId(id) {
        this.id = id
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

}