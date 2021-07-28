import Data from './Data.js'

export default class MaterialData extends Data{

    /**
     * @param {number}
     */
    id

    /**
     * @param {string}
     */
    name

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
     * @return {string}
     */
    getName(){
        return this.name
    }

    /**
     * @param {string} name
     * @return {string}
     */
    setName(name){
        this.name = name
    }

}