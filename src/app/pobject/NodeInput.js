import Maths from '../utils/Maths.js'

export default class NodeInput{

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
     * @type {number}
     */
    targetId

    /**
     * @type {boolean}
     */
    selected

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
     * @return {number}
     */
    getTargetId(){
        return this.targetId
    }

    /**
     * @param {number} targetId
     */
    setTargetId(targetId){
        this.targetId = targetId
    }

    /**
     * @param {boolean} selected
     */
    setSelected(selected){
        this.selected = selected
    }

    select(){
        this.setSelected(true)
    }

    unselect(){
        this.setSelected(false)
    }

    /**
     * @return {boolean}
     */
    isSelected(){
        return this.selected
    }
}