import Component from '../../../Component.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class NodeComponent extends Component{


    constructor() {
        super('Style')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('title', TYPES.STRING)
        this.add('type', TYPES.STRING)
        this.add('inputs', TYPES.ARRAY_STRING)
        this.add('output', TYPES.STRING)
    }

    /**
     * @override
     */
    getFormFields() {
        return []
    }

    /**
     * @param {string} title
     */
    setTitle(title) {
        this.setValue('title', title)
    }

    /**
     * @param {string} type
     */
    setType(type) {
        this.setValue('type', type)
    }

    /**
     * @param {string[]} inputs
     */
    setInputs(inputs) {
        this.setValue('inputs', inputs)
    }

    /**
     * @param {string} output
     */
    setOutput(output) {
        this.setValue('output', output)
    }

    /**
     * @return {string}
     */
    getTitle(){
        return this.getValue('title')
    }

    /**
     * @return {string}
     */
    getType(){
        return this.getValue('type')
    }

    /**
     * @return {string[]}
     */
    getInputs(){
        return this.getValue('inputs')
    }

    /**
     * @return {string}
     */
    getOutput(){
        return this.getValue('output')
    }

}