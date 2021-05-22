import Data from './Data.js'

export default class GameInputData extends Data{

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
        this.name = name
        this.key = key
        this.value = value
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