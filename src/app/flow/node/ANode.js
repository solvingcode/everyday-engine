import Maths from '../../utils/Maths.js'

export default class ANode{

    /**
     * @type {number}
     */
    id

    /**
     * @type {AEvent|AFunction}
     */
    element

    /**
     * @type {{sourceId: number, nodeSource: ANode, targetId: number}[]}
     */
    inputs

    /**
     * @param {AEvent|AFunction} element
     */
    constructor(element) {
        this.id = Maths.generateId()
        this.element = element
        this.inputs = []
    }

    /**
     * @return {number}
     */
    getId(){
        return this.id
    }

    /**
     * @return {AEvent|AFunction}
     */
    getElement(){
        return this.element
    }

    /**
     * @param {number} sourceId
     * @param {ANode} nodeSource
     * @param {number} targetId
     */
    attachInput(sourceId, nodeSource, targetId){
        const inputNode = this.getInputNodeAttached(targetId)
        if(!inputNode){
           const newInputNode = {sourceId, nodeSource, targetId}
           this.inputs.push(newInputNode)
        }else{
            inputNode.nodeSource = nodeSource
            inputNode.sourceId = sourceId
        }
    }

    /**
     * @param {number} targetId
     * @return {{sourceId: number, nodeSource: ANode, targetId: number}}
     */
    getInputNodeAttached(targetId){
        return this.inputs.find(input => input.targetId === targetId)
    }

}