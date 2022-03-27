import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetInputYAxisFunction extends AFunction{

    constructor() {
        super('GetInputYAxis')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addOutput(TYPES.NUMBER, 0)
    }
}