import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetDeltaTimeFunction extends AFunction{

    constructor() {
        super('GetDeltaTime')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addOutput(TYPES.NUMBER)
    }
}