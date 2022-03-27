import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetInputXAxisFunction extends AFunction{

    constructor() {
        super('GetInputXAxis')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addOutput(TYPES.NUMBER, 0)
    }
}