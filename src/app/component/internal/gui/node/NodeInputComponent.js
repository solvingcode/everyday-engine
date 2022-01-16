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
        this.add('nodeInput', TYPES.ANY)
    }

    /**
     * @override
     */
    getFormFields() {
        return []
    }

    /**
     * @param {NodeInput} nodeInput
     */
    setNodeInput(nodeInput) {
        this.setValue('nodeInput', nodeInput)
    }

    /**
     * @return {NodeInput}
     */
    getNodeInput(){
        return this.getValue('nodeInput')
    }

}