import Data from './Data.js'
import Maths from '../../utils/Maths.js'

export default class ANodeData extends Data{

    /**
     * @type {number}
     */
    id

    /**
     * @type {string}
     */
    sourceName

    /**
     * @type {NodeInput[]}
     */
    inputs

    /**
     * @type {Vector}
     */
    position

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
     * @param {Vector} position
     */
    setPosition(position){
        this.position = position
    }

    /**
     * @return {Vector}
     */
    getPosition(){
        return this.position
    }

    /**
     * @return {string}
     */
    getSourceName(){
        return this.sourceName
    }

    /**
     * @param {string} sourceName
     */
    setSourceName(sourceName){
        this.sourceName = sourceName
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