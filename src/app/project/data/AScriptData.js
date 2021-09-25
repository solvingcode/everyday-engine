import Data from './Data.js'
import Maths from '../../utils/Maths.js'

export default class AScriptData extends Data{

    /**
     * @type {number}
     */
    id

    /**
     * @type {string}
     */
    name

    /**
     * @param {AScriptFunctionData[]}
     */
    functions

    /**
     * @type {string}
     */
    status

    /**
     * @type {number}
     */
    assetId

    /**
     * @param {string} name
     */
    constructor(name= '') {
        super()
        this.id = Maths.generateId()
        this.name = name
        this.status = STATUS.NEW
        this.functions = []
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
     * @return {AScriptFunction[]}
     */
    getFunctions(){
        return this.functions
    }

    /**
     * @param {AScriptFunction[]} functions
     */
    setFunctions(functions){
        this.functions = functions
    }

    /**
     * @param {AScriptFunction[]} functions
     */
    concatFunctions(functions){
        this.setFunctions(functions)
    }

    /**
     * @param {string} status
     */
    setStatus(status){
        this.status = status
    }

    /**
     * @return {string}
     */
    getStatus(){
        return this.status
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

}

export const STATUS = {
    NEW: '',
    COMPILED: 'compiled',
    ERROR: 'error'
}