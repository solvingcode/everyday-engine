import Data from './Data.js'
import Maths from '../../utils/Maths.js'

export default class FunctionData extends Data {

    /**
     * @type {number}
     */
    id
    /**
     * @type {string}
     */
    name
    /**
     * @type {DynamicAttribute[]}
     */
    inputs
    /**
     * @type {DynamicAttribute}
     */
    output
    /**
     * @type {StackOperation[]}
     */
    stack

    /**
     * @param {string} name
     */
    constructor(name) {
        super()
        this.id = Maths.generateId()
        this.name = name
        this.inputs = []
        this.stack = []
        this.output = null
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
    getId() {
        return this.id
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

    /**
     * @return {DynamicAttribute[]}
     */
    getInputs(){
        return this.inputs
    }

    /**
     * @param {DynamicAttribute[]} inputs
     */
    setInputs(inputs){
        this.inputs = inputs
    }

    /**
     * @return {StackOperation[]}
     */
    getStack(){
        return this.stack
    }

    /**
     * @param {StackOperation[]} stack
     */
    setStack(stack){
        this.stack = stack
    }

    /**
     * @return {DynamicAttribute}
     */
    getOutput(){
        return this.output
    }

    /**
     * @param {DynamicAttribute} output
     */
    setOutput(output){
        this.output = output
    }

    /**
     * @param {DynamicAttribute[]} inputs
     */
    concatInputs(inputs) {
        this.setInputs(inputs)
    }

    /**
     * @param {StackOperation[]} stack
     */
    concatStack(stack){
        this.setStack(stack)
    }

}