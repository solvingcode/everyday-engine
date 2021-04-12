import Data from './Data.js'
import Maths from '../../utils/Maths.js'

export default class AScriptData extends Data{

    /**
     * @type {number}
     */
    id

    /**
     * @type {ANode[]}
     */
    nodes

    /**
     * @type {string}
     */
    name

    /**
     * @type {string}
     */
    status

    /**
     * @param {string} name
     */
    constructor(name= '') {
        super()
        this.id = Maths.generateId()
        this.name = name
        this.nodes = []
        this.status = STATUS.NEW
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
     * @return {ANode[]}
     */
    getNodes(){
        return this.nodes
    }

    /**
     * @param {ANode[]} nodes
     */
    setNodes(nodes){
        this.nodes = nodes
    }

    /**
     * @param {ANode[]} nodes
     */
    concatNodes(nodes){
        this.setNodes(nodes)
    }

}

export const STATUS = {
    NEW: '',
    COMPILED: 'compiled',
    ERROR: 'error'
}