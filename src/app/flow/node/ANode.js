import Maths from '../../utils/Maths.js'

/**
 * @abstract
 */
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
     * @type {{sourceNode: ANode, targetId: number}[]}
     */
    inputs

    /**
     * @param {AEvent|AFunction|number|string|boolean} element
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
     * @return {AEvent|AFunction|number|string|boolean}
     */
    getElement(){
        return this.element
    }

    /**
     * @return {{sourceNode: ANode, targetId: number}[]}
     */
    getInputs(){
        return this.inputs
    }

    /**
     * @param {ANode} sourceNode
     * @param {number|null} targetId
     */
    attach(sourceNode, targetId){
        const inputNode = this.getInputNodeAttached(targetId)
        if(!inputNode){
           const newInputNode = {sourceNode, targetId}
           this.inputs.push(newInputNode)
        }else{
            inputNode.sourceNode = sourceNode
        }
    }

    /**
     * @param {number} targetId
     * @return {{sourceNode: ANode, targetId: number}}
     */
    getInputNodeAttached(targetId){
        return this.inputs.find(input => input.targetId === targetId)
    }

}