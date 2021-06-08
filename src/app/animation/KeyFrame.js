import Maths from '../utils/Maths.js'

export default class KeyFrame {

    /**
     * @type {number}
     */
    id

    /**
     * @type {number}
     */
    assetId

    /**
     * @type {number}
     */
    time

    constructor() {
        this.id = Maths.generateId()
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
     * @param {number} assetId
     */
    setAssetId(assetId){
        this.assetId = assetId
    }

    /**
     * @return {number}
     */
    getAssetId(){
        return this.assetId
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

    /**
     * @return {string}
     */
    getName(){
        return ''
    }

}