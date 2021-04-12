import Data from './Data.js'
import Maths from '../../utils/Maths.js'

export default class ANodeData extends Data{

    /**
     * @type {number}
     */
    id

    /**
     * @type {number}
     */
    sourceId

    /**
     * @type {NodeInput[]}
     */
    inputs

    constructor() {
        super()
        this.id = Maths.generateId()
        this.inputs = []
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
     * @return {number}
     */
    getSourceId(){
        return this.sourceId
    }

    /**
     * @param {number} sourceId
     */
    setSourceId(sourceId){
        this.sourceId = sourceId
    }

    /**
     * @return {NodeInput[]}
     */
    getInputs(){
        return this.inputs
    }

    /**
     * @param {NodeInput[]} inputs
     */
    setInputs(inputs){
        this.inputs = inputs
    }

    /**
     * @param {NodeInput[]} inputs
     */
    concatInputs(inputs){
        this.setInputs(inputs)
    }

}