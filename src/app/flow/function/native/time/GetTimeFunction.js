import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetTimeFunction extends AFunction{

    constructor() {
        super('GetTime')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addOutput(TYPES.NUMBER)
    }

    /**
     * @override
     */
    execute() {
        this.setOutputValue(Date.now())
    }
}