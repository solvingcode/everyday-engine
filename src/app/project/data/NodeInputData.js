import Data from './Data.js'
import Maths from '../../utils/Maths.js'

export default class NodeInputData extends Data{

    /**
     * @type {number}
     */
    id

    /**
     * @type {number}
     */
    sourceNodeId

    /**
     * @type {number}
     */
    nodeId

    /**
     * @type {string}
     */
    targetName

    constructor() {
        super()
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
     * @return {string}
     */
    getName(){
        return ''
    }

    /**
     * @return {number}
     */
    getSourceNodeId(){
        return this.sourceNodeId
    }

    /**
     * @param {number} sourceNodeId
     */
    setSourceNodeId(sourceNodeId){
        this.sourceNodeId = sourceNodeId
    }

    /**
     * @return {number}
     */
    getNodeId(){
        return this.nodeId
    }

    /**
     * @param {number} nodeId
     */
    setNodeId(nodeId){
        this.nodeId = nodeId
    }

    /**
     * @return {string}
     */
    getTargetName(){
        return this.targetName
    }

    /**
     * @param {string} targetName
     */
    setTargetName(targetName){
        this.targetName = targetName
    }

}