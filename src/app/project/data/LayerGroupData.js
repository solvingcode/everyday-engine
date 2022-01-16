import Maths from '../../utils/Maths.js'
import Data from './Data.js'

export default class LayerGroupData extends Data {

    /**
     * @type {number}
     */
    id
    /**
     * @type {string}
     */
    name
    /**
     * @type {number}
     */
    rank

    /**
     * @param {string} name
     * @param {number} rank
     */
    constructor(name, rank) {
        super()
        this.id = Maths.generateId()
        this.name = name
        this.rank = rank
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

    /**
     * @return {number}
     */
    getRank() {
        return this.rank
    }

    /**
     * @param {number} rank
     */
    setRank(rank) {
        this.rank = rank
    }

}