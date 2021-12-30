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
     * @param {VariableScript[]}
     */
    variables

    /**
     * @param {AnimationScript[]}
     */
    animations

    /**
     * @type {string}
     */
    status

    /**
     * @type {string}
     */
    parentName

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
        this.variables = []
        this.animations = []
        this.parentName = ''
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
     * @param {string} parentName
     */
    setParentName(parentName){
        this.parentName = parentName
    }

    /**
     * @return {string}
     */
    getParentName(){
        return this.parentName
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
     * @return {VariableScript[]}
     */
    getVariables(){
        return this.variables
    }

    /**
     * @param {VariableScript[]} variables
     */
    setVariables(variables){
        this.variables = variables
    }

    /**
     * @return {AnimationScript[]}
     */
    getAnimations(){
        return this.animations
    }

    /**
     * @param {AnimationScript[]} animations
     */
    setAnimations(animations){
        this.animations = animations
    }

    /**
     * @param {AScriptFunction[]} functions
     */
    concatFunctions(functions){
        this.setFunctions(functions)
    }

    /**
     * @param {VariableScript[]} variables
     */
    concatVariables(variables){
        this.setVariables(variables)
    }

    /**
     * @param {AnimationScript[]} animations
     */
    concatAnimations(animations){
        this.setAnimations(animations)
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

}

export const STATUS = {
    NEW: '',
    COMPILED: 'compiled',
    ERROR: 'error'
}