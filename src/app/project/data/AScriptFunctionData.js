import Data from './Data.js'
import Maths from '../../utils/Maths.js'

export default class AScriptFunctionData extends Data{

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
     * @type {Camera}
     */
    camera

    /**
     * @type {number}
     */
    access

    /**
     * @param {string} name
     */
    constructor(name= '') {
        super()
        this.id = Maths.generateId()
        this.name = name
        this.nodes = []
        this.access = 0
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
     * @param {number} access
     */
    setAccess(access){
        this.access = access
    }

    /**
     * @return {number}
     */
    getAccess() {
        return this.access
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

    /**
     * @param {Camera} camera
     */
    setCamera(camera){
        this.camera = camera
    }

    /**
     * @return {Camera}
     */
    getCamera(){
        return this.camera
    }

}