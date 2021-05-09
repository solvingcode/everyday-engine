import Component from '../../../Component.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class NodeInputComponent extends Component{


    constructor() {
        super('Node Input')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('nodeInputId', TYPES.NUMBER)
    }

    /**
     * @override
     */
    getFormFields() {
        return []
    }

    /**
     * @param {number} nodeInputId
     */
    setNodeInputId(nodeInputId) {
        this.setValue('nodeInputId', nodeInputId)
    }

    /**
     * @return {number}
     */
    getNodeInputId(){
        return this.getValue('nodeInputId')
    }

}