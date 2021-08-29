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
     * @type {boolean}
     */
    selected

    /**
     * @param {string} name
     */
    constructor(name= '') {
        super()
        this.id = Maths.generateId()
        this.name = name
        this.nodes = []
        this.selected = false
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

    /**
     * @param {boolean} selected
     */
    setSelected(selected){
        this.selected = selected
    }

    /**
     * @return {boolean}
     */
    getSelected(){
        return this.selected
    }

}