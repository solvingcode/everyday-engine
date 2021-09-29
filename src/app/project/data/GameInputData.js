import Data from './Data.js'
import Maths from '../../utils/Maths.js'

export default class GameInputData extends Data{

    /**
     * @type {number}
     */
    id

    /**
     * @type {string}
     */
    name

    /**
     * @type {string}
     */
    key

    /**
     * @type {DynamicAttribute}
     */
    value

    /**
     * @param {string} name
     * @param {string} key
     * @param {DynamicAttribute} value
     */
    constructor(name, key, value) {
        super()
        this.id = Maths.generateId()
        this.name = name
        this.key = key
        this.value = value
    }

    /**
     * @param {number} id
     */
    setId(id) {
        this.id = id
    }

    /**
     * @return {number}
     */
    getId() {
        return this.id
    }

    /**
     * @param {string} name
     */
    setName(name){
        this.name = name
    }

    /**
     * @param {string} key
     */
    setKey(key){
        this.key = key
    }

    /**
     * @param {DynamicAttribute} value
     */
    setValue(value){
        this.value = value
    }

    /**
     * @return {string}
     */
    getName(){
        return this.name
    }

    /**
     * @return {string}
     */
    getKey(){
        return this.key
    }

    /**
     * @return {DynamicAttribute}
     */
    getValue(){
        return this.value
    }

}