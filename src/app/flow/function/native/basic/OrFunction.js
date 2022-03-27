import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class OrFunction extends AFunction{

    constructor() {
        super('||')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value1', TYPES.BOOLEAN, 0)
        this.addInput('value2', TYPES.BOOLEAN, 0)
        this.addOutput(TYPES.BOOLEAN)
    }
}