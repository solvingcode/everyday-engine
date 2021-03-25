import Data from './Data.js'
import Maths from '../../utils/Maths.js'

export default class ComponentData extends Data{

    id
    name

    constructor(name) {
        super()
        this.id = Maths.generateId()
        this.name = name || 'Custom Component'
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

}